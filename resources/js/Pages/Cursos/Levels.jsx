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

    const distribucion  = (rowData) => {
        if (rowData.teacher_multiplied) {
           return <span className="bg-orange-400 p-1 rounded-md text-white font-semibold text-sm">Multiple</span>
        }

        return <span className="bg-blue-400 p-1 rounded-md text-white font-semibold text-sm" >Unico</span>
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Cursos / Niveles"}
        >
            <Head title="Lista de Niveles" />

                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className="py-2 rounded-none bg-white bg-opacity-40" />

                <DataTable  {...tableConfig}>

                    <Column field='id' header='ID' sortable className='py-0 ' />

                    <Column field='name' header='Nivel' sortable className='py-0' />
                   
                    <Column field='description' header='Descripción' sortable className='py-0' />

                    <Column  header='Profesor' body={distribucion} sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-0' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-0' />

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
                value={selectedItem.level}
                message={"el nivel"}
                endpoint=''
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />

        </AuthenticatedLayout>
    );
}
