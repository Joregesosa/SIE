import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import Grades from '@/Components/Grades';
import SubjectCards from '@/Components/SubjectCards';

export default function Groups({ auth, data ,qualifiers }) {
   
    const [view, setView] = useState('list'); // Cambiado a 'list' y 'subjects' para mayor claridad
    const [selectedSubject, setSelectedSubject] = useState(null);

    const handleViewChange = (newView) => {
        setView(newView);
    };

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
        setView('grades');
    };
    console.log(data)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={`Grupo / ${data.level?.description}`}
        >
            <Head title="Lista de Groups" />

            <Toolbar className="py-2 rounded-none bg-white bg-opacity-40">
            </Toolbar>
            <div className='flex gap-4 mx-4'>
                <Button onClick={() => handleViewChange('list')} className='bg-blue-500 block w-fit rounded-md p-2 hover:scale-105 cursor-pointer text-white'>Listado</Button>
                <Button onClick={() => handleViewChange('subjects')} className='bg-blue-500 block w-fit rounded-md p-2 hover:scale-105 cursor-pointer text-white'>Calificaciones</Button>

            </div>

            {view === 'list' && (
                <DataTable value={data.students_list} paginator rows={10} rowClassName="cursor-pointer hover:bg-gray-200">
                    <Column field='id' header='ID' sortable className='py-0 ' />
                    <Column field='matricula' header='Matricula' sortable className='py-0' />
                    <Column field='person.full_Name' header='Nombre' sortable className='py-0 truncate max-w-64' />
                    <Column field='email' header='Email' sortable className='py-0 truncate max-w-64' />
                    <Column field='phone' header='Teléfono' sortable className='py-0' />
                </DataTable>
            )}

            {view === 'subjects' && (
                <SubjectCards 
                    subjects={data.subjects_scores}
                    levelDescription={data.level.description}
                    groupName={data.name}
                    onSubjectClick={handleSubjectClick}
                    onBack={() => handleViewChange('list')}
                />
            )}

            {view === 'grades' && selectedSubject && (
                <Grades 
                    subject={selectedSubject}
                    data={data}
                    qualifiers={qualifiers}
                    onBack={() => handleViewChange('subjects')}
                />
            )}
        </AuthenticatedLayout>
    );
}
