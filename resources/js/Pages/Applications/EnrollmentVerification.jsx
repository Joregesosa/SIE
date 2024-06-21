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
import { useContext, useEffect, useState } from 'react';
import { IdentificationData } from '@/Components/InscriptionFormPartials/IdentificationData';
import { Loading } from '@/Components/Loading';
import { FormActionButtons } from '@/Components/FormActionButtons';
import New from '@/Components/Users/New';

export default function EnrollmentVerification({ auth, data: dataprop, msj, information, disable }) {
    
    const { data, setData, put, processing, errors, reset } = useForm(dataprop);
    const [alert, setAlert] = useState(null)
    const { theme } = useContext(ThemeContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('students.update', data.id));
    }
    
    useEffect(() => {
        setData({...data, disable: disable})
    },[disable])

    useEffect(() => {
        if (msj) {
            setAlert(msj)
        }
    }, 
    [msj])

    const pt = {
        headerAction: { className: `bg-${theme}-secondary text-${theme}-text` },
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            alert={alert}
            setAlert={setAlert}
            header={"Solicitudes / Procesar Matricula"}
        >
            <Head title="Procesar Matricula" />

            <form className='max-w-screen-lg py-8 mx-auto' onSubmit={handleSubmit}>
                <Accordion activeIndex={0}>
                    <AccordionTab pt={pt} header="Datos del estudiante">
                        <IdentificationData data={data} setData={setData} information={information} disable={disable}/>
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
                    {auth.user.role_id === 1 &&
                        <AccordionTab pt={pt} header="Usuario">
                            <New data={data} roles={information.roles} setData={setData}/>
                        </AccordionTab>
                    }
                </Accordion>

                <div className="w-full flex justify-end md:col-span-2">
                    <FormActionButtons accept_lbl={'Actualizar'} />
                </div>
            </form>

            <Loading message="Enviando" status={processing} />

        </AuthenticatedLayout>
    );
}
