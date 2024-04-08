import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useRef, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { ThemeContext } from '@/Context/ThemeProvider';

const defaultRoles = [
    {
        id: "1",
        role: "Director/a",
        permissions: [
            "Gestionar personal",
            "Gestionar alumnado",
            "Gestionar presupuesto",
            "Acceso a toda la información del centro",
        ],
        status: true,
    },
    {
        id: "2",
        role: "Profesor/a",
        permissions: [
            "Impartir clases",
            "Calificar tareas y exámenes",
            "Comunicarse con las familias",
            "Acceso al expediente académico de sus alumnos",
        ],
        status: true,
    },
    {
        id: "3",
        role: "Tutor/a",
        permissions: [
            "Orientación y seguimiento académico de los alumnos",
            "Tutorías individualizadas",
            "Comunicación con las familias",
            "Acceso al expediente académico de sus tutorados",
        ],
        status: true,
    },
    {
        id: "4",
        role: "Secretario/a",
        permissions: [
            "Gestión administrativa del centro",
            "Atención al público",
            "Trámites y expedientes",
            "Acceso a la información general del centro",
        ],
        status: true,
    },
    {
        id: "5",
        role: "Conserje",
        permissions: [
            "Mantenimiento del centro",
            "Control de acceso",
            "Seguridad del centro",
            "Acceso a las instalaciones del centro",
        ],
        status: true,
    },
    {
        id: "6",
        role: "Bibliotecario/a",
        permissions: [
            "Gestión de la biblioteca",
            "Préstamo y devolución de libros",
            "Búsqueda y recuperación de información",
            "Acceso a la información bibliográfica",
        ],
        status: true,
    },
    {
        id: "7",
        role: "Becario/a",
        permissions: [
            "Colaboración en tareas administrativas",
            "Apoyo en el aula",
            "Participación en actividades extraescolares",
            "Acceso a la información general del centro",
        ],
        status: true,
    },
];


export default function Roles({ auth }) {
    const [roles, setRoles] = useState(defaultRoles)
    const [selectedRole, setSelectedRole] = useState({})
    const [globalFilter, setGlobalFilter] = useState(null);
    const [editRoleDialog, setEditRoleDialog] = useState(false);
    const [deleteRoleDialog, setDeleteRoleDialog] = useState(false);
    const { theme } = useContext(ThemeContext)
    const dt = useRef(null);
    /* searh function */
    const search = (
        <div className="flex flex-wrap gap-2 align-items-center pl-8">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    /* Set styles for status function this is goin to be moved to a global space */
    const getStatusStyle = (role) => {
        switch (role.status) {
            case true:
                return 'success';

            case false:
                return 'warning';

            default:
                return null;
        }
    };

    const editRole = (role) => {
        setSelectedRole(role);
        setEditRoleDialog(true);
    };

    const deleteRole = (role) => {
        setSelectedRole(role);
        setDeleteRoleDialog(true);
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    /* Render status component */
    const renderStatus = (rowData) => {
        return <Tag value={rowData.status ? 'Activo' : 'Inactivo'} severity={getStatusStyle(rowData)} />;
    };

    /* Render Actions buttons component */
    const renderActionButtons = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editRole(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => deleteRole(rowData)} />
            </React.Fragment>
        );
    };

    /* Render left Toolbar component*/
    const renderLeftToolbar = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Nuevo" icon="pi pi-plus" severity="success" /* onClick={openNew} */ />
            </div>
        );
    };

    const renderPermissions = (rowData) => {
        return <div className='flex flex-wrap gap-2'>
             {
                rowData.permissions.map((item, i) =>
                        <span key={i} className='rounded-md bg-gray-100 px-2'>{item}</span>
                    )
             }
        </div>

    }

    /* Render Right Toolbar component*/
    const renderRightToolbar = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    /* Render footer buttons */
    const renderRoleDialogFooter = (close, execute) => (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" outlined onClick={() => close(false)} className='mx-3' />
            <Button label="Aceptar" icon="pi pi-check" className='mx-3' />
        </React.Fragment>
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Roles</h2>}
        >
            <Head title="Lista de Usuarios" />

            <div className='h-full bg-white rounded-b-md flex flex-col'>
                <Toolbar className="rounded-none" left={renderLeftToolbar} right={renderRightToolbar}   />
                <DataTable ref={dt} value={roles} dataKey='id' paginator rows={5} rowsPerPageOptions={[5, 10, 25]} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} usuarios"  globalFilter={globalFilter} header={search} height='100%' scrollable scrollHeight='404px' rowHover  paginatorClassName={`bg-${theme}-primary text-${theme}-text rounded-b-md`} >

                    <Column field='id' header='ID' sortable className='py-2' />

                    <Column field='role' header='Nombre' sortable className='py-2' />

                 {/*    <Column field='permissions' header='Permisos' sortable className='py-2' body={renderPermissions} style={{ maxWidth: "320px" }} /> */}

                    <Column field='status' header='Estatus' sortable body={renderStatus} className='py-2' />

                    <Column header="Acciones" body={renderActionButtons} exportable={false} className='py-2' />

                </DataTable>
            </div>
            {/* modal edit User */}
            {/*  <EditUser
                user={selectedRole}
                showDialog={editUserDialog}
                actionFooter={renderRoleDialogFooter(setEditRoleDialog)}
                hideDialog={() => setEditRoleDialog(false)}
            /> */}
            {/* modal delete User */}


            <DeleteAlert
                data={selectedRole.role}
                message={"el rol"}
                showDialog={deleteRoleDialog}
                actionFooter={() => renderRoleDialogFooter(setDeleteRoleDialog)}
                hideDialog={() => setDeleteRoleDialog(false)}
            />
        </AuthenticatedLayout>
    );
}
