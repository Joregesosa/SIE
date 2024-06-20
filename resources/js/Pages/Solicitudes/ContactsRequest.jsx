import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { useTable } from '@/hooks/useTable';
import { New } from '@/Components/Groups/New';

export default function ContactsRequest({ auth, data, msj }) {
    const {
        dt,
        setAlert,
        RenderRightToolbar,
        RenderLeftToolbar,
        setDataList,
        selectedItem,
        deleteItemDialog,
        hideDeleteDialog,
        tableConfig,
        showNewDialog,
        setShowNewDialog,
        RenderActionLinks
    } = useTable(data)

    useEffect(() => {
        setDataList(data)
        setAlert(msj)
    }, [data, msj])

    const RenderName = (rowData) => {
        return rowData.first_name + ' ' + rowData.fLast_name
    }

    const requestStatus = (rowData) => {
        if (rowData.status === 1) {
            return <span className="rounded-md bg-sky-500 text-jewel-text py-1 px-2">Pendiente</span>
        }

        if (rowData.status === 2) {
            return <span className="rounded-md bg-lime-500 text-jewel-text py-1 px-2">Aprobada</span>
        }

        if (rowData.status === 3) {
            return <span className="rounded-md bg-red-500 text-jewel-text py-1 px-2">Rechazada</span>
        }
    }

    const link = (rowData) => {
             
             return <Link href={route('inscription.create',{ contact: rowData.key, card: rowData.id_card })} className="cursor-pointer rounded-md bg-red-500 text-jewel-text py-1 px-2">
                        Ir al Formulario -
                    </Link>
    }


    const getDate = (rowData) => {
        const date = new Date(rowData.created_at)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options)
    }

    const edit = (rowData) => {
      
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Solicitudes / Postulantes"
        >
            <Head title="Lista de Solicitudes" />

            <div className='h-[calc(100vh-120px)] rounded-b-md flex flex-col'>

                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className='py-2 rounded-none' />

                <DataTable  {...tableConfig}>

                    <Column field='id' header='ID' sortable />

                    <Column  header='Nombre' sortable body={RenderName} />

                    <Column field='email' header='Email' sortable />

                    <Column header='Fecha de solicitud' sortable body={getDate}/>

                    <Column field='responseDate' header='Provisional-Matriculacion' sortable body={link} />

                    <Column field='status' header='Estatus' sortable body={requestStatus} />

                    <Column header="Acciones" body={(rowData) => RenderActionLinks(rowData , 'contact.show')} exportable={false} />

                </DataTable>

            </div>
    
            <New
                showDialog={showNewDialog}
                hideDialog={() => setShowNewDialog(false)}
            />


            <DeleteAlert
                itemId={selectedItem.id}
                value={selectedItem.email}
                message={"el estudiante"}
                endpoint=''
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />

        </AuthenticatedLayout>
    );
}
