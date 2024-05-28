import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { useTable } from '@/hooks/useTable';
import { New } from '@/Components/Groups/New';
import { Edit } from '@/Components/Groups/Edit';



export default function ContactsRequest({ auth, data, msj }) {

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
        
        data.forEach(element => {
            element.name = element.first_name + ' ' + element.second_name + ' ' + element.fLast_name + ' ' + element.sLast_name;
            element.requestDate = new Date(element.created_at).toLocaleDateString('es-DO');
        });


        setDataList(data)
        setAlert(msj)
    }, [data, msj])

    const requestStatus = (rowData) => {
        if (rowData.status == 0) {
            return <span className="rounded-md bg-red-500 text-jewel-text py-1 px-2">Rechazada</span>
        } else if (rowData.status == 1) {
            return <span className="rounded-md bg-lime-500 text-jewel-text py-1 px-2">Aprobada</span>
        } else{
            return <span className="rounded-md bg-sky-500 text-jewel-text py-1 px-2">Pendiente</span>
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Solicitudes de contactos</h2>}
        >
            <Head title="Solicitudes" />

            <div className='h-[calc(100vh-120px)] rounded-b-md flex flex-col'>

                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className='pt-3 pb-0 rounded-none' />

                <DataTable  {...tableConfig}>

                    <Column field='id' header='ID' sortable className='py-2 ' />

                    <Column field='name' header='Nombre' sortable className='py-2 ' />

                    <Column field='email' header='Nivel' sortable className='py-2' />

                    <Column field='requestDate' header='Fecha de solicitud' sortable className='py-2' />

                    <Column field='responseDate' header='Fecha de respuesta' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable className='py-2' body={requestStatus} />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2 min-w-36' />

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
                value={selectedItem.group}
                message={"el grupo"}
                endpoint=''
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />

        </AuthenticatedLayout>
    );
}
