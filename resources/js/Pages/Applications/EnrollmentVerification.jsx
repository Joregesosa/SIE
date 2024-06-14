import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Head, useForm } from '@inertiajs/react';
import { AcademicData } from '@/Components/InscriptionFormPartials/AcademicData';
import { FatherData } from '@/Components/InscriptionFormPartials/FatherData';
import { MotherData } from '@/Components/InscriptionFormPartials/MotherData';
import { TutorData } from '@/Components/InscriptionFormPartials/TutorData';
import { SocioeconomicData } from '@/Components/InscriptionFormPartials/SocioeconomicData';
import { FinancialReferences } from '@/Components/InscriptionFormPartials/FinancialReferences';
import { MedicalData } from '@/Components/InscriptionFormPartials/MedicalData';
import { MedicalHistory } from '@/Components/InscriptionFormPartials/MedicalHistory';
import { ThemeContext } from '@/Context/ThemeProvider';
import { useContext } from 'react';
import { IdentificationData } from '@/Components/InscriptionFormPartials/IdentificationData';
import { Loading } from '@/Components/Loading';
 
export default function EnrollmentVerification({ auth, data: dataprop, msj, information }) {
    const cleanData = { 
        identification_data: {
            level_id: dataprop?.level_id || '',
            first_name: dataprop?.person?.first_name || '',
            second_name: dataprop?.person?.second_name || '',
            sLast_name: dataprop?.person?.sLast_name|| '' ,
            fLast_name: dataprop?.person?.fLast_name || '',
            birth_date: dataprop?.person?.birth_date || '',
            birth_day_place: dataprop?.person?.birth_place || '',
            id_card: dataprop?.person?.id_card || '',
            sector: dataprop?.sector || '',
            address_street: dataprop?.address_street || '',
            number: dataprop?.number || '',
            reference: dataprop?.reference || '',   
        },
        mother_data: {
            birth_date: "",
            email: "",
            fLast_name: dataprop?.sLast_name || '',
            first_name: '',
            education_level_id: "",
            marital_status_id: "",
            number: dataprop?.mother_phone || '',
            profession: dataprop?.mother_occupation || '',
            sLast_name: "",
            second_name: "",
            work_place: "",
        },
        father_data: {
            birth_date: "",
            email: "",
            fLast_name: dataprop?.fLast_name || '',
            first_name:  '',
            education_level_id: "",
            marital_status_id: "",
            number: dataprop?.father_phone || '',
            profession: dataprop?.father_occupation || '',
            sLast_name: "",
            second_name: "",
            work_place: "",
        },
        tutor_data: {
            birth_date: "",
            email: "",
            fLast_name: "",
            first_name: "",
            education_level_id: "",
            marital_status_id: "",
            number: "",
            profession: "",
            sLast_name: "",
            second_name: "",
            work_place: "",
        },
        socioeconomic_data: {
            family_composition_data: dataprop?.family_composition_data || "",
            siblings_data: [{ age: '', name: '', studying: false }],
            birth_order : dataprop?.birth_order || '',
            disability_description: dataprop?.disability_description || '',
            
        },
        financial_references: {
            father_incomes: "",
            living_description: dataprop?.living_description || '',
            mother_incomes:  '',
            other_incomes: dataprop?.other_incomes || '',
            type_house_id: dataprop?.type_house_id || '',
            expenditure: dataprop?.expenditure || '',
        },
        academic_data: {
            achievements: dataprop?.achievements || "",
            difficult_subjects: dataprop?.difficult_subjects || "",
            entry_date: dataprop?.entry_date || "",
            extracurriculars: dataprop?.extracurriculars || "",
            participation: dataprop?.participation || "",
            preferred_subjects: dataprop?.preferred_subjects || "",
            previous_institution: dataprop?.last_institution || "",
            repeated_years: dataprop?.repeated_years || "",
        },
        medical_data: {
            allergies: dataprop?.allergies || 1,
            allergies_details: dataprop?.allergies_details || '',
            medical_attention_doctor: dataprop?.medical_attention_doctor || '', 
            student_disability_details: dataprop?.student_disability_details || '',
            medical_condition_details: dataprop?.medical_condition_details || '',
            medical_attention_type_id: dataprop?.medical_attention_type_id || 1,
            medical_attention_details: dataprop?.medical_attention_details || '',
            medications: dataprop?.medications || '',
            medical_condition: dataprop?.medical_condition || 1,
            student_disability: dataprop?.student_disability || 1,
        },
        medical_history: {
            pregnancy_accidents: dataprop?.pregnancy_accidents || '',
            birth_height: dataprop?.birth_height || '',
            pregnancy_type_id: dataprop?.pregnancy_type_id || 1,
            birth_weight: dataprop?.birth_weight || '',
            bottle_age: dataprop?.bottle_age || '',
            breastfeeding_period: dataprop?.breastfeeding_period || '',
            family_medical_history: dataprop?.family_medical_history || '',
            talking_age: dataprop?.talking_age || '',
            habits_and_activities: "",
            pregnancy_medications: dataprop?.pregnancy_medications || '',
            pregnancy_mother_age: dataprop?.pregnancy_mother_age || '',
            observations: dataprop?.observations || '',
            pregnancy_difficulties: dataprop?.pregnancy_difficulties || '',
            father_relationship: dataprop?.father_relationship || '',
            mother_relationship: dataprop?.mother_relationship || '',
            others_relationship: dataprop?.others_relationship || '',
            siblings_relationship: dataprop?.siblings_relationship || '',
            toilet_age: dataprop?.toilet_age || '',
            walking_age: dataprop?.walking_age || '',
        }
    }
    console.log(dataprop)
    const { data, setData, post, processing, errors, reset } = useForm(cleanData);
    const { theme } = useContext(ThemeContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('applications.update', data.id));
    }

    const pt = {
        headerAction: { className: `bg-${theme}-secondary text-${theme}-text` },
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Solicitudes / Procesar Matricula"}
        >
            <Head title="Procesar Matricula" />

            <form className='max-w-screen-lg py-8 mx-auto' onSubmit={handleSubmit}>
                <Accordion activeIndex={0}>
                    <AccordionTab pt={pt} header="Datos del estudiante">
                        <IdentificationData data={data} setData={setData} information={information} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos del Padre">
                        <FatherData data={data} setData={setData} information={information} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos de la Madre">
                        <MotherData data={data} setData={setData} information={information} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos del representante legal">
                        <TutorData data={data} setData={setData} information={information} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos socioeconómicos">
                        <SocioeconomicData data={data} setData={setData} information={information} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Referencias socioeconómicos">
                        <FinancialReferences data={data} setData={setData} information={information} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos académicos">
                        <AcademicData data={data} setData={setData} information={information} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos medicos">
                        <MedicalData data={data} setData={setData} information={information} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Historia vital">
                        <MedicalHistory data={data} setData={setData} information={information} />
                    </AccordionTab>
                </Accordion>
            </form>
           
            <Loading message="Enviando" status={processing} />

        </AuthenticatedLayout>
    );
}
