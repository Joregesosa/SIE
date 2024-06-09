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


export default function EnrollmentVerification({ auth, data: dataprop, msj }) {
    const { data, setData, post, processing, errors, reset } = useForm(dataprop);
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
                        <IdentificationData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos del Padre">
                        <FatherData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos de la Madre">
                        <MotherData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos del representante legal">
                        <TutorData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos socioeconómicos">
                        <SocioeconomicData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Referencias socioeconómicos">
                        <FinancialReferences data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos académicos">
                        <AcademicData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Datos medicos">
                        <MedicalData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab pt={pt} header="Historia vital">
                        <MedicalHistory data={data} setData={setData} />
                    </AccordionTab>
                </Accordion>

            </form>

        </AuthenticatedLayout>
    );
}
