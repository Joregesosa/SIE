import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import { IdentificationData } from "@/Components/InscriptionFormPartials/IdentificationData";
import { MotherData } from "@/Components/InscriptionFormPartials/MotherData";
import { FatherData } from "@/Components/InscriptionFormPartials/FatherData";
import { TutorData } from "@/Components/InscriptionFormPartials/TutorData";
import { SocioeconomicData } from "@/Components/InscriptionFormPartials/SocioeconomicData";
import { FinancialReferences } from "@/Components/InscriptionFormPartials/FinancialReferences";
import { AcademicData } from "@/Components/InscriptionFormPartials/AcademicData";
import { MedicalData } from "@/Components/InscriptionFormPartials/MedicalData";
import { MedicalHistory } from "@/Components/InscriptionFormPartials/MedicalHistory";
import { Alert } from "@/Components/Alerts/Alert";
import { FormHeader } from "@/Components/FormHeader";
import { fieldVerifier } from "@/Helpers/Form.Verifier";
import { Loading } from "@/Components/Loading";
import { FormSubmitted } from "@/Components/FormSubmitted";
import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';


const InscriptionForm = ({ msj, contact, information }) => {
    
    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        today: 'Hoy',
        clear: 'Limpiar',
    });
   
    const cleanData = {
        contact_id: contact?.id || "",  //no borrar, ya que setStep anterior tiene un orden.
        identification_data: {
            level_id: contact?.level_id || "",
            first_name: contact?.first_name || "",
            second_name: contact?.second_name || "",
            sLast_name: contact?.sLast_name || "",
            fLast_name: contact?.fLast_name || "",
            birth_date: contact?.birth_date || "",
            birth_place: "",
            id_card: contact?.id_card || "",
            sector: "",
            address_street: contact?.address || "",
            phone: contact?.phone || "",
            phone_type_id: contact?.phone_type_id || 1,
            reference: "",
        },
        mother_data: {
            id_card:  contact?.mother_id_card || "",
            birth_date: contact?.mother?.person?.birth_date || "",
            email: contact?.mother?.email || "",
            fLast_name: contact?.mother?.person?.fLast_name  ||contact?.sLast_name || "",
            first_name: contact?.mother?.person?.first_name  || contact?.mother_names.split(" ")[0] || "",
            education_level_id: contact?.mother?.education_level_id || "",
            marital_status_id: contact?.mother?.marital_status_id || "",
            phone: contact?.mother_phone || "",
            phone_type_id: contact?.mother?.phone_type_id || 1,
            profession: contact?.mother?.profession ||  contact?.mother_occupation || "",
            sLast_name: contact?.mother?.person?.sLast_name || "",
            second_name: contact?.mother?.person?.second_name || "",
            work_place: contact?.mother?.work_place || "",
            birth_place: contact?.mother?.person?.birth_place || "",
            income: contact?.mother?.incomes || "",
        },
        
        father_data: {
            id_card: contact?.father_id_card || "",
            birth_date: contact?.father?.person?.birth_date || "",
            email: contact?.father?.email || "",
            fLast_name: contact?.father?.person?.fLast_name || contact?.sLast_name || "",
            first_name: contact?.father?.person?.first_name || contact?.father_names.split(" ")[0] || "",
            education_level_id: contact?.father?.education_level_id || "",
            marital_status_id: contact?.father?.marital_status_id || "",
            phone: contact?.father_phone || "",
            phone_type_id: contact?.father?.phone_type_id || 1,
            profession: contact?.father?.profession || contact?.father_occupation || "",
            sLast_name: contact?.father?.person?.sLast_name || "",
            second_name: contact?.father?.person?.second_name || "",
            work_place: contact?.father?.work_place || "",
            birth_place: contact?.father?.person?.birth_place || "",
            income: contact?.father?.incomes || "",
        },
        tutor_data: {
            birth_date: "",
            email: "",
            fLast_name: "",
            first_name: "",
            education_level_id: "",
            marital_status_id: "",
            phone: "",
            profession: "",
            sLast_name: "",
            second_name: "",
            work_place: "",
        },
        socioeconomic_data: {
            family_composition_data: [],
            siblings_data: [{ age: "", name: "", studying: false }],
            birth_order: "",
            disability_description: "",
        },
        financial_references: {
            father_incomes: contact?.father?.incomes || "",
            living_description: "",
            mother_incomes: contact?.mother?.incomes || "",
            other_incomes: "",
            type_house_id: "",
            expenditure: "",
        },
        academic_data: {
            achievements: "",
            difficult_subjects: "",
            dignities: "",
            entry_date: "",
            extracurriculars: "",
            participation: "",
            preferred_subjects: "",
            previous_institution: contact?.last_institution || "",
            repeated_years: "",
        },
        medical_data: {
            allergies: 1,
            allergies_details: "",
            medical_attention_doctor: "",
            student_disability_details: "",
            medical_condition_details: "",
            medical_attention_type_id: "",
            medical_attention_details: "",
            medications: "",
            medical_condition: 1,
            student_disability: 1,
        },
        medical_history: {
            pregnancy_accidents: "",
            birth_height: "",
            pregnancy_type_id: 1,
            birth_weight: "",
            bottle_age: "",
            breastfeeding_period: "",
            family_medical_history: JSON.stringify([]),
            talking_age: "",
            habits_and_activities: "",
            pregnancy_medications: "",
            pregnancy_mother_age: "",
            observations: "",
            pregnancy_difficulties: "",
            father_relationship: "",
            mother_relationship: "",
            others_relationship: "",
            siblings_relationship: "",
            toilet_age: "",
            walking_age: "",
        },
    };


  
   
    const Parents_data = [ "mother_data","father_data", "tutor_data"];

    const [title, setTitle] = useState(contact?.status == 2 ? "¡Esta solicitud aun no se ah enviado al aspirante!" : contact?.status == 3 ? "¡Gracias por su inscripción!" : !contact ?  "Esta Solicitud no existe": "Esta solicitud ya ha sido enviada");
    const [message, setmessage] = useState(contact?.status == 3 ? "Pronto recibirás un correo de confirmación" : '');
   
    const scroll = document.getElementById("scroll");
    const { data, setData, post, processing, errors, reset } = useForm(cleanData);
    const [errorHandling, setErrorHandling] = useState({});
    const [step, setStep] = useState(0);
    const [sended, setSended] = useState(contact?.status != 3);

    const [alert, setAlert] = useState(null);
    console.log(data)
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const emptyFields = fieldVerifier(
            data[form_keys[8]],
            requiredFields[form_keys[8]],
            setErrorHandling
        );

        if (Parents_data.every((parent) => data[parent] == null)) {
            setAlert({ 'error': 'Debe completar al menos un formulario de padre, madre o tutor' });
            return;
        }

     
        if (Object.keys(emptyFields).length === 0) {
            post(route("inscription.store"), {
                onSuccess: (e) => {
                    setSended(true);
                    //reset();
                },
                onError: (error) => {
                    setAlert(error);
                },
            });
        }
    };

    const forms = {
        identification_data: (
            <IdentificationData
                data={data}
                setData={setData}
                errorHandling={errorHandling}
                information={information}
            />
        ),
        mother_data: (
            <MotherData
                data={data}
                setData={setData}
                errorHandling={errorHandling}
                information={information}
            />
        ),
        father_data: (
            <FatherData
                data={data}
                setData={setData}
                errorHandling={errorHandling}
                information={information}
            />
        ),
        tutor_data: (
            <TutorData
                data={data}
                setData={setData}
                errorHandling={errorHandling}
                information={information}
            />
        ),
        socioeconomic_data: (
            <SocioeconomicData
                data={data}
                setData={setData}
                errorHandling={errorHandling}
                information={information}
            />
        ),
        financial_references: (
            <FinancialReferences
                data={data}
                setData={setData}
                errorHandling={errorHandling}
                information={information}
            />
        ),
        academic_data: (
            <AcademicData
                data={data}
                setData={setData}
                errorHandling={errorHandling}
                information={information}
            />
        ),
        medical_data: (
            <MedicalData
                data={data}
                setData={setData}
                errorHandling={errorHandling}
                information={information}
            />
        ),
        medical_history: (
            <MedicalHistory
                data={data}
                setData={setData}
                errorHandling={errorHandling}
                information={information}
            />
        ),
    };

    const form_keys = Object.keys(forms);

    useEffect(() => {
        if (scroll) {
            scroll.scrollIntoView({ behavior: "smooth" });
        }
        fieldVerifier(
            data[form_keys[step]] ,
            [],
            setErrorHandling
        );
    }, [step]);

    function next() {
       
        const emptyFields = fieldVerifier(
            data[form_keys[step]] ,
            requiredFields[form_keys[step]],
            setErrorHandling
        );
        if ('birth_date' in data[form_keys[step]]) {
            const formattedDate = new Date(data[form_keys[step]].birth_date).toISOString().slice(0, 10);
            setData(prevData => ({
                ...prevData,
                [form_keys[step]]: {
                    ...prevData[form_keys[step]],
                    birth_date: formattedDate
                }
            }));
        }
        if (Object.keys(emptyFields).length === 0) {
            setStep(step + 1);
        }
    }

    return (
        <div className="form_bg relative bg-inscription-form bg-cover py-4 min-h-screen">
            <Alert alerta={alert} setAlert={setAlert} />

            <FormHeader
                title="Formulario de Inscripción"
                variant="inscription"
            />

            {!sended ? (
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 mx-auto bg-white bg-opacity-75 rounded-b-md max-w-screen-lg w-full"
                >
                    <h6 className="text-gray-500 pt-6 pr-8 text-right text-lg">
                        {step + 1} / {form_keys.length}
                    </h6>

                    {forms[form_keys[step]]}

                    <div className="w-full flex justify-between md:col-span-2 max-w-screen-lg px-5 mx-auto my-8">
                        <button
                            type="button"
                            onClick={() => {
                                if(data[Object.keys(data)[step]] === null){
                                    setData({
                                        ...data,
                                        [Object.keys(data)[step]]: cleanData[Object.keys(data)[step]], 
                                    });
                                }
                                setStep(step - 1);
                            }}
                            className={`px-5 rounded-md bg-teal-400 py-2 active:bg-sky-500 ${step === 0 && "invisible"
                                }`}
                        >
                            Anterior
                        </button>
                        <div className="flex gap-6">
                            <button
                                type="button"
                                onClick={() => {
                                    setStep(step + 1);
                                    setData({
                                        ...data,
                                        [Parents_data[step - 1]]: null,
                                    });
                                }}
                                className={`px-5 rounded-md bg-blue-500 py-2 active:bg-blue-400 ${![1, 2, 3].includes(step) && "hidden"
                                    }`}
                            >
                                Omitir
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                className={`px-5 rounded-md bg-sky-400 py-2 active:bg-sky-500 ${step === form_keys.length - 1 && "hidden"
                                    }`}
                            >
                                Siguiente
                            </button>
                        </div>
                        <button
                            type="submit"
                            className={`px-5 rounded-md bg-green-400 py-2 active:bg-sky-500 ${step !== form_keys.length - 1 && "hidden"
                                }`}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            ) : (
                <FormSubmitted title={title} message={message} submsj={contact} />
            )}
            <Loading message="Enviando" status={processing} />
        </div>
    );
};

