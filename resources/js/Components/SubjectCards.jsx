import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function SubjectCards({ subjects, levelDescription, groupName, onSubjectClick, onBack }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-6">
            {subjects.map((subjectScore) => (
                <div key={subjectScore.subject.id} className="flex justify-center items-center">
                    <Card title={subjectScore.subject.name} subTitle={`${groupName} - ${levelDescription}`} className="rounded-lg shadow-md text-center">
                        <div className="flex justify-center">
                            <Button onClick={() => onSubjectClick(subjectScore.subject)} className="bg-blue-500 w-[60%] rounded-md py-2   text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 justify-center">
                                Ver Calificaciones
                            </Button>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}
