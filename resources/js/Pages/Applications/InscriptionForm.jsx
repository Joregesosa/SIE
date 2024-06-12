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
import { Alert } from '@/Components/Alerts/Alert';
import { FormHeader } from '@/Components/FormHeader';
import { fieldVerifier } from '@/Helpers/Form.Verifier';
import { Loading } from '@/Components/Loading';
import { FormSubmitted } from '@/Components/FormSubmitted';

const InscriptionForm = ({ msj, contact }) => {

    const cleanData = {
        identification_data: {
            sector: '',
            address_street: contact?.address || '',
            birth_date: '',
            birth_day_place: '',
            fLast_name: contact?.fLast_name || '',
            first_name: contact?.first_name || '',
            id_card: contact?.id_card || '',
            level: contact?.level || '',
            number: contact?.number || '',
            reference: '',
            age: '',
            sLast_name: contact?.sLast_name || '',
            second_name: contact?.second_name || ''
        },
        mother_data: {
            birth_date: "",
            email: "",
            fLast_name: contact?.sLast_name || '',
            first_name: contact?.mother_names.split(" ")[0] || '',
            instruction_level: "",
            marital_status: "",
            number: contact?.mother_phone || '',
            profession: contact?.mother_occupation || '',
            sLast_name: "",
            second_name: "",
            work_place: "",
        },
        father_data: {
            birth_date: "",
            email: "",
            fLast_name: contact?.fLast_name || '',
            first_name: contact?.father_names.split(" ")[0] || '',
            instruction_level: "",
            marital_status: "",
            number: contact?.father_phone || '',
            profession: contact?.father_occupation || '',
            sLast_name: "",
            second_name: "",
            work_place: "",

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
            previous_institution: contact?.last_institution || "",
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
    const [errorHandling, setErrorHandling] = useState({});
    const [step, setStep] = useState(0);
    const [sended, setSended] = useState(false);
    /*     const [alert, setAlert] = useState(null); */

    /*   useEffect(() => {
          setAlert(msj);
      }, [msj]); */

    const handleSubmit = (e) => {
        e.preventDefault();
        const emptyFields = fieldVerifier(data[form_keys[8]], requiredFields[form_keys[8]], setErrorHandling);
        if (Object.keys(emptyFields).length === 0) {
            post(route('inscription.create'), {
                onSuccess: () => {
                    setSended(true);
                    reset();
                }, onError: () => {
                    console.log(errors)
                }
            });
        }
    }

    const forms = {
        identification_data: <IdentificationData data={data} setData={setData} errorHandling={errorHandling} />,
        mother_data: <MotherData data={data} setData={setData} errorHandling={errorHandling} />,
        father_data: <FatherData data={data} setData={setData} errorHandling={errorHandling} />,
        tutor_data: <TutorData data={data} setData={setData} errorHandling={errorHandling} />,
        socioeconomic_data: <SocioeconomicData data={data} setData={setData} errorHandling={errorHandling} />,
        financial_references: <FinancialReferences data={data} setData={setData} errorHandling={errorHandling} />,
        academic_data: <AcademicData data={data} setData={setData} errorHandling={errorHandling} />,
        medical_data: <MedicalData data={data} setData={setData} errorHandling={errorHandling} />,
        medical_history: <MedicalHistory data={data} setData={setData} errorHandling={errorHandling} />,
    };

    const form_keys = Object.keys(forms);

    useEffect(() => {
        if (scroll) {
            scroll.scrollIntoView({ behavior: 'smooth' });
        }
    }, [step])

    function next() {
        const emptyFields = fieldVerifier(data[form_keys[step]], requiredFields[form_keys[step]], setErrorHandling);

        if (Object.keys(emptyFields).length === 0) {
            setStep(step + 1);
        }
    }

    return (
        <div className='form_bg relative bg-inscription-form bg-cover py-4 min-h-screen'>

            <FormHeader title='Formulario de Inscripción' variant='inscription' />

            {!sended ?
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 mx-auto bg-white bg-opacity-75 rounded-b-md max-w-screen-lg w-full'>
                    <h6 className='text-gray-500 pt-6 pr-8 text-right text-lg'>
                        {step + 1} / {form_keys.length}
                    </h6>

                    {forms[form_keys[step]]}

                    <div className='w-full flex justify-between md:col-span-2 max-w-screen-lg px-5 mx-auto my-8'>
                        <button type='button' onClick={() => setStep(step - 1)}
                            className={`px-5 rounded-md bg-teal-400 py-2 active:bg-sky-500 ${step === 0 && 'invisible'}`}>
                            Anterior
                        </button>
                        <button
                            type='button'
                            onClick={next}
                            className={`px-5 rounded-md bg-sky-400 py-2 active:bg-sky-500 ${step === form_keys.length - 1 && 'hidden'}`}>
                            Siguiente
                        </button>
                        <button
                            type='submit'
                            className={`px-5 rounded-md bg-green-400 py-2 active:bg-sky-500 ${step !== form_keys.length - 1 && 'hidden'}`}>
                            Enviar
                        </button>
                    </div>
                </form> :
                <FormSubmitted title={title} message={message}/>}
            <Loading message="Enviando" status={processing} />
        </div>
    );
};

export default InscriptionForm;

const requiredFields = {
    identification_data: [
        'sector',
        'address_street',
        'birth_date',
        'birth_day_place',
        'fLast_name',
        'first_name',
        'id_card',
        'level',
        'number',
        'reference',
        'age',
    ],
    mother_data: [
        'birth_date',
        'email',
        'fLast_name',
        'first_name',
        'instruction_level',
        'marital_status',
        'number',
        'profession',
        'work_place',
    ],
    father_data: [
        'birth_date',
        'email',
        'fLast_name',
        'first_name',
        'instruction_level',
        'marital_status',
        'number',
        'profession',
        'work_place',
    ],
    tutor_data: [
        'birth_date',
        'email',
        'fLast_name',
        'first_name',
        'instruction_level',
        'marital_status',
        'number',
        'profession',
        'work_place',
    ],
    socioeconomic_data: [
    ],
    financial_references: [
        'father_incomes',
        'living_description',
        'mother_incomes',
        'other_incomes',
        'structural_integrity',
        'total_outcomes'
    ],
    academic_data: [
        'achievements',
        'difficult_subjects',
        'entry_date',
        'extracurriculars',
        'participation',
        'preferred_subjects',
        'previous_institution',
        'repeated_years',
    ],
    medical_data: [
        'allergies',
        'allergies_details',
        'attending_physician',
        'disability_details',
        'medical_condition_details',
        'medical_facility',
        'medical_facility_details',
        'medications',
        'specific_medical_condition',
        'student_disability',
    ],
    medical_history: [
        'accidents_during_pregnancy',
        'birth_height',
        'birth_type',
        'birth_weight',
        'bottle_usage_age',
        'breastfeeding_period',
        'family_medical_history',
        'first_wordsAge',
        'habits_and_activities',
        'medications_during_pregnancy',
        'mother_age',
        'observations',
        'other_difficulties_during_pregnancy',
        'student_father_relationship',
        'student_mother_relationship',
        'student_others_relationship',
        'student_siblings_relationship',
        'toilet_training_age',
        'walking_age',
    ]





}

 
const title = '¡Gracias por tu inscripción!';
const message = 'Pronto recibirás un correo de confirmación';