import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useForm } from '@inertiajs/react';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import Checkbox from '@/Components/Checkbox';
const courseLevels = [
    { id: 1, level: "Nivel Inicial 1" },
    { id: 2, level: "Nivel Inicial 2" },
    { id: 3, level: "Primer Año de Educación Básica (1° EGB)" },
    { id: 4, level: "Segundo Año de Educación Básica (2° EGB)" },
    { id: 5, level: "Tercer Año de Educación Básica (3° EGB)" },
    { id: 6, level: "Cuarto Año de Educación Básica (4° EGB)" },
    { id: 7, level: "Quinto Año de Educación Básica (5° EGB)" },
    { id: 8, level: "Sexto Año de Educación Básica (6° EGB)" },
    { id: 9, level: "Séptimo Año de Educación Básica (7° EGB)" },
    { id: 10, level: "Octavo Año de Educación Básica (8° EGB)" },
    { id: 11, level: "Noveno Año de Educación Básica (9° EGB)" },
    { id: 12, level: "Décimo Año de Educación Básica (10° EGB)" },
    { id: 13, level: "Primer Año de Bachillerato (1° BGU)" },
    { id: 14, level: "Segundo Año de Bachillerato (2° BGU)" },
    { id: 15, level: "Tercer Año de Bachillerato (3° BGU)" },
];

const maritalStatusOptions = [
    { label: 'Soltero/a', value: 'soltero' },
    { label: 'Casado/a', value: 'casado' },
    { label: 'Separado/a', value: 'separado' },
    { label: 'Divorciado/a', value: 'divorciado' },
    { label: 'Viudo/a', value: 'viudo' },
    { label: 'Conviviente', value: 'conviviente' },
    { label: 'Uniones civiles', value: 'union_civil' }
];

const instructionLevelOptions = [
    { label: 'Educación Primaria', value: 'educacion_primaria' },
    { label: 'Educación Secundaria', value: 'educacion_secundaria' },
    { label: 'Educación Técnica o Vocacional', value: 'educacion_tecnica_vocacional' },
    { label: 'Educación Superior', value: 'educacion_superior' },
    { label: 'Educación Profesional', value: 'educacion_profesional' }
];

const questions = [
    { key: 'padres', label: 'Padres', description: 'Los progenitores biológicos o adoptivos del niño, quienes tienen la responsabilidad primaria de cuidarlo, educarlo y proporcionarle apoyo emocional y material.' },
    { key: 'hijos', label: 'Hijos', description: 'Los niños que forman parte de la familia, ya sean biológicos o adoptivos.' },
    { key: 'abuelos', label: 'Abuelos', description: 'Los padres de los padres del niño, quienes pueden tener un papel importante en la crianza y el apoyo familiar.' },
    { key: 'hermanos', label: 'Hermanos', description: 'Los hermanos del niño, ya sean biológicos (hermanos de sangre) o no (hermanastros, hermanastros adoptivos), que comparten al menos un padre en común.' },
    { key: 'tios_tias', label: 'Tíos y tías', description: 'Los hermanos de los padres del niño, quienes pueden ser figuras significativas en su vida y proporcionar apoyo adicional.' },
    { key: 'primos', label: 'Primos', description: 'Los hijos de los tíos y tías del niño, que comparten al menos un abuelo en común.' },
    { key: 'padres_adoptivos', label: 'Padres adoptivos', description: 'Las personas que han adoptado legalmente al niño y asumen la responsabilidad de su crianza y cuidado.' },
    { key: 'hermanos_adoptivos', label: 'Hermanos adoptivos', description: 'Los niños que han sido adoptados por la misma familia y se consideran hermanos aunque no tengan parentesco biológico.' },
    { key: 'padres_crianza', label: 'Padres de crianza', description: 'Las personas que proporcionan cuidado temporal a un niño cuando no pueden vivir con sus padres biológicos por diversas razones, como problemas de salud o seguridad.' },
    { key: 'cuidadores', label: 'Cuidadores', description: 'Personas que pueden no tener un parentesco directo pero que desempeñan un papel importante en el cuidado y la crianza del niño, como niñeras, educadores o trabajadores sociales.' }
];

import { Button } from 'primereact/button';

