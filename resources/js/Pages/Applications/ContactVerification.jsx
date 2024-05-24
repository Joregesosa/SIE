import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
 
export default function ContactVerification({ auth, data, msj }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Procesar Solicitud</h2>}
        >
            <Head title="Procesar solicitud" />

            <div className='h-[calc(100vh-120px)] rounded-b-md grid grid-cols-12 bg-white bg-opacity-95 overflow-y-auto p-10 gap-x-4' role='print'>
 

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

            </div>
             

        </AuthenticatedLayout>
    );
}
