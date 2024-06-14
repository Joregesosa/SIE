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
 
export default function Matriculas({ auth, data, msj }) {
    const {
        dt,
        alert,
        setAlert,
        RenderRightToolbar,
        RenderLeftToolbar,
        RenderActionButtons,
        setDataList,
        selectedItem,
        editItemDialog,
        deleteItemDialog,
        hideDeleteDialog,
        tableConfig,
        showNewDialog,
        setShowNewDialog,
        onHideEditDialog,
        RenderActionLinks
    } = useTable(data)

    useEffect(() => {
        setDataList(data)
        setAlert(msj)
    }, [data, msj])



    const requestStatus = (rowData) => {
        return <span className={`rounded-md bg-${rowData.identification_data.status.color} text-jewel-text py-1 px-2`}>{rowData.identification_data.status.name}</span>   
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

                    <Column field='person.id_card' header='Cedula' sortable className='py-2' />

                    <Column field='identification_data.level.name' header='Nivel' sortable className='py-2' />

                    <Column field='academic_data.previous_institution' header='Institución de Origen' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable className='py-2' body={requestStatus} />

                    <Column header="Acciones" body={(rowData) => RenderActionLinks(rowData, 'students.show')} exportable={false} className='py-2' />
   
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
