import { ThemeContext } from '@/Context/ThemeProvider';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import React, { useContext, useRef, useState } from 'react'

export const useTable = (data) => {

    const [dataList, setDataList] = useState(data)
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedItem, setSelectedItem] = useState({})
    const [editItemDialog, setEditItemDialog] = useState(false);
    const [deleteItemDialog, setDeleteItemDialog] = useState(false);
    const [showNewDialog, setShowNewDialog] = useState(false)
    const [alert, setAlert] = useState(null)
    const { theme } = useContext(ThemeContext)
    const dt = useRef(null);


    const getStatusStyle = (object) => {
        switch (object.status) {
            case true:
            case 1:
                return 'success';

            case false:
            case 0:
                return 'warning';

            default:
                return null;
        }
    };

    const editItem = (item) => {
        setSelectedItem(item);
        setEditItemDialog(true);
    };

    const deleteItem = (item) => {
        setSelectedItem(item);
        setDeleteItemDialog(true);
    };

    const hideDeleteDialog = () => setDeleteItemDialog(false)
    const onHideEditDialog = () => setEditItemDialog(false)
    const exportCSV = (ref) => {
        ref.current.exportCSV();
    };

    /* Todo lo que dice render es un componente */
    const RenderStatus = (rowData) => {
      
        return <Tag value={rowData.status? 'Activo' : 'Inactivo'} severity={getStatusStyle(rowData)} />;
    };

    const RenderRightToolbar = (ref) => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={() => exportCSV(ref)} />;
    };

    const RenderLeftToolbar = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Nuevo" icon="pi pi-plus" severity="success" onClick={() => setShowNewDialog(true)} />
            </div>
        );
    };

    const RenderActionButtons = (rowData) => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2 h-fit" onClick={() => editItem(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" className='h-fit' onClick={() => deleteItem(rowData)} />
            </>
        );
    };

    const RenderSearch = () => (
        <div className="flex flex-wrap gap-2 align-items-center pl-8 bg-transparent">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..."/>
            </span>
        </div>
    );
    const pt = {
        header: {className:"bg-white bg-opacity-40"},
    }
    const tableConfig = {
        ref: dt, value: dataList, dataKey: 'id', paginator: true, rows: 5, rowsPerPageOptions: [5, 10, 25], paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown", currentPageReportTemplate: "Showing {first} to {last} of {totalRecords} usuarios", globalFilter: globalFilter, header: RenderSearch, scrollable: true, paginatorClassName: `bg-${theme}-secondary text-${theme}-text rounded-b-md`
    }

    return {
        dt,
        alert,
        setAlert,
        dataList,
        setDataList,
        globalFilter,
        RenderStatus,
        RenderRightToolbar,
        RenderLeftToolbar,
        RenderActionButtons,
        selectedItem,
        editItemDialog,
        deleteItemDialog,
        hideDeleteDialog,
        tableConfig,
        showNewDialog,
        setShowNewDialog,
        onHideEditDialog
    }
}
