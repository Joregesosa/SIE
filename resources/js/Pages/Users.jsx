import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import EditUser from '@/Components/Users/EditUser';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';


import NewUser from '@/Components/Users/New';
import { useTable } from '@/hooks/useTable';

export default function Users({ auth, data, msj }) {

    const {
        dt,
        alert,
        setAlert,
        RenderStatus,
        RenderRightToolbar,
        RenderLeftToolbar,
        RenderActionButtons,
        dataList,
        setDataList,
        selectedItem,
        editItemDialog,
        deleteItemDialog,
        hideDeleteDialog,
        tableConfig,
        showNewDialog,
        setShowNewDialog,
        onHideEditDialog
    } = useTable(data)

    /* Render users */
    const renderUserName = (rowData) => {
        return <span>{rowData.firstName} {rowData.secondName} {rowData.fLastName} {rowData.sLastName}</span>
    }

    useEffect(() => {
        console.log(data)
        setDataList(data)
        setAlert(msj)
    }, [data, msj])
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Usuarios</h2>}
        >
            <Head title="Lista de Usuarios" />

            <div className='h-[calc(100vh-120px)] rounded-b-md flex flex-col'>
                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className='pt-3 pb-0 rounded-none' />

                <DataTable  {...tableConfig}>

                    <Column field='id' header='ID' sortable className='py-2 ' />

                    <Column field='firstName' header='Nombre' sortable className='py-2' body={renderUserName} />

                    <Column field='userName' header='usuario' sortable className='py-2' />

                    <Column field='email' header='Email' sortable className='py-2' />

                    <Column field='roles.role' header='Rol' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2' />

                </DataTable>
            </div>
            {/* modal edit User */}
            {/* <EditUser
                user={selectedUser}
                showDialog={editUserDialog}
                actionFooter={renderUserDialogFooter(setEditUserDialog)}
                hideDialog={() => setEditUserDialog(false)}
            /> */}
            {/* modal delete User */}

            {/* 
            <NewUser
                showDialog={newUserDialog}
 
                hideDialog={()=>setNewUserDialog(false)}
            /> */}

            <DeleteAlert
                itemId={selectedItem.id}
                value={selectedItem.userName}
                message={"el usuario"}
                endpoint='role.delete'
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />

        </AuthenticatedLayout>
    );
}
