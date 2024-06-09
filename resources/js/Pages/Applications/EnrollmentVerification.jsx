import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Head, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ContactReport from '@/Reports/ContactReport';
import { AcademicData } from '@/Components/InscriptionFormPartials/AcademicData';
import { FatherData } from '@/Components/InscriptionFormPartials/FatherData';
import { MotherData } from '@/Components/InscriptionFormPartials/MotherData';
import { TutorData } from '@/Components/InscriptionFormPartials/TutorData';
import { SocioeconomicData } from '@/Components/InscriptionFormPartials/SocioeconomicData';
import { FinancialReferences } from '@/Components/InscriptionFormPartials/FinancialReferences';
import { MedicalData } from '@/Components/InscriptionFormPartials/MedicalData';
import { MedicalHistory } from '@/Components/InscriptionFormPartials/MedicalHistory';


export default function EnrollmentVerification({ auth, data: dataprop, msj }) {
    const { data, setData, post, processing, errors, reset } = useForm(dataprop);
    const request_no = (id) => {
        let request_no = id.toString();
        let length = request_no.length;
        let zeros = 5 - length;
        let request = '';
        for (let i = 0; i < zeros; i++) {
            request += '0';
        }
        request += request_no;
        return request;
    }
    const date_format = (date) => {

        let d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        let year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('applications.update', data.id));
    }
    const handleChanges = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Solicitudes / Procesar Matricula"}
        >
            <Head title="Procesar Matricula" />

            <div className=' rounded-b-md gap-x-4 max-w-screen-lg mx-auto' role='print'>
                <Accordion>
                    <AccordionTab header="Datos del Estudiante">
                        <AcademicData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab header="Datos del Padre">
                        <FatherData data={data} setData={setData} handleFatherData={() => console.log('object')} />
                    </AccordionTab>
                    <AccordionTab header="Datos de la Madre">
                        <MotherData data={data} setData={setData}    />
                    </AccordionTab>
                    <AccordionTab header="Datos del Representante">
                        <TutorData data={data} setData={setData} handleTutorData={() => console.log('object')} />
                    </AccordionTab>
                    <AccordionTab header="Datos socioeconómicos">
                        <SocioeconomicData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab header="Datos socioeconómicos">
                        <FinancialReferences data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab header="Datos académicos">
                        <AcademicData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab header="Datos medicos">
                        <MedicalData data={data} setData={setData} />
                    </AccordionTab>
                    <AccordionTab header="Historia vital">
                        <MedicalHistory data={data} setData={setData} />
                    </AccordionTab>
                </Accordion>

            </div>

        </AuthenticatedLayout>
    );
}
