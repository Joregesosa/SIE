import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import NewUser from '@/Components/Users/New';
import { useTable } from '@/hooks/useTable';
import Edit from '@/Components/Users/Edit';

export default function Users({ auth, currentUser, data, msj }) {

    console.log(currentUser)
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
        return <span>{rowData.person.first_name} {rowData.person.second_name} {rowData.person.fLast_name} {rowData.person.sLast_name}</span>
    }

    useEffect(() => {
        setDataList(data)
        setAlert(msj)
    }, [data, msj])
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Usuarios"}
        >
            <Head title="Lista de Usuarios" />

            <Toolbar
                left={RenderLeftToolbar}
                right={() => RenderRightToolbar(dt)}
                className="py-2 rounded-none bg-white bg-opacity-40"
            />

            <DataTable  {...tableConfig}>

                <Column field='id' header='ID' sortable className='py-2 ' />

                <Column field='person.first_name' header='Nombre' sortable className='py-2' body={renderUserName} />

                <Column field='user_name' header='usuario' sortable className='py-2' />

                <Column field='email' header='Email' sortable className='py-2' />

                <Column field='role.role' header='Rol' sortable className='py-2' />

                <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

                <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2' />

            </DataTable>

            {/* modal edit User */}
            <Edit
                selectedItem={selectedItem}
                showDialog={editItemDialog}
                hideDialog={onHideEditDialog}
                endpoint='permission.update'
            />
            {/* modal delete User */}

            {/* 
            <NewUser
                showDialog={newUserDialog}
 
                hideDialog={()=>setNewUserDialog(false)}
            /> */}

            <DeleteAlert
                itemId={selectedItem.id}
                value={selectedItem.user_name}
                message={"el usuario"}
                endpoint='role.delete'
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />

        </AuthenticatedLayout>
    );
}