export default InscriptionForm;

const requiredFields = {
    identification_data: [
        "sector",
        "address_street",
        "birth_date",
        "birth_place",
        "fLast_name",
        "first_name",
        "id_card",
        "level_id",
        "phone",
        "reference",
    ],
    mother_data: [
        "birth_date",
        "email",
        "fLast_name",
        "first_name",
        "education_level_id",
        "marital_status_id",
        "phone",
        "profession",
        "work_place",
    ],
    father_data: [
        "birth_date",
        "email",
        "fLast_name",
        "first_name",
        "education_level_id",
        "marital_status_id",
        "phone",
        "profession",
        "work_place",
    ],
    tutor_data: [
        "birth_date",
        "email",
        "fLast_name",
        "first_name",
        "education_level_id",
        "marital_status_id",
        "phone",
        "profession",
        "work_place",
    ],
    socioeconomic_data: [],
    financial_references: [
        "father_incomes",
        "living_description",
        "mother_incomes",
        "other_incomes",
        "type_house_id",
        "expenditure",
    ],
    academic_data: [
        "entry_date",
        "previous_institution",
        "repeated_years",
        "preferred_subjects",
        "difficult_subjects",
        "achievements",
        "dignities",
        "extracurriculars",
    ],
    medical_data: [
        "student_disability_details",
        "medical_condition_details",
        "allergies_details",
        //"medications",
        "medical_attention_type_id",
        "medical_attention_details",
        "medical_attention_doctor",
    ],
    medical_history: [
        "pregnancy_mother_age",
        "pregnancy_accidents",
        "pregnancy_medications",
        "pregnancy_type_id",
        "pregnancy_difficulties",
        "birth_weight",
        "birth_height",
        "walking_age",
        "talking_age",
        "breastfeeding_period",
        "bottle_age",
        "toilet_age",
        "observations",
        "family_medical_history",
        "father_relationship",
        "mother_relationship",
        "siblings_relationship",
        "others_relationship",
        "habits_and_activities",
    ],
};



