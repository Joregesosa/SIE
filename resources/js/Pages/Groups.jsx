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
    } = useTable(data)
   
    useEffect(() => {

        data.forEach(element => {
            element.teacher.name = element.teacher.person.first_name + ' ' + element.teacher.person.second_name + ' ' + element.teacher.person.fLast_name + ' ' + element.teacher.person.sLast_name;
        });

        setDataList(data)
        setAlert(msj)
    }, [data, msj])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Cursos / Grupos"}
        >
   
            <Head title="Lista de Groups" />


                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className="py-2 rounded-none bg-white bg-opacity-40" />

                <DataTable  {...tableConfig}>

                    <Column field='id' header='ID' sortable className='py-2 ' />

                    <Column field='name' header='Grupo' sortable className='py-2' />

                    <Column field='level.name' header='Nivel' sortable className='py-2 truncate max-w-64' />

                    <Column field='max_students' header='Cupo máximo' sortable className='py-2' />

                    <Column field='capacity_available' header='Cupos Disponibles' sortable className='py-2' />

                    <Column field='teacher.name' header='Profesor Titular' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2 min-w-36' />

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
