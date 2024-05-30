import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import NewUser from '@/Components/Users/New';
import { useTable } from '@/hooks/useTable';
import { Edit } from '@/Components/Levels/Edit';
import { New } from '@/Components/Levels/New';

export default function Levels({ auth, currentUser, data, msj }) {


    console.log(data)
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
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Niveles</h2>}
        >
            <Head title="Lista de Niveles" />

            <div className='h-[calc(100vh-120px)] rounded-b-md flex flex-col'>

                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className="py-2 rounded-none bg-white bg-opacity-40" />

                <DataTable  {...tableConfig}>

                    <Column field='id' header='ID' sortable className='py-2 ' />

                    <Column field='name' header='Nivel' sortable className='py-2' />
                   
                    <Column field='description' header='Descripción' sortable className='py-2' />
                   
                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2' />

                </DataTable>

            </div>
            {/* modal edit User */}
            <Edit
                selectedItem={selectedItem}
                showDialog={editItemDialog}
                hideDialog={onHideEditDialog}
                endpoint=''
            />

            <New
                showDialog={showNewDialog}
                hideDialog={() => setShowNewDialog(false)}
            />


            <DeleteAlert
                itemId={selectedItem.id}
                value={selectedItem.level}
                message={"el nivel"}
                endpoint=''
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />

        </AuthenticatedLayout>
    );
}
