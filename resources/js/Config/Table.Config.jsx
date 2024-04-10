import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
/* Estas son los estilos generales que se usaran en cada tabla*/
export const TableConfig = (theme, globalFilter, search, ref, data) => ({
    ref:ref, value: data, dataKey: 'id', paginator: true, rows: 5, rowsPerPageOptions: [5, 10, 25], paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown", currentPageReportTemplate: "Showing {first} to {last} of {totalRecords} usuarios", globalFilter: globalFilter, header: search, scrollable: true, paginatorClassName: `bg-${theme}-primary text-${theme}-text rounded-b-md`
})

/* Barra de busqueda */
export const Search = (setGlobalFilter) => (
    <div className="flex flex-wrap gap-2 align-items-center pl-8">
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
        </span>
    </div>
);

/* 
    * getStatusStyle
    * RenderStatus 
    Establecen los estilos de status en la tabla 
*/
const getStatusStyle = (object) => {
    switch (object.status) {
        case true:
            return 'success';

        case false:
            return 'warning';

        default:
            return null;
    }
};

export const RenderStatus = (rowData) => {
    return <Tag value={rowData.status ? 'Activo' : 'Inactivo'} severity={getStatusStyle(rowData)} />;
};

/* 
    * exportCSV
    Export data tu CSV

*/
const exportCSV = (ref) => {
    ref.current.exportCSV();
};

export const RenderRightToolbar = (ref) => {
    return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={() => exportCSV(ref)} />;
};


export const RenderLeftToolbar = () => {
    return (
        <div className="flex flex-wrap gap-2">
            <Button label="Nuevo" icon="pi pi-plus" severity="success" /* onClick={openNew} */ />
        </div>
    );
};

/*   
    Table Actions
    Add actions buttons to table
*/
export const RenderActionButtons = (rowData, onEdit, onDelete) => {
    return (
        <>
            <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => onEdit(rowData)} />
            <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => onDelete(rowData)} />
        </>


    );
};