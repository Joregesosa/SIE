import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { useTable } from '@/hooks/useTable';
 
export default function Permissions({ auth, data }) {
    const {
        dt,
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
        tableConfig
    } = useTable(data)
 


    const renderRoleDialogFooter = (close, execute) => (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" outlined onClick={close} className='mx-3' />
            <Button label="Aceptar" icon="pi pi-check" className='mx-3' />
        </React.Fragment>
    );

    return (
        <AuthenticatedLayout
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
                data={selectedItem.permission}
                message={"el permiso"}
                showDialog={deleteItemDialog}
                actionFooter={() => renderRoleDialogFooter(hideDeleteDialog)}
                hideDialog={hideDeleteDialog}
            />
        </AuthenticatedLayout>
    );
}
