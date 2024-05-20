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


const levelsData = [
    { id: 1, level: "Nivel Inicial 1", status: 1 },
    { id: 2, level: "Nivel Inicial 2", status: 1 },
    { id: 3, level: "Primer Año de Educación Básica (1° EGB)", status: 1 },
    { id: 4, level: "Segundo Año de Educación Básica (2° EGB)", status: 1 },
    { id: 5, level: "Tercer Año de Educación Básica (3° EGB)", status: 1 },
    { id: 6, level: "Cuarto Año de Educación Básica (4° EGB)", status: 1 },
    { id: 7, level: "Quinto Año de Educación Básica (5° EGB)", status: 1 },
    { id: 8, level: "Sexto Año de Educación Básica (6° EGB)", status: 1 },
    { id: 9, level: "Séptimo Año de Educación Básica (7° EGB)", status: 1 },
    { id: 10, level: "Octavo Año de Educación Básica (8° EGB)", status: 1 },
    { id: 11, level: "Noveno Año de Educación Básica (9° EGB)", status: 1 },
    { id: 12, level: "Décimo Año de Educación Básica (10° EGB)", status: 1 },
    { id: 13, level: "Primer Año de Bachillerato (1° BGU)", status: 1 },
    { id: 14, level: "Segundo Año de Bachillerato (2° BGU)", status: 1 },
    { id: 15, level: "Tercer Año de Bachillerato (3° BGU)", status: 1 },
]
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
    } = useTable(levelsData)

    useEffect(() => {
        setDataList(levelsData)
        setAlert(msj)
    }, [levelsData, msj])
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

                    <Column field='level' header='Nivel' sortable className='py-2' />
                   
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
