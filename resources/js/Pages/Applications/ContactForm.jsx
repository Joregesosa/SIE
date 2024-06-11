import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useForm } from '@inertiajs/react';
import { Dropdown } from 'primereact/dropdown';
import { FormActionButtons } from '@/Components/FormActionButtons';
import { useEffect } from 'react';
import { Loading } from '@/Components/Loading';
import { FormHeader } from '@/Components/FormHeader';
import { required_fields, desc, contact_fields } from '@/Helpers/Contact.Form-Statics';
import { fieldVerifier } from '@/Helpers/Form.Verifier';
import { FormSubmitted } from '@/Components/FormSubmitted';

const ContactForm = ({ msj, levels }) => {
    const [errorHandling, setErrorHandling] = useState({});
    const { data, setData, post, processing, errors, reset } = useForm(contact_fields);
    const [sended, setSended] = useState(false);

    const handleChanges = (e) => {
        setData(e.target.id, e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const emptyFields = fieldVerifier(data, required_fields, setErrorHandling);
        if (Object.keys(emptyFields).length === 0) {

            post(route('contact.create'), {
                onSuccess: () => {
                    setSended(true);
                },
                onError: () => {
                    alert('Ha ocurrido un error, por favor intente de nuevo' + msj?.error);
                }
            });

        }

    };

    return (
        <div className='bg-contact-form bg-no-repeat bg-cover bg-center py-6 min-h-screen'>

            <FormHeader title="CONTACTO ASPIRANTES" desc={sended? '': desc} variant="contact"/>
            {!sended ?
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto bg-white bg-opacity-85 p-5 h-full'>

                        <label htmlFor="first_name" className="font-bold text-xs">
                            Primer nombre <span>*</span>
                            <InputText
                                id="first_name"
                                name="first_name"
                                type="text"
                                value={data?.first_name}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el primer nombre"
                            />
                            {errorHandling?.first_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="second_name" className="font-bold text-xs">
                            Segundo nombre
                            <InputText
                                id="second_name"
                                name="second_name"
                                value={data?.second_name}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el segundo nombre"
                            />
                            {errorHandling?.second_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="fLast_name" className="font-bold text-xs">
                            Primer Apellido <span>*</span>
                            <InputText
                                id="fLast_name"
                                name="fLast_name"
                                value={data?.fLast_name}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el primer apellido"
                            />
                            {errorHandling?.fLast_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="sLast_name" className="font-bold text-xs">
                            Segundo Apellido
                            <InputText
                                id="sLast_name"
                                name="sLast_name"
                                value={data?.sLast_name}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el segundo apellido"
                            />
                            {errorHandling?.sLast_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="id_card" className="font-bold text-xs">
                            Número de cédula <span>*</span>
                            <InputText
                                id="id_card"
                                name="id_card"
                                type='text'
                                value={data?.id_card}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el número de cédula"
                            />
                            {errorHandling?.id_card && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="age" className="font-bold text-xs">
                            Edad del alumno <span>*</span>
                            <InputText
                                id="age"
                                name="age"
                                min={1}
                                type='number'
                                max={100}
                                value={data?.age}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese la edad del alumno"
                            />
                            {errorHandling?.age && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="number" className="font-bold text-xs">
                            Número de teléfono <span>*</span>
                            <InputText
                                id="number"
                                name="number"
                                type='tel'
                                value={data?.number}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el número de teléfono"
                            />
                            {errorHandling?.number && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="email" className="font-bold text-xs">
                            Correo electrónico <span>*</span>
                            <InputText
                                id="email"
                                name="email"
                                type='email'
                                value={data?.email}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el correo electrónico"
                            />
                            {errorHandling?.email && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="last_institution" className="font-bold text-xs">
                            Nombre de la Institución Educativa de donde proviene el alumno <span>*</span>
                            <InputText
                                id="last_institution"
                                name="last_institution"
                                value={data?.last_institution}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el nombre de la institución educativa"
                            />
                            {errorHandling?.last_institution && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="behavior_qualification" className="font-bold text-xs">
                            Calificación comportamental del alumno <span>*</span>
                            <InputText
                                id="behavior_qualification"
                                name="behavior_qualification"
                                value={data?.behavior_qualification}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese la calificación comportamental del alumno"
                            />
                            {errorHandling?.behavior_qualification && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="address" className="font-bold text-xs">
                            Dirección <span>*</span>
                            <InputText
                                id="address"
                                name="address"
                                value={data?.address}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese la dirección"
                            />
                            {errorHandling?.address && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label className="font-bold text-xs">
                            Año o nivel al que desea aplicar <span>*</span>
                            <Dropdown
                                id='level'
                                name='level'
                                value={data?.level}
                                onChange={handleChanges}
                                options={levels}
                                optionLabel="description"
                                placeholder="Seleccione un nivel"
                                optionValue="id"
                                filter
                                className="flex items-center border h-[42px] border-gray-500 flex-grow"

                            />
                            {errorHandling?.level && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="father_names" className="font-bold text-xs">
                            Nombres del Padre
                            <InputText
                                id="father_names"
                                name="father_names"
                                value={data?.father_names}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese los nombres del padre"
                            />
                            {errorHandling?.father_names && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="father_phone" className="font-bold text-xs">
                            Número de teléfono del Padre <span>*</span>
                            <InputText
                                id="father_phone"
                                name="father_phone"
                                type='tel'
                                value={data?.father_phone}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el número de teléfono del padre"
                            />
                            {errorHandling?.father_phone && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="father_occupation" className="font-bold text-xs">
                            Actividad económica del Padre <span>*</span>
                            <InputText
                                id="father_occupation"
                                name="father_occupation"
                                value={data?.father_occupation}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese la actividad económica del padre"
                            />
                            {errorHandling?.father_occupation && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="mother_names" className="font-bold text-xs">
                            Nombres de la Madre <span>*</span>
                            <InputText
                                id="mother_names"
                                name="mother_names"
                                value={data?.mother_names}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese los nombres de la madre"
                            />
                            {errorHandling?.mother_names && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="mother_phone" className="font-bold text-xs">
                            Número de teléfono de la Madre <span>*</span>
                            <InputText
                                id="mother_phone"
                                name="mother_phone"
                                type='tel'
                                value={data?.mother_phone}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese el número de teléfono de la madre"
                            />
                            {errorHandling?.mother_phone && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <label htmlFor="mother_occupation" className="font-bold text-xs">
                            Actividad económica de la Madre <span>*</span>
                            <InputText
                                id="mother_occupation"
                                name="mother_occupation"
                                value={data?.mother_occupation}
                                required
                                className='rounded-md w-full'
                                onChange={handleChanges}
                                placeholder="Ingrese la actividad económica de la madre"
                            />
                            {errorHandling?.mother_occupation && <span className="text-red-500 text-xs">Este campo es requerido</span>}
                        </label>

                        <div className='w-full flex justify-end md:col-span-2'>
                            <FormActionButtons />
                        </div>
                    </div>
                </form>
                :
                <FormSubmitted />
            }


            <Loading message="Enviando" status={processing} />
        </div>
    );
};


export default ContactForm;


