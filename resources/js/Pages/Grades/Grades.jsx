import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';

const gradeLevels = [
    { label: 'Primero', value: 'Primero' },
    { label: 'Segundo', value: 'Segundo' },
    { label: 'Tercero', value: 'Tercero' },
];

const students = [
    { label: 'John Doe', value: 'John Doe' },
    { label: 'Jane Smith', value: 'Jane Smith' },
];

const subjects = [
    { label: 'Matemáticas', value: 'Matemáticas' },
    { label: 'Ciencias', value: 'Ciencias' },
    { label: 'Artes', value: 'Artes' },
    { label: 'Lengua', value: 'Lengua' },
];

const gradeTypes = [
    { label: 'Calificativa (A, B, C)', value: 'calificativa' },
    { label: 'Cuantitativa (80, 90)', value: 'cuantitativa' },
];

const timePeriods = [
    { label: 'Mensual', value: 'Mensual' },
    { label: 'Trimestral', value: 'Trimestral' },
    { label: 'Semestral', value: 'Semestral' },
];

const gradeToLetter = (grade) => {
    if (grade >= 90) return 'A';
    if (grade >= 80) return 'B';
    if (grade >= 70) return 'C';
    if (grade >= 60) return 'D';
    return 'F';
};

const letterToGrade = (letter) => {
    switch (letter) {
        case 'A': return 90;
        case 'B': return 80;
        case 'C': return 70;
        case 'D': return 60;
        default: return 50;
    }
};

