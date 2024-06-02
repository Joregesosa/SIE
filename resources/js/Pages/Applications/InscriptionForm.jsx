import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { IdentificationData } from '@/Components/InscriptionFormPartials/IdentificationData';
import { MotherData } from '@/Components/InscriptionFormPartials/MotherData';
import { FatherData } from '@/Components/InscriptionFormPartials/FatherData';
import { TutorData } from '@/Components/InscriptionFormPartials/TutorData';
import { SocioeconomicData } from '@/Components/InscriptionFormPartials/SocioeconomicData';
import { FinancialReferences } from '@/Components/InscriptionFormPartials/FinancialReferences';
import { AcademicData } from '@/Components/InscriptionFormPartials/AcademicData';
import { MedicalData } from '@/Components/InscriptionFormPartials/MedicalData';
import { MedicalHistory } from '@/Components/InscriptionFormPartials/MedicalHistory';
import { Steps } from 'primereact/steps';
import { Alert } from '@/Components/Alerts/Alert';

const items = [
    {
        label: 'Personal Info'
    },
    {
        label: 'Reservation'
    },
    {
        label: 'Review'
    }
];

const InscriptionForm = ({msj, contact }) => {

    const cleanData = {
        identification_data: {
            sector: '',
            address_street: contact?.address,
            birth_date: '',
            birth_day_place: '',
            fLast_name: contact?.fLast_name,
            first_name: contact?.first_name,
            id_card: contact?.id_card,
            level: contact?.level,
            number: contact?.number,
            reference: '',
            sLast_name: contact?.sLast_name,
            second_name: contact?.second_name
        },
        mother_data: {
            birth_date: "",
            email: "",
            fLast_name: contact?.sLast_name,
            first_name: contact?.mother_names.split(" ")[0],
            instruction_level: "",
            marital_status: "",
            number: contact?.mother_phone,
            profession: contact?.mother_occupation,
            sLast_name: "",
            second_name: "",
            work_place: "",
            incomes: 0
        },
        father_data: {
            birth_date: "",
            email: "",
            fLast_name: contact?.fLast_name,
            first_name: contact?.father_names.split(" ")[0],
            instruction_level: "",
            marital_status: "",
            number: contact?.father_phone,
            profession: contact?.father_occupation,
            sLast_name: "",
            second_name: "",
            work_place: "",
            incomes: 0
        },
        tutor_data: {
            birth_date: "",
            email: "",
            fLast_name: "",
            first_name: "",
            instruction_level: "",
            marital_status: "",
            number: "",
            profession: "",
            sLast_name: "",
            second_name: "",
            work_place: "",
            incomes: 0
        },
        socioeconomic_data: {
            student_partners: [],
            siblings: [{ age: '', name: '', studying: false }]
        },
        financial_references: {
            father_incomes: "",
            living_description: "",
            mother_incomes: "",
            other_incomes: "",
            structural_integrity: "",
            total_outcomes: ""
        },
        academic_data: {
            achievements: "",
            difficult_subjects: "",
            entry_date: "",
            extracurriculars: "",
            participation: "",
            preferred_subjects: "",
            previous_institution: contact?.last_institution,
            repeated_years: "",
        },
        medical_data: {
            allergies: "",
            allergies_details: "",
            attending_physician: "",
            disability_details: "",
            medical_condition_details: "",
            medical_facility: "",
            medical_facility_details: "",
            medications: "",
            specific_medical_condition: "",
            student_disability: "",
        },
        medical_history: {
            accidents_during_pregnancy: "",
            birth_height: "",
            birth_type: "",
            birth_weight: "",
            bottle_usage_age: "",
            breastfeeding_period: "",
            family_medical_history: "",
            first_wordsAge: "",
            habits_and_activities: "",
            medications_during_pregnancy: "",
            mother_age: "",
            observations: "",
            other_difficulties_during_pregnancy: "",
            student_father_relationship: "",
            student_mother_relationship: "",
            student_others_relationship: "",
            student_siblings_relationship: "",
            toilet_training_age: "",
            walking_age: "",
        }
    }

  
    const scroll = document.getElementById('scroll');
    const { data, setData, post, processing, errors, reset } = useForm(cleanData);
    const [step, setStep] = useState(0);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        setAlert(msj);
    }, [msj]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('inscription.create')); 

    }

    
    const handleMotherData = (e) => {
        setData({ ...data, mother_data: { ...data.mother_data, [e.target.name]: e.target.value } })
    }
    const handleFatherData = (e) => {
        setData({ ...data, father_data: { ...data.father_data, [e.target.name]: e.target.value } })
    }
    const handleTutorData = (e) => {
        setData({ ...data, tutor_data: { ...data.tutor_data, [e.target.name]: e.target.value } })
    }
    const forms = [
        <IdentificationData data={data} setData={setData} />,
        <MotherData data={data} handleMotherData={handleMotherData} />,
        <FatherData data={data} handleFatherData={handleFatherData} />,
        <TutorData data={data} handleTutorData={handleTutorData} />,
        <SocioeconomicData data={data} setData={setData} />,
        <FinancialReferences data={data} setData={setData} />,
        <AcademicData data={data} setData={setData} />,
        <MedicalData data={data} setData={setData} />,
        <MedicalHistory data={data} setData={setData} />,
    ];
    useEffect(() => {
        if (scroll) {
            scroll.scrollIntoView({ behavior: 'smooth' });
        }


    }, [step])
    return (
        <div className='form_bg relative bg-inscription-form bg-cover py-4'>
            <header id='scroll' className='bg-[#9e1525] text-gray-100 max-w-screen-lg px-4 mx-auto rounded-t-md bg-opacity-80'>

                <div className='md:flex md:items-center  max-w-screen-lg mx-auto py-5 md:gap-6'>
                    <figure className='w-44 h-44 mx-auto md:mx-0 flex-shrink-0'>
                        <img loading='lazy' src="https://lists.office.com/Images/9074fa55-8f43-42bd-9a40-0d7a38b9c66e/0fd61129-93f5-4eca-8c45-3e318953accd/T8REH8MB6WNIDPEDE9XWC501E7/d7cfebf9-81be-4890-823d-22781aa93638" alt="company logo" className='w-full' />
                    </figure>
                    <h1 className='text-center md:text-left md:text-4xl py-2 text-2xl font-semibold'>
                        FORMULARIO DE INSCRIPCIÓN DE DATOS ALUMNOS THOMAS RUSELL CRAMPTON
                    </h1>
                </div>

            </header>

            <Alert alerta={alert} setAlert={setAlert} />
      
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 mx-auto bg-white bg-opacity-75 rounded-b-md max-w-screen-lg w-full'>
                <h6 className='text-gray-500 pt-6 pr-8 text-right text-lg'>
                    {step + 1} / {forms.length}
                </h6>

                {forms[step]}

                <div className='w-full flex justify-between md:col-span-2 max-w-screen-lg px-5 mx-auto my-8'>
                    <button type='button' onClick={() => setStep(step - 1)}
                        className={`px-5 rounded-md bg-teal-400 py-2 active:bg-sky-500 ${step === 0 && 'invisible'}`}>
                        Anterior
                    </button>
                    <button
                        type='button'
                        onClick={() => setStep(step + 1)}
                        className={`px-5 rounded-md bg-sky-400 py-2 active:bg-sky-500 ${step === forms.length - 1 && 'hidden'}`}>
                        Siguiente
                    </button>
                    <button
                        type='submit'
                        className={`px-5 rounded-md bg-green-400 py-2 active:bg-sky-500 ${step !== forms.length - 1 && 'hidden'}`}>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InscriptionForm;
