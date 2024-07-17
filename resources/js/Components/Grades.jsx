import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";

const gradeTypes = [
    { label: "Cuantitativa", value: "quantitative" },
    { label: "Calificativa", value: "qualitative" },
];

const letterToGrade = (letter) => {
    switch (letter) {
        case "A":
            return 90;
        case "B":
            return 80;
        case "C":
            return 70;
        case "D":
            return 60;
        case "F":
            return 0;
        default:
            return 0;
    }
};

const Grades = ({ data, subject, qualifiers }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState(null);
    const [selectedLetterGrade, setSelectedLetterGrade] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newGrade, setNewGrade] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [selectedGradeType, setSelectedGradeType] = useState(gradeTypes[0]);
    const [warning, setWarning] = useState(false);

    useEffect(() => {
        if (subject) {
            const subjectScores = data.subjects_scores.find(
                (item) => item.subject.id === subject.id
            );
            const scores = subjectScores
                ? subjectScores.scores.map((score) => ({
                      ...score,
                      student: score.student ?? {
                          person: {
                              first_name: "Anónimo",
                              last_name: "Anónimo",
                          },
                          id: "No encontrado",
                      },
                  }))
                : [];
            setFilteredData(scores);
        }
    }, [subject, data]);

    const openNewGradeDialog = () => {
        setEditMode(false);
        setSelectedGrade(null);
        setNewGrade(null);
        setIsEditing(true);
    };

    const gradeToLetter = (grade) => {
        console.log(grade);
        for (let i = 0; i < qualifiers.length; i++) {
            if (grade >= qualifiers[i].min && grade <= qualifiers[i].max) {
                return qualifiers[i].qualifier;
            }
        }
        return "0";
    };

    const openEditGradeDialog = (rowData) => {
        setEditMode(true);
        setSelectedGrade(rowData);
        setNewGrade(rowData.grade);
        setSelectedLetterGrade(gradeToLetter(rowData.grade));
        setIsEditing(true);
    };

    const hideDialog = () => {
        setIsEditing(false);
        setSelectedGrade(null);
        setNewGrade(null);
        setSelectedLetterGrade(null);
    };

    const deleteGrade = () => {
        const updatedData = filteredData.filter(
            (student) => student.id !== selectedGrade.id
        );
        setFilteredData(updatedData);
        hideDialog();
    };

    const gradeTypeTemplate = (rowData) => {
        const score = rowData.score ?? 0; // Si rowData.score es null, muestra 0
        return selectedGradeType == "quantitative"
            ? score
            : gradeToLetter(score);
    };

    const fullNameTemplate = (rowData) => {
        return `${rowData.student.person.first_name} ${rowData.student.person.last_name}`;
    };

    const showDeleteConfirmation = (rowData) => {
        setSelectedGrade(rowData);
        setWarning(true);
    };

    return (
        <div>
            <div className="flex justify-between items-center mx-5">
                <h2 className="text-lg font-bold">
                    Calificaciones para {subject.name}
                </h2>
                <Dropdown
                    value={selectedGradeType}
                    options={gradeTypes}
                    onChange={(e) => setSelectedGradeType(e.value)}
                    placeholder="Seleccione tipo de nota"
                    className="p-ml-2"
                />
            </div>
            <Toolbar>
                <div className="p-toolbar-group-left">
                    <Button
                        label="Agregar Calificación"
                        icon="pi pi-plus"
                        className="p-button-success"
                        onClick={openNewGradeDialog}
                    />
                </div>
            </Toolbar>
            <DataTable value={filteredData} paginator rows={10}>
                <Column field="student.id" header="ID" sortable />
                <Column field="student" header="Nombre" body={fullNameTemplate} sortable/>
                <Column field="grade" header={ selectedGradeType.value === "quantitative" ? "Calificación" : "Calificación en Letras" }body={gradeTypeTemplate} sortable/>
                <Column header="Acciones" body={(rowData) => ( <> <Button icon="pi pi-pencil"
                                className="p-button-rounded p-button-info"
                                onClick={() => openEditGradeDialog(rowData)}
                            />
                            <Button
                                icon="pi pi-trash"
                                className="p-button-rounded p-button-danger p-ml-1"
                                onClick={() => showDeleteConfirmation(rowData)}
                            />
                        </>
                    )}
                />
            </DataTable>

            <Dialog
                visible={isEditing}
                onHide={hideDialog}
                header={
                    editMode
                        ? `Editar la calificación de ${subject.name} del alumno ${selectedGrade?.student.person.first_name}`
                        : "Agregar Calificación"
                }
            >
                <div className="p-field">
                    <label htmlFor="grade">Calificación</label>
                    <InputNumber
                        id="grade"
                        value={newGrade}
                        onValueChange={(e) => setNewGrade(e.value)}
                        min={0}
                        max={100}
                    />
                </div>
                {selectedGradeType.value === "qualitative" && (
                    <div className="p-field">
                        <label htmlFor="letterGrade">
                            Calificación en Letras
                        </label>
                        <Dropdown
                            id="letterGrade"
                            value={selectedLetterGrade}
                            options={["A", "B", "C", "D", "F"]}
                            onChange={(e) => {
                                setSelectedLetterGrade(e.value);
                                setNewGrade(letterToGrade(e.value)); // Convierte la letra a número
                            }}
                            placeholder="Seleccionar una calificación"
                        />
                    </div>
                )}
                <div className="p-dialog-footer flex justify-around mt-6">
                    <Button
                        type="button"
                        label="Cancelar"
                        className="bg-red-600 hover:bg-red-500 text-center px-6 py-2 text-white p-button p-component p-button-outlined"
                        icon="pi pi-times"
                        onClick={hideDialog}
                    />
                    <Button
                        type="button"
                        label={editMode ? "Editar" : "Agregar"}
                        className="bg-blue-600 hover:bg-blue-500 text-center px-6 py-2 text-white p-button p-component"
                        icon="pi pi-check"
                    />
                </div>
            </Dialog>

            <Dialog
                visible={warning}
                style={{ width: "450px" }}
                header="Confirmar Eliminación"
                modal
                className="p-fluid"
                onHide={() => setWarning(false)}
            >
                <form onSubmit={deleteGrade}>
                    <div className="p-field flex mb-5 items-center">
                        <div className="w-8 h-8">
                            <i className="pi pi-exclamation-triangle mr-5 text-red-500 text-3xl"></i>
                        </div>
                        <p className="m-0 ml-3">
                            Seguro que desea eliminar la calificación de{" "}
                            {subject.name} del estudiante{" "}
                            {selectedGrade?.student.person.first_name}?
                        </p>
                    </div>

                    <div className="p-dialog-footer flex justify-around">
                        <Button
                            type="button"
                            label="Cancelar"
                            className="bg-red-600 hover:bg-red-500 text-center px-6 py-2 text-white p-button p-component p-button-outlined"
                            icon="pi pi-times"
                            onClick={() => setWarning(false)}
                        />
                        <Button
                            type="submit"
                            label="Aceptar"
                            className="bg-blue-600 hover:bg-blue-500 text-center px-6 py-2 text-white p-button p-component"
                            icon="pi pi-check"
                        />
                    </div>
                </form>
            </Dialog>
        </div>
    );
};

export default Grades;
