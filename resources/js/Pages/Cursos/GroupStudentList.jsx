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
import { G } from '@react-pdf/renderer';

export default function Groups({ auth, data, msj }) {

    const {
        dt,
        RenderStatus,
        RenderRightToolbar,
        RenderLeftToolbar,
        RenderActionButtons,
        setDataList,
        tableConfig,
    } = useTable(data)

    useEffect(() => {
        console.log(data)
        setDataList(data)
    }, [data])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={`Cursos / ${data[0].description}`}
        >

            <Head title="Lista de Groups" />


            <Toolbar  right={() => RenderRightToolbar(dt)} className="py-2 rounded-none bg-white bg-opacity-40" />

            <DataTable  {...tableConfig} onRowClick={(e)=>console.log(e.data)} rowClassName="cursor-pointer hover:bg-gray-200">

                <Column field='id' header='ID' sortable className='py-0 ' />

                <Column field='id_card' header='Cédula' sortable className='py-0' />
                
                <Column field='full_name' header='Nombre' sortable className='py-0 truncate max-w-64' />

                <Column field='email' header='Email' sortable className='py-0 truncate max-w-64' />

                <Column field='number' header='Teléfono' sortable className='py-0' />



            </DataTable>


        </AuthenticatedLayout>
    );
}