export default function Grades({ auth, data }) {
    const [selectedGradeLevel, setSelectedGradeLevel] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedGradeType, setSelectedGradeType] = useState(null);
    const [selectedTimePeriod, setSelectedTimePeriod] = useState(null);
    const [filteredData, setFilteredData] = useState(data);
    const [newGradeDialog, setNewGradeDialog] = useState(false);
    const [editGradeDialog, setEditGradeDialog] = useState(false);
    const [editGradeData, setEditGradeData] = useState(null);

    useEffect(() => {
        let filtered = data;

        if (selectedGradeLevel) {
            filtered = filtered.filter(item => item.grade_level === selectedGradeLevel);
        }

        if (selectedStudent) {
            filtered = filtered.filter(item => item.name === selectedStudent);
        }

        if (selectedSubject) {
            filtered = filtered.filter(item => item.subject === selectedSubject);
        }

        if (selectedGradeType) {
            filtered = filtered.map(item => {
                const grade = item.grade;
                if (selectedGradeType === 'calificativa' && typeof grade === 'number') {
                    item.grade = gradeToLetter(grade);
                } else if (selectedGradeType === 'cuantitativa' && typeof grade === 'string') {
                    item.grade = letterToGrade(grade);
                }
                return item;
            });
        }

        if (selectedTimePeriod) {
            filtered = filtered.filter(item => item.time_period === selectedTimePeriod);
        }

        setFilteredData(filtered);
    }, [selectedGradeLevel, selectedStudent, selectedSubject, selectedGradeType, selectedTimePeriod, data]);

    const resetFilters = () => {
        setSelectedGradeLevel(null);
        setSelectedStudent(null);
        setSelectedSubject(null);
        setSelectedGradeType(null);
        setSelectedTimePeriod(null);
    };

    const renderHeader = () => (
        <div className="flex flex-wrap gap-2 align-items-center justify-between">
            <div className='flex'>
                <Button icon="pi pi-plus" label="Nuevo" onClick={() => setNewGradeDialog(true)} />
            </div>
            <div className="flex-grow-1"></div>
            <div className="flex flex-wrap gap-2 align-items-center">
                <Dropdown value={selectedGradeLevel} options={gradeLevels} onChange={(e) => setSelectedGradeLevel(e.value)} placeholder="Groups" />
                <Dropdown value={selectedStudent} options={students} onChange={(e) => setSelectedStudent(e.value)} placeholder="Students" />
                <Dropdown value={selectedSubject} options={subjects} onChange={(e) => setSelectedSubject(e.value)} placeholder="Subjects" />
                <Dropdown value={selectedGradeType} options={gradeTypes} onChange={(e) => setSelectedGradeType(e.value)} placeholder="Grade" />
                <Dropdown value={selectedTimePeriod} options={timePeriods} onChange={(e) => setSelectedTimePeriod(e.value)} placeholder="Time period" />
                <Button className="p-button p-component" label="Reset Filters" onClick={resetFilters} />
            </div>
        </div>
    );

    const editGrade = (rowData) => {
        setEditGradeData(rowData);
        setEditGradeDialog(true);
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button mr-2" onClick={() => editGrade(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" severity="danger" onClick={() => console.log("Eliminar nota", rowData)} />
            </>
        );
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Scores">
            <Head title="Scores" />

            <div className="card">
                <Toolbar className="mb-4" left={renderHeader()} />

                <DataTable value={filteredData} paginator rows={4} className="p-datatable-gridlines">
                    <Column field="name" header="Name" sortable />
                    <Column field="subject" header="Subject" sortable />
                    <Column field="grade" header="Score" sortable />
                    <Column field="time_period" header="Period" sortable />
                    <Column header="Actions" body={actionBodyTemplate} />
                </DataTable>
            </div>

            <Dialog visible={newGradeDialog} style={{ width: '450px' }} header="Nueva Nota" modal className="p-fluid" onHide={() => setNewGradeDialog(false)}>
                <form action="" method="POST">
                    <div className="p-field">
                        <label >Student</label>
                        <Dropdown id="name" options={students} placeholder="Selecciona un estudiante" />
                    </div>
                    <div className="p-field">
                        <label >Subject</label>
                        <Dropdown id="subject" options={subjects} placeholder="Selecciona una materia" />
                    </div>
                    <div className="p-field">
                        <label >Score</label>
                        <InputNumber id="grade" placeholder="Ingresa la nota" />
                    </div>
                    <div className="p-field">
                        <label >Group</label>
                        <Dropdown id="grade_level" options={gradeLevels} placeholder="Selecciona un grado" />
                    </div>
                    <div className="p-field">
                        <label >Period</label>
                        <Dropdown id="time_period" options={timePeriods} placeholder="Selecciona un periodo" />
                    </div>
                    <div className="p-dialog-footer flex justify-around">
                        <Button type="button" label="Cancelar" className="bg-red-600 hover:bg-red-500 text-center px-6 py-2 text-white pl-4 p-button p-component p-button-outlined" severity="danger" icon="pi pi-times" onClick={() => setNewGradeDialog(false)} />
                        <Button type="submit" label="Aceptar" className="bg-blue-600 hover:bg-blue-500 text-center px-6 py-2 text-white pl-4 p-button p-component" icon="pi pi-check" />
                    </div>
                </form>
            </Dialog>

            <Dialog visible={editGradeDialog} style={{ width: '450px' }} header="Editar Nota" modal className="p-fluid" onHide={() => setEditGradeDialog(false)}>
                <form action="" method="POST">
                    <div className="p-field">
                        <label >Student</label>
                        <Dropdown id="edit_name" value={editGradeData?.name} options={students} onChange={(e) => setEditGradeData({ ...editGradeData, name: e.value })} placeholder="Selecciona un estudiante" />
                    </div>
                    <div className="p-field">
                        <label >Subject</label>
                        <Dropdown id="edit_subject" value={editGradeData?.subject} options={subjects} onChange={(e) => setEditGradeData({ ...editGradeData, subject: e.value })} placeholder="Selecciona una materia" />
                    </div>
                    <div className="p-field">
                        <label >Score</label>
                        <InputNumber id="edit_grade" value={editGradeData?.grade} onValueChange={(e) => setEditGradeData({ ...editGradeData, grade: e.value })} placeholder="Ingresa la nota" />
                    </div>
                    <div className="p-field">
                        <label >Group</label>
                        <Dropdown id="edit_grade_level" value={editGradeData?.grade_level} options={gradeLevels} onChange={(e) => setEditGradeData({ ...editGradeData, grade_level: e.value })} placeholder="Selecciona un grado" />
                    </div>
                    <div className="p-field">
                        <label >Period</label>
                        <Dropdown id="edit_time_period" value={editGradeData?.time_period} options={timePeriods} onChange={(e) => setEditGradeData({ ...editGradeData, time_period: e.value })} placeholder="Selecciona un periodo" />
                    </div>
                    <div className="p-dialog-footer flex justify-around">
                        <Button type="button" label="Cancelar" className="bg-red-600 hover:bg-red-500 text-center px-6 py-2 text-white pl-4 p-button p-component p-button-outlined" icon="pi pi-times" severity="danger" onClick={() => setEditGradeDialog(false)} />
                        <Button type="submit" label="Aceptar" className="bg-blue-600 hover:bg-blue-500 text-center px-6 py-2 text-white pl-4 p-button p-component" icon="pi pi-check" />
                    </div>
                </form>
            </Dialog>
        </AuthenticatedLayout>
    );
}
