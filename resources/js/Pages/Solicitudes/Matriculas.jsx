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


const data2 = [
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
export default function Matriculas({ auth, data, msj }) {
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

    const requestStatus = (rowData) => {
            return <span className={`rounded-md bg-${rowData.status.color} text-jewel-text py-1 px-2`}>{rowData.status.name}</span>
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={ "Solicitudes / Matricula" }
        >
            <Head title="Matriculas" />

                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className='py-2  rounded-none' />

                <DataTable  {...tableConfig}>

                    <Column field='id' header='ID' sortable className='py-2 ' />

                    <Column field='person.full_Name' header='Nombre' sortable className='py-2' />

                    <Column field='level.name' header='Nivel' sortable className='py-2' />

                    <Column field='previous_institution' header='Institucion de Origen' sortable className='py-2' />

                    <Column field='responseDate' header='Fecha de respuesta' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable className='py-2' body={requestStatus} />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2' />

                </DataTable>

      

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
