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


const contactsData = [
    {
        id: 1,
        name: 'Juan',
        email: 'juan@example.com',
        comment: 'Hola, estoy interesado en obtener más información sobre el producto.',
        status: "Pendiente",
        requestDate: '2021-10-01',
        responseDate: '',
    },
    {
        id: 2,
        name: 'María',
        email: 'maria@example.com',
        comment: 'Buenos días, quisiera solicitar una cotización para el servicio.',
        status: "Aprobada",
        requestDate: '2021-10-02',
        responseDate: '2021-10-03',
    },
    {
        id: 3,
        name: 'Pedro',
        email: 'pedro@example.com',
        comment: 'Hola, necesito ayuda con un problema técnico en el sistema.',
        status: "Pendiente",
        requestDate: '2021-10-03',
        responseDate: '',
    },
    {
        id: 4,
        name: 'Ana',
        email: 'ana@example.com',
        comment: 'Buenas tardes, quisiera agendar una reunión para discutir el proyecto.',
        status: "Aprobada",
        requestDate: '2021-10-04',
        responseDate: '2021-10-05',
    },
    {
        id: 5,
        name: 'Carlos',
        email: 'carlos@example.com',
        comment: 'Hola, necesito información sobre los requisitos para la inscripción.',
        status: "Pendiente",
        requestDate: '2021-10-05',
        responseDate: '',
    },
    {
        id: 6,
        name: 'Laura',
        email: 'laura@example.com',
        comment: 'Buenos días, quisiera solicitar una devolución del producto.',
        status: "Rechazada",
        requestDate: '2021-10-06',
        responseDate: '2021-10-07',
    },
    {
        id: 7,
        name: 'Roberto',
        email: 'roberto@example.com',
        comment: 'Hola, tengo una pregunta sobre el proceso de pago.',
        status: "Pendiente",
        requestDate: '2021-10-07',
        responseDate: '',
    }
]
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
        setDataList(data)
        setAlert(msj)
    }, [data, msj])

    const RenderName = (rowData) => {
        return rowData.first_name + ' ' + rowData.fLast_name
    }

    const requestStatus = (rowData) => {
        if (rowData.status === 2) {
            return <span className="rounded-md bg-sky-500 text-jewel-text py-1 px-2">Pendiente</span>
        }

        if (rowData.status === 1) {
            return <span className="rounded-md bg-lime-500 text-jewel-text py-1 px-2">Aprobada</span>
        }

        if (rowData.status === 3) {
            return <span className="rounded-md bg-red-500 text-jewel-text py-1 px-2">Rechazada</span>
        }
    }

    const getDate = (rowData) => {
        const date = new Date(rowData.created_at)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options)
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

                    <Column field='id' header='ID' sortable className='py-2 ' />

                    <Column  header='Nombre' sortable className='py-2' body={RenderName} />

                    <Column field='email' header='Nivel' sortable className='py-2' />

                    <Column header='Fecha de solicitud' sortable className='py-2' body={getDate}/>

                    <Column field='responseDate' header='Fecha de respuesta' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable className='py-2' body={requestStatus} />

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
                value={selectedItem.group}
                message={"el grupo"}
                endpoint=''
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />

        </AuthenticatedLayout>
    );
}
