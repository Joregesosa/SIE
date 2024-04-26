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
        setShowNewDialog
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
            header={<h2 className="font-semibold text-lg leading-tight">Permisos</h2>}
        >
            <Head title="Lista de Usuarios" />

            <div className='h-[calc(100vh-120px)]  bg-white rounded-b-md flex flex-col'>
                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className='pt-3 pb-0 rounded-none' />
                <DataTable ref={dt} value={dataList} {...tableConfig} >

                    <Column field='id' header='ID' sortable className='py-2' />

                    <Column field='permission' header='Nombre' sortable className='py-2' />

                    <Column field='description' header='Descripción' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2' />

                </DataTable>
            </div>

            {/* modal delete User */}


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