const SiblingList = ({ data, setData }) => {
    const baseSibling = { age: '', name: '', studying: false }

    const handleAddSibling = () => {
        const newSiblingData = { ...data }
        newSiblingData.economy.siblings.push(baseSibling);
        setData(newSiblingData);
    };

    const setSibling = (item, index, value) => {
        const newSiblingData = { ...data }
        newSiblingData.economy.siblings[index][item] = value;

        setData(newSiblingData)
    }

    return (
        <>
            {data.economy?.siblings.map((sibling, index) => (
                <div key={index} className="w-full flex flex-wrap gap-2 items-center col-span-2 justify-between mt-2">

                    <label htmlFor={`name_${index}`} className="font-bold text-xs">
                        Nombre completo <span>*</span>
                        <InputText
                            id={`name_${index}`}
                            required
                            className='rounded-md w-full'
                            value={data.economy.siblings[index]?.name}
                            onChange={(e) => setSibling('name', index, e.target.value)}
                            placeholder="Ingrese el nombre completo"
                        />
                    </label>

                    <label htmlFor={`age_${index}`} className="font-bold text-xs">
                        Edad <span>*</span>
                        <InputText
                            id={`age_${index}`}
                            required
                            className='rounded-md w-full'
                            value={data.economy.siblings[index]?.age}
                            onChange={(e) => setSibling('age', index, e.target.value)}
                            placeholder="Ingrese la edad"
                        />
                    </label>

                    <label htmlFor={`studying_${index}`} className='w-full'>
                        <Checkbox
                            id={`studying_${index}`}
                            className='mr-2 '
                            checked={data.economy?.siblings[index]?.studying}
                            onChange={(e) => setSibling('studying', index, e.target.checked)}
                        />
                        Actualmente estudiando en esta institución
                    </label>
                </div>
            ))}

            <div className='w-full flex justify-end col-span-2'>
                <button onClick={handleAddSibling} type='button' className='px-5 rounded-md bg-sky-400 py-2'>Agregar hermano</button>
            </div>
        </>
    );
};

const InscriptionForm = () => {
    const cleanData = {
        economy: {
            questions: [],
            siblings: [
                { age: '', name: '', studying: false }
            ]
        },
        father: {},
        mother: {},
        student: {},
    }
    const { data, setData, post, processing, errors, reset } = useForm(cleanData);


    const handleSubmit = (e) => {
        e.preventDefault();

        /*  console.log(data); */

        /* post(route('new.formcontact')); */
    };
    const setQuestion = (e) => {
        const newQuestionCheck = { ...data }
        newQuestionCheck.economy.questions.push(e.target.value)

        setData(newQuestionCheck)
    }
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div className='form_bg relative'>
            <header className='bg-[#9e1525] text-gray-100'>
                <div className='md:flex md:items-center  max-w-screen-lg mx-auto pt-5 md:gap-6'>
                    <figure className='w-44 h-44 mx-auto md:mx-0 flex-shrink-0'>
                        <img loading='lazy' src="https://lists.office.com/Images/9074fa55-8f43-42bd-9a40-0d7a38b9c66e/0fd61129-93f5-4eca-8c45-3e318953accd/T8REH8MB6WNIDPEDE9XWC501E7/d7cfebf9-81be-4890-823d-22781aa93638" alt="company logo" className='w-full' />
                    </figure>
                    <h1 className='text-center md:text-left md:text-4xl py-2 text-2xl font-semibold'>DATOS DE IDENTIFICACIÓN/INFORMACIÓN ESTUDIANTE
                    </h1>
                </div>

            </header>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 mx-auto  '>
                <fieldset className='max-w-screen-lg w-full mx-auto p-6 mt-6'>
                    <legend className='text-2xl font-semibold'>Quien vive con el alumno</legend>
                    {

                        questions?.map(question =>
                            <div key={question.label} className="flex align-items-center mx-auto my-4 py-2">
                                <Checkbox name="question.key" value={question.key}
                                    id={question.key}
                                    onChange={setQuestion}
                                    checked={data.economy.questions.includes(question.key)} />
                                <label htmlFor={question.key} className="ml-2">
                                    <b> {question.label}</b>: {question.description}
                                </label>
                            </div>
                        )
                    }
                </fieldset>

                <fieldset className='max-w-screen-lg w-full mx-auto p-6 grid grid-cols-2 gap-4'>
                    <legend className='text-2xl font-semibold'>Nombres de hermanos/as y edades</legend>
                    <SiblingList data={data} setData={setData} />
                    <label htmlFor="birth_order" className="font-bold text-xs col-span-2 md:col-span-1">
                        Lugar que ocupa en la familia (Posición de nacimiento en relación a los hermanos )
                        <span>*</span>

                        <InputText
                            id="birth_order"
                            value={data?.economy?.birth_order}
                            type='number'
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData({...data, economy: {...data.economy, birth_order: e.target.value}})}
                            placeholder="Ingrese la fecha de nacimiento"
                        />
                    </label>

                </fieldset>


            </form>
        </div>
    );
};

export default InscriptionForm;