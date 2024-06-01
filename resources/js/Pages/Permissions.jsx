import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { useTable } from '@/hooks/useTable';
import NewPermission from '@/Components/Permissions/New';
import { Alert } from '@/Components/Alerts/Alert';
import Edit from '@/Components/Permissions/Edit';

export default function Permissions({ auth, data, msj }) {

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

    useEffect(() => {
        setDataList(data)
        setAlert(msj)
    }, [data, msj])



    return (
        <AuthenticatedLayout
            alert={alert}
            setAlert={setAlert}
            user={auth.user}
            header={"Usuarios / Permisos"}
        >
            <Head title="Lista de Usuarios" />

 
                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className="py-2 rounded-none bg-white bg-opacity-40" 
                />
                <DataTable ref={dt} value={dataList} {...tableConfig} >

                    <Column field='id' header='ID' sortable className='h-fit' />

                    <Column field='name' header='Nombre' sortable className='h-fit' />

                    <Column field='description' header='Descripción' sortable className='h-fit' />

                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='h-fit' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='h-fit' />

                </DataTable>
       

            {/* modal delete User */}

            <Edit
                selectedItem={selectedItem}
                showDialog={editItemDialog}
                hideDialog={onHideEditDialog}
                endpoint='permission.update'
            />

            <DeleteAlert
                itemId={selectedItem.id}
                value={selectedItem.permission}
                message={"el permiso"}
                endpoint='permission.delete'
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />

            <NewPermission
                showDialog={showNewDialog}
                hideDialog={() => setShowNewDialog(false)}
            />

        </AuthenticatedLayout>
    );
}
