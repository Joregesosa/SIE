import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';

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
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <div className="flex flex-wrap gap-2 align-items-center">
                <Dropdown value={selectedGradeLevel} options={gradeLevels} onChange={(e) => setSelectedGradeLevel(e.value)} placeholder="Groups" />
                <Dropdown value={selectedStudent} options={students} onChange={(e) => setSelectedStudent(e.value)} placeholder="Students" />
                <Dropdown value={selectedSubject} options={subjects} onChange={(e) => setSelectedSubject(e.value)} placeholder="Subjects" />
                <Dropdown value={selectedGradeType} options={gradeTypes} onChange={(e) => setSelectedGradeType(e.value)} placeholder="Grade" />
                <Dropdown value={selectedTimePeriod} options={timePeriods} onChange={(e) => setSelectedTimePeriod(e.value)} placeholder="Time period" />
                <button className="p-button p-component" onClick={resetFilters}>Reset Filters</button>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout user={auth.user} header="Grades">
            <Head title="Grades" />

            <div className="card">
                <Toolbar className="mb-4" left={renderHeader()} />

                <DataTable value={filteredData} paginator rows={10} className="p-datatable-gridlines">
                    <Column field="name" header="Nombre" sortable />
                    <Column field="subject" header="Materia" sortable />
                    <Column field="grade" header="Nota" sortable />
                    <Column field="grade_level" header="Grado" sortable />
                    <Column field="time_period" header="Periodo" sortable />
                </DataTable>
            </div>
        </AuthenticatedLayout>
    );
}
