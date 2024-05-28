import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ContactReport from '@/Reports/ContactReport';
export default function ContactVerification({ auth, data, msj }) {
 
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Procesar Solicitud</h2>}
        >
            <Head title="Procesar solicitud" />
            <div id='print' className='h-[calc(100vh-120px)] bg-white bg-opacity-95 p-10 overflow-y-auto print:py-0 print:h-full'>
                <div aria-roledescription='logo container' className={`w-full h-fit flex justify-between max-w-screen-lg mx-auto pb-4`} >
                    <figure className='w-full flex-shrink-0  max-w-32'>
                        <img loading='lazy' src="https://lists.office.com/Images/9074fa55-8f43-42bd-9a40-0d7a38b9c66e/0fd61129-93f5-4eca-8c45-3e318953accd/T8REH8MB6WNIDPEDE9XWC501E7/d7cfebf9-81be-4890-823d-22781aa93638" alt="company logo" className='w-full' />
                    </figure>

                    <div>
                        <h1 className='text-2xl font-bold print:text-xl'>UNIDAD EDUCATIVA "THOMAS RUSSELL CRAMPTON"</h1>
                        <p className='text-right'>Avenida Atahualpa E10 - 60 y Santiago. Sector San Nicolás</p>
                        <p className='text-right'>Teléfonos: 2361 723/2361 908 / 099 471 0524</p>
                        <p className='text-right'>Código AMIE: 17H02185</p>
                        <p className='text-right'>Distrito: 17D10 Cayambe - Pedro Moncayo</p>
                        <p className='text-right'>Circuito: 17D10C03 - Zona: 2</p>
                    </div>

                </div>
       
                <div className=' rounded-b-md grid grid-cols-12  gap-x-4 max-w-screen-lg mx-auto' role='print'>
                    <h2 className='col-span-12 py-2 font-bold'>Solicitud de contacto</h2>
                    <label htmlFor="second_Name" className="font-bold text-xs col-span-3">
                        Fecha de solicitud:
                        <InputText
                            id="second_name"
                            value={data?.second_name}
                            readOnly
                            className='rounded-sm w-full border-b-2 border-x-0 border-t-0 bg-transparent' />
                    </label>
                    <label htmlFor="firstName" className="font-bold text-xs col-start-10 col-end-13 ">
                        No Solicitud:
                        <InputText
                            id="date"
                            type="date"
                            value={data?.created_at}
                            readOnly
                            className='rounded-sm w-full border-b-2 border-x-0 border-t-0 bg-transparent' />
                    </label>
                    <label htmlFor="firstName" className="font-bold text-xs col-span-3">
                        Primer nombre
                        <InputText
                            id="first_name"
                            type="text"
                            value={data?.first_name}
                            readOnly
                            className='rounded-sm w-full border-b-2 border-x-0 border-t-0 bg-transparent' />
                    </label>
                    <label htmlFor="second_Name" className="font-bold text-xs col-span-3">
                        Segundo nombre
                        <InputText
                            id="second_name"
                            value={data?.second_name}
                            readOnly
                            className='rounded-sm w-full border-b-2 border-x-0 border-t-0 bg-transparent' />
                    </label>
                    <label htmlFor="firstName" className="font-bold text-xs col-span-3">
                        Primer Apellido
                        <InputText
                            id="fLast_name"
                            value={data?.fLast_name}
                            readOnly
                            className='rounded-sm w-full border-b-2 border-x-0 border-t-0 bg-transparent' />
                    </label>
                    <label htmlFor="firstName" className="font-bold text-xs col-span-3">
                        Segundo Apellido
                        <InputText
                            id="sLast_name"
                            value={data?.sLast_name}
                            readOnly
                            className='rounded-sm w-full border-b-2 border-x-0 border-t-0 bg-transparent' />
                    </label>
                    <label htmlFor="id_card" className="font-bold text-xs col-span-4">
                        Número de cédula
                        <InputText
                            id="id_card"
                            type='text'
                            pattern='[0-9]{10}'
                            value={data?.id_card}
                            required
                            className='rounded-sm w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="age" className="font-bold text-xs col-span-4">
                        Edad del alumno
                        <InputText
                            id="age"
                            min={1}
                            type='number'
                            max={100}
                            value={data?.age}
                            required
                            className='rounded-sm w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="number" className="font-bold text-xs col-span-4">
                        Número de teléfono
                        <InputText
                            id="number"
                            type='tel'
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            value={data?.number}
                            required
                            className='rounded-sm w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="email" className="font-bold text-xs col-span-5">
                        Correo electrónico
                        <InputText
                            id="number"
                            type='email'
                            value={data?.email}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="last_institution" className="font-bold text-xs col-span-7">
                        Nombre de la Institución Educativa de donde proviene el alumno
                        <InputText
                            id="last_institution"
                            value={data?.last_institution}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="behavior_qualification" className="font-bold text-xs col-span-4">
                        Calificación comportamental del alumno
                        <InputText
                            id="behavior_qualification"
                            value={data?.behavior_qualification}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="address" className="font-bold text-xs col-span-8">
                        Dirección
                        <InputText
                            id="address"
                            value={data?.address}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="level" className="font-bold text-xs col-span-12">
                        Año o nivel al que desea aplicar
                        <InputText
                            id="level"
                            value={data?.level}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="father_names" className="font-bold text-xs col-span-4">
                        Nombres del Padre
                        <InputText
                            id="father_names"
                            value={data?.father_names}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="father_phone" className="font-bold text-xs col-span-3">
                        Teléfono del Padre
                        <InputText
                            id="father_phone"
                            type='tel'
                            value={data?.father_phone}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="father_occupation" className="font-bold text-xs col-span-5">
                        Actividad económica del Padre
                        <InputText
                            id="father_occupation"
                            value={data?.father_occupation}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="mother_names" className="font-bold text-xs col-span-4">
                        Nombres de la Madre
                        <InputText
                            id="mother_names"
                            value={data?.mother_names}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="mother_phone" className="font-bold text-xs col-span-3">
                        Teléfono de la Madre
                        <InputText
                            id="mother_phone"
                            type='tel'
                            value={data?.mother_phone}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>
                    <label htmlFor="mother_occupation" className="font-bold text-xs col-span-5">
                        Actividad económica de la Madre
                        <InputText
                            id="mother_occupation"
                            value={data?.mother_occupation}
                            required
                            className='rounded-md w-full border-b-2 border-x-0 border-t-0 bg-transparent'
                        />
                    </label>

                    <form className="col-span-12 mt-4">
                        <fieldset className='grid grid-cols-12'>
                            <fieldset className='font-semibold mb-2 col-span-12 gap-4'>Actualizar status de solicitud</fieldset>

                            <label htmlFor="comment" className="font-bold text-xs col-span-12">
                                Comentario
                                <textarea
                                    id="comment"
                                    value={data?.comment}
                                    className="rounded-md w-full bg-transparent resize-none h-32"
                                />
                            </label>

                            <label htmlFor="payment" className="font-bold text-xs col-span-6 pr-4 mt-1">
                                Pago
                                <input
                                    id="payment"
                                    type="number"
                                    pattern='[0-9]{1,10}'
                                    value={data?.payment}
                                    className="rounded-md w-full bg-transparent"
                                />
                            </label>
                            <label htmlFor="payment_date" className="font-bold text-xs col-span-6 pl-4 mt-1">
                                Fecha de pago
                                <input
                                    id="payment_date"
                                    type="date"
                                    value={data?.payment_date}
                                    className="rounded-md w-full bg-transparent"
                                />
                            </label>
                            <label htmlFor="payment_receipt" className="font-bold text-xs col-span-6 pr-4 mt-1">
                                Número de comprobante de pago
                                <input
                                    id="payment_receipt"
                                    type="text"
                                    value={data?.payment_receipt}
                                    className="rounded-md w-full bg-transparent"
                                />
                            </label>
                            <label htmlFor="status" className="font-bold text-xs col-span-6 pl-4 mt-1">
                                Estado de la solicitud
                                <select
                                    id="status"
                                    value={data?.status}
                                    className="rounded-md w-full bg-transparent"
                                >
                                    <option value="pending">Pendiente</option>
                                    <option value="approved">Aprobado</option>
                                    <option value="rejected">Rechazado</option>
                                </select>
                            </label>


                        </fieldset>
                        <div className=" py-4 flex justify-end print:hidden">
                            <PDFDownloadLink
                                document={<ContactReport data={data} />}
                                fileName="solicitud.pdf"
                                className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">
                                Descargar PDF
                            </PDFDownloadLink>

                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                                Actualizar
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </AuthenticatedLayout>
    );
}
