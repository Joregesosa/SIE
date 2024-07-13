import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';

import { useTable } from '@/hooks/useTable';
import Grades from '@/Components/Grades';

export default function Groups({ auth, data , data2}) {

    const [ver, setVer] = useState(1);

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

            <div className='flex  gap-2'>
                <button onClick={()=>setVer(1)} className='bg-blue-500 block w-fit rounded-md p-2 hover:scale-105 cursor-pointer text-white'>Listado</button>
                <button onClick={()=>setVer(2)} className='bg-blue-500 block w-fit rounded-md p-2 hover:scale-105 cursor-pointer text-white'>Calificaiones </button>
            </div>
          
            {ver === 1 && (<DataTable {...tableConfig} rowClassName="cursor-pointer hover:bg-gray-200">
                <Column field='student_id' header='ID' sortable className='py-0 ' />

                <Column field='id_card' header='Cédula' sortable className='py-0' />
                
                <Column field='full_name' header='Nombre' sortable className='py-0 truncate max-w-64' />

                <Column field='email' header='Email' sortable className='py-0 truncate max-w-64' />

                <Column field='phone' header='Teléfono' sortable className='py-0' />


                </DataTable>

            )}

            {ver === 2 && (
                <Grades data={data2} />
            )}

            

        </AuthenticatedLayout>
    );
}
