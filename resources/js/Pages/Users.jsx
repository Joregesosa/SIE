import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useRef, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import EditUser from '@/Components/Users/EditUser';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { classNames } from 'primereact/utils';
import { ThemeContext } from '@/Context/ThemeProvider';

const defaultUsers = [
    {
        id: "1",
        firstName: "Ana",
        secondName: "María",
        fLastName: "Pérez",
        sLastName: "Gómez",
        userName: "ana_perez",
        email: "ana.perez@correo.com",
        rol: "administrador",
        status: true,
    },
    {
        id: "2",
        firstName: "Juan",
        secondName: "José",
        fLastName: "López",
        sLastName: "Martínez",
        userName: "juan_lopez",
        email: "juan.lopez@correo.com",
        rol: "editor",
        status: true,
    },
    {
        id: "3",
        firstName: "María",
        secondName: "Isabel",
        fLastName: "Gutiérrez",
        sLastName: "Hernández",
        userName: "maria_gutierrez",
        email: "maria.gutierrez@correo.com",
        rol: "lector",
        status: true,
    },
    {
        id: "4",
        firstName: "Pedro",
        secondName: "Antonio",
        fLastName: "Fernández",
        sLastName: "García",
        userName: "pedro_fernandez",
        email: "pedro.fernandez@correo.com",
        rol: "lector",
        status: false,
    },
    {
        id: "5",
        firstName: "Laura",
        secondName: "Carolina",
        fLastName: "Díaz",
        sLastName: "Rodríguez",
        userName: "laura_diaz",
        email: "laura.diaz@correo.com",
        rol: "lector",
        status: true,
    },
    {
        id: "6",
        firstName: "Miguel",
        secondName: "Ángel",
        fLastName: "Martínez",
        sLastName: "Pérez",
        userName: "miguel_martinez",
        email: "miguel.martinez@correo.com",
        rol: "editor",
        status: false,
    },
    {
        id: "7",
        firstName: "Sofia",
        secondName: "Camila",
        fLastName: "Sánchez",
        sLastName: "López",
        userName: "sofia_sanchez",
        email: "sofia.sanchez@correo.com",
        rol: "lector",
        status: true,
    },
    {
        id: "8",
        firstName: "David",
        secondName: "Alejandro",
        fLastName: "González",
        sLastName: "Fernández",
        userName: "david_gonzalez",
        email: "david.gonzalez@correo.com",
        rol: "administrador",
        status: false,
    },
    {
        id: "9",
        firstName: "Elena",
        secondName: "Paula",
        fLastName: "Romero",
        sLastName: "García",
        userName: "elena_romero",
        email: "elena.romero@correo.com",
        rol: "lector",
        status: true,
    },
    {
        id: "10",
        firstName: "Francisco",
        secondName: "Javier",
        fLastName: "Torres",
        sLastName: "Martínez",
        userName: "francisco_torres",
        email: "francisco.torres@correo.com",
        rol: "editor",
        status: true,
    },
    {
        id: "11",
        firstName: "Clara",
        secondName: "Julia",
        fLastName: "Navarro",
        sLastName: "Pérez",
        userName: "clara_navarro",
        email: "clara.navarro@correo.com",
        rol: "lector",
        status: false,
    },
    {
        id: "12",
        firstName: "Daniel",
        secondName: "Andrés",
        fLastName: "Blanco",
        sLastName: "López",
        userName: "daniel_blanco",
        email: "daniel.blanco@correo.com",
        rol: "lector",
        status: true,
    },
];

export default function Users({ auth }) {
    const [users, setUsers] = useState(defaultUsers)
    const [selectedUser, setSelectedUser] = useState({})
    const [globalFilter, setGlobalFilter] = useState(null);
    const [editUserDialog, setEditUserDialog] = useState(false);
    const [deleteUserDialog, setDeleteUserDialog] = useState(false);
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
    const getStatusStyle = (user) => {
        switch (user.status) {
            case true:
                return 'success';

            case false:
                return 'warning';

            default:
                return null;
        }
    };

    const editUser = (user) => {
        setSelectedUser(user);
        setEditUserDialog(true);
    };

    const deleteUser = (user) => {
        setSelectedUser(user);
        setDeleteUserDialog(true);
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
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editUser(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => deleteUser(rowData)} />
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

    /* Render Right Toolbar component*/
    const renderRightToolbar = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    /* Render footer buttons */
    const renderUserDialogFooter = (close, execute) => (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" outlined onClick={() => close(false)} className='mx-3' />
            <Button label="Aceptar" icon="pi pi-check" className='mx-3' />
        </React.Fragment>
    );

    /* Render users */
    const renderUserName = (rowData) => {
        return <span>{rowData.firstName} {rowData.secondName} {rowData.fLastName} {rowData.sLastName}</span>
    }

    const tableConfig = {
        dataKey:'id',paginator: true, rows:5, rowsPerPageOptions:[5, 10, 25], paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown", currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} usuarios", globalFilter: globalFilter, header: search, scrollable:true, scrollHeight:'484px', paginatorClassName:`bg-${theme}-primary text-${theme}-text rounded-b-md`, className:'h-full flex flex-grow flex-col'
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Usuarios</h2>}
        >
            <Head title="Lista de Usuarios" />
            <div className='h-full bg-white rounded-b-md flex flex-col'>
                <Toolbar className={` rounded-none`} left={renderLeftToolbar} right={renderRightToolbar} />

                <DataTable ref={dt} value={users} {...tableConfig}>

                    <Column field='id' header='ID' sortable className='py-2 ' />

                    <Column field='firstName' header='Nombre' sortable className='py-2' body={renderUserName} />

                    <Column field='userName' header='usuario' sortable className='py-2' />

                    <Column field='email' header='Email' sortable className='py-2' />

                    <Column field='rol' header='Rol' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable body={renderStatus} className='py-2' />

                    <Column header="Acciones" body={renderActionButtons} exportable={false} className='py-2' />

                </DataTable>
            </div>
            {/* modal edit User */}
            <EditUser
                user={selectedUser}
                showDialog={editUserDialog}
                actionFooter={renderUserDialogFooter(setEditUserDialog)}
                hideDialog={() => setEditUserDialog(false)}
            />
            {/* modal delete User */}
            <DeleteAlert
                data={selectedUser.userName}
                message={"el usuario"}
                showDialog={deleteUserDialog}
                actionFooter={() => renderUserDialogFooter(setDeleteUserDialog)}
                hideDialog={() => setDeleteUserDialog(false)}

            />

        </AuthenticatedLayout>
    );
}
