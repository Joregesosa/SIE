import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';

import { useTable } from '@/hooks/useTable';

export default function Groups({ auth, data}) {

    const {
        dt,
        dataList,
        RenderStatus,
        RenderRightToolbar,
        RenderLeftToolbar,
        RenderActionButtons,
        setDataList,
        tableConfig,
    } = useTable(data)

    useEffect(() => {
        setDataList(data)
    }, [data])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={`Cursos / ${dataList[0]?.description}`}
        >

            <Head title="Lista de Groups" />


            <Toolbar  right={() => RenderRightToolbar(dt)} className="py-2 rounded-none bg-white bg-opacity-40" />

            <DataTable  {...tableConfig} rowClassName="cursor-pointer hover:bg-gray-200">

                <Column field='student_id' header='ID' sortable className='py-0 ' />

                <Column field='id_card' header='Cédula' sortable className='py-0' />
                
                <Column field='full_name' header='Nombre' sortable className='py-0 truncate max-w-64' />

                <Column field='email' header='Email' sortable className='py-0 truncate max-w-64' />

                <Column field='phone' header='Teléfono' sortable className='py-0' />


            </DataTable>


        </AuthenticatedLayout>
    );
}
