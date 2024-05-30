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


const groupsData = [
    {
        id: 1,
        group: 'Group A',
        level: 'Primer Año de Educación Básica (1° EGB)',
        student_capacity: 20,
        capacity_available: 10,
        full_professor: 'John Doe',
        status: 1
    },
    {
        id: 2,
        group: 'Group B',
        level: 'Segundo Año de Educación Básica (2° EGB)',
        student_capacity: 15,
        capacity_available: 5,
        full_professor: 'Jane Smith',
        status: 1
    },
    {
        id: 3,
        group: 'Group C',
        level: 'Tercer Año de Educación Básica (3° EGB)',
        student_capacity: 25,
        capacity_available: 15,
        full_professor: 'Mike Johnson',
        status: 0
    }
]
export default function Groups({ auth, data, msj }) {

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
    } = useTable(groupsData)

    useEffect(() => {
        setDataList(groupsData)
        setAlert(msj)
    }, [groupsData, msj])
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Cursos / Grupos"}
        >
            <Head title="Lista de Groups" />


                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className="py-2 rounded-none bg-white bg-opacity-40" />

                <DataTable  {...tableConfig}>

                    <Column field='id' header='ID' sortable className='py-2 ' />

                    <Column field='group' header='Grupo' sortable className='py-2' />

                    <Column field='level' header='Nivel' sortable className='py-2 truncate max-w-64' />

                    <Column field='student_capacity' header='Cupo máximo' sortable className='py-2' />

                    <Column field='capacity_available' header='Cupos Disponibles' sortable className='py-2' />

                    <Column field='full_professor' header='Profesor Titular' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2' />

                </DataTable>
 
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
