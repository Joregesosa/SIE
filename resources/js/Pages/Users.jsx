import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useRef, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import EditUser from '@/Components/Users/EditUser';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { ThemeContext } from '@/Context/ThemeProvider';
import { Search, TableConfig, RenderStatus, RenderRightToolbar, RenderLeftToolbar, RenderActionButtons } from '@/Config/Table.Config';
import NewUser from '@/Components/Users/New';

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
    const [newUserDialog, setNewUserDialog] = useState(false);
    const { theme } = useContext(ThemeContext)
    const dt = useRef(null);

    const search = Search(setGlobalFilter)
    const tableConfig = TableConfig(theme, globalFilter, search, dt, users)

    const editUser = (user) => {
        setSelectedUser(user);
        setEditUserDialog(true);
    };

    const deleteUser = (user) => {
        setSelectedUser(user);
        setDeleteUserDialog(true);
    };

    /* Render footer buttons */
    const renderUserDialogFooter = (close, execute) => (
        <>
            <Button label="Cancelar" icon="pi pi-times" outlined onClick={() => close(false)} className='mx-3' />
            <Button label="Aceptar" icon="pi pi-check" className='mx-3' />
        </>
    );

    /* Render users */
    const renderUserName = (rowData) => {
        return <span>{rowData.firstName} {rowData.secondName} {rowData.fLastName} {rowData.sLastName}</span>
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Usuarios</h2>}
        >
            <Head title="Lista de Usuarios" />

            <div className='h-[calc(100vh-120px)] rounded-b-md flex flex-col'>
                <Toolbar left={()=>RenderLeftToolbar(setNewUserDialog)} right={() => RenderRightToolbar(dt)} className='pt-3 pb-0 rounded-none' />

                <DataTable  {...tableConfig}>

                    <Column field='id' header='ID' sortable className='py-2 ' />

                    <Column field='firstName' header='Nombre' sortable className='py-2' body={renderUserName} />

                    <Column field='userName' header='usuario' sortable className='py-2' />

                    <Column field='email' header='Email' sortable className='py-2' />

                    <Column field='rol' header='Rol' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData, editUser, deleteUser)} exportable={false} className='py-2' />

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

            <NewUser
                showDialog={newUserDialog}
                actionFooter={() => renderUserDialogFooter(setNewUserDialog)}
                hideDialog={()=>setNewUserDialog(false)}
            />

        </AuthenticatedLayout>
    );
}
