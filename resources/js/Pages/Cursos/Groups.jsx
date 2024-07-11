import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { useTable } from '@/hooks/useTable';
import { New } from '@/Components/Groups/New';
import { Edit } from '@/Components/Groups/Edit';
import Alert from '@/Components/Alerts/Alert';

export default function Groups({ auth, data, message }) {


    const {
        dt,
        alert,
        setAlert,
        RenderStatus,
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
        onHideEditDialog
    } = useTable(data)

    const { get } = useForm();

    const handleRowClick = (e) => {
        get(route('groups.show', e.data.id))
    }
    useEffect(() => {
        setDataList(data)
    }, [data])

    useEffect(() => {
        setAlert(message)
    }, [message])

    const cupo = (rowData) => {
        
        if (rowData.students.length == rowData.max_students) {
           return <span className="text-red-500">{rowData.students.length}  /  {rowData.max_students}</span>
        }

        return rowData.students.length + '  /  ' + rowData.max_students
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Cursos / Grupos"}
            alert={alert}
            setAlert={setAlert}
        >
            <Head title="Lista de Groups" />


            <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className="py-2 rounded-none bg-white bg-opacity-40" />

            <DataTable  {...tableConfig} rowClassName="cursor-pointer hover:bg-gray-200" onRowClick={handleRowClick}>

                <Column field='id' header='ID' sortable className='py-2 ' />

                <Column field='name' header='Grupo' sortable className='py-2' />

                <Column field='level.name' header='Nivel' sortable className='py-2 truncate max-w-64' />

                <Column field='max_students' header='Cupo máximo' sortable  body={cupo} className='py-2 text-center' />

                {/* <Column field='capacity_available' header='Cupos Disponibles' sortable className='py-2' /> */}

                <Column field='teacher.person.full_Name' header='Profesor Titular' sortable className='py-2' />

                <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

               {/*  <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2 min-w-36' /> */}

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
