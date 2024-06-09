import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useForm } from '@inertiajs/react';
import { Dropdown } from 'primereact/dropdown';
import { FormActionButtons } from '@/Components/FormActionButtons';
import { Alert } from '@/Components/Alerts/Alert';

import { useEffect } from 'react';

const ContactForm = ({ msj, levels }) => {

    const { data, setData, post, processing, errors, reset } = useForm(clear_form);

    const [alert, setAlert] = useState(null);

    const handleChanges = (e) => {
        setData(e.target.id, e.target.value);
    }

    useEffect(() => {

        setAlert(msj);

        if (msj?.success) {
            console.log(msj)
            reset();

        }
    }, [msj]);


    const handleSubmit = (e) => {
        e.preventDefault();


        post(route('contact.create'), {

        });
    };

    return (
        <div className='bg-contact-form bg-no-repeat bg-cover bg-center'>
            <Alert alerta={alert} setAlert={setAlert} />
            <header className='bg-[#112757] text-gray-100'>
                <div className='md:flex md:items-center  max-w-screen-lg mx-auto pt-5 md:gap-6'>
                    <figure className='w-44 h-44 mx-auto md:mx-0 flex-shrink-0'>
                        <img loading='lazy' src="images/log.png" alt="company logo" className='w-full' />
                    </figure>
                    <h1 className='text-center md:text-left md:text-4xl py-2 text-2xl font-semibold'>Contactos aspirantes</h1>
                </div>
                <p className='px-3 py-5 mx-auto max-w-screen-lg'></p>
                <p className='px-3 py-5 mx-auto max-w-screen-lg'>
                    Bienvenidos a la Unidad Educativa Thomas Russell Crampton, un espacio donde la innovación y la excelencia educativa se encuentran para forjar el futuro de las nuevas generaciones. En nuestra institución, nos enorgullece ofrecer un entorno de aprendizaje único, diseñado para inspirar la curiosidad, el pensamiento crítico y la pasión por el conocimiento en cada uno de nuestros estudiantes. Al aspirar a formar parte de nuestra comunidad, te embarcas en un viaje educativo sin precedentes, donde cada experiencia está cuidadosamente elaborada para expandir tus horizontes y desafiar tus límites. Aquí, en Thomas Russell Crampton, no solo te preparamos para afrontar los desafíos del mañana, sino que te equipamos con las herramientas necesarias para ser un líder innovador y un ciudadano global responsable. Te invitamos a unirte a nosotros en esta aventura transformadora, donde tu potencial no conoce límites y tu pasión por aprender se enciende con cada nuevo día.
                </p>
            </header>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto bg-white bg-opacity-75 p-5 h-full'>

                    <label htmlFor="first_name" className="font-bold text-xs">
                        Primer nombre <span>*</span>
                        <InputText
                            id="first_name"
                            type="text"
                            value={data?.first_name}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el primer nombre"
                        />
                    </label>

                    <label htmlFor="second_name" className="font-bold text-xs">
                        Segundo nombre
                        <InputText
                            id="second_name"
                            value={data?.second_name}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el segundo nombre"
                        />
                    </label>

                    <label htmlFor="fLast_name" className="font-bold text-xs">
                        Primer Apellido <span>*</span>
                        <InputText
                            id="fLast_name"
                            value={data?.fLast_name}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el primer apellido"
                        />
                    </label>

                    <label htmlFor="sLast_name" className="font-bold text-xs">
                        Segundo Apellido
                        <InputText
                            id="sLast_name"
                            value={data?.sLast_name}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el segundo apellido"
                        />
                    </label>

                    <label htmlFor="id_card" className="font-bold text-xs">
                        Número de cédula <span>*</span>
                        <InputText
                            id="id_card"
                            type='text'
                            /*  pattern='[0-9]{10}' */
                            value={data?.id_card}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el número de cédula"
                        />
                    </label>

                    <label htmlFor="age" className="font-bold text-xs">
                        Edad del alumno <span>*</span>
                        <InputText
                            id="age"
                            min={1}
                            type='number'
                            max={100}
                            value={data?.age}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese la edad del alumno"
                        />
                    </label>

                    <label htmlFor="number" className="font-bold text-xs">
                        Número de teléfono <span>*</span>
                        <InputText
                            id="number"
                            type='tel'
                            value={data?.number}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el número de teléfono"
                        />
                    </label>

                    <label htmlFor="email" className="font-bold text-xs">
                        Correo electrónico <span>*</span>
                        <InputText
                            id="email"
                            type='email'
                            value={data?.email}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el correo electrónico"
                        />
                    </label>

                    <label htmlFor="last_institution" className="font-bold text-xs">
                        Nombre de la Institución Educativa de donde proviene el alumno <span>*</span>
                        <InputText
                            id="last_institution"
                            value={data?.last_institution}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el nombre de la institución educativa"
                        />
                    </label>

                    <label htmlFor="behavior_qualification" className="font-bold text-xs">
                        Calificación comportamental del alumno <span>*</span>
                        <InputText
                            id="behavior_qualification"
                            value={data?.behavior_qualification}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese la calificación comportamental del alumno"
                        />
                    </label>

                    <label htmlFor="address" className="font-bold text-xs">
                        Dirección <span>*</span>
                        <InputText
                            id="address"
                            value={data?.address}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese la dirección"
                        />
                    </label>

                    <label className="font-bold text-xs">
                        Año o nivel al que desea aplicar
                        <Dropdown
                            id='level'
                            value={data?.level}
                            onChange={handleChanges}
                            options={levels}
                            optionLabel="description"
                            placeholder="Seleccione un nivel"
                            optionValue="id"
                            filter
                            className="flex items-center border h-[42px] border-gray-500 flex-grow"
                            required
                            onInvalid={(event) => {
                                if (event.target.value == "") {
                                    window.alert('Seleccione el año o nivel al que desea aplicar')
                                    return event.target.setCustomValidity(`Seleccione un nivel`)
                                }
                                return event.target.setCustomValidity("")
                            }}
                        />
                    </label>

                    <label htmlFor="father_names" className="font-bold text-xs">
                        Nombres del Padre
                        <InputText
                            id="father_names"
                            value={data?.father_names}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese los nombres del padre"
                        />
                    </label>

                    <label htmlFor="father_phone" className="font-bold text-xs">
                        Número de teléfono del Padre <span>*</span>
                        <InputText
                            id="father_phone"
                            type='tel'
                            value={data?.father_phone}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el número de teléfono del padre"
                        />
                    </label>

                    <label htmlFor="father_occupation" className="font-bold text-xs">
                        Actividad económica del Padre <span>*</span>
                        <InputText
                            id="father_occupation"
                            value={data?.father_occupation}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese la actividad económica del padre"
                        />
                    </label>

                    <label htmlFor="mother_names" className="font-bold text-xs">
                        Nombres de la Madre <span>*</span>
                        <InputText
                            id="mother_names"
                            value={data?.mother_names}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese los nombres de la madre"
                        />
                    </label>

                    <label htmlFor="mother_phone" className="font-bold text-xs">
                        Número de teléfono de la Madre <span>*</span>
                        <InputText
                            id="mother_phone"
                            type='tel'
                            value={data?.mother_phone}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese el número de teléfono de la madre"
                        />
                    </label>

                    <label htmlFor="mother_occupation" className="font-bold text-xs">
                        Actividad económica de la Madre <span>*</span>
                        <InputText
                            id="mother_occupation"
                            value={data?.mother_occupation}
                            required
                            className='rounded-md w-full'
                            onChange={handleChanges}
                            placeholder="Ingrese la actividad económica de la madre"
                        />
                    </label>

                    <div className='w-full flex justify-end md:col-span-2'>
                        <FormActionButtons />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
const clear_form = {
    first_name: '',
    second_name: '',
    fLast_name: '',
    sLast_name: '',
    id_card: '',
    age: '',
    number: '',
    email: '',
    last_institution: '',
    behavior_qualification: '',
    address: '',
    level: '',
    father_names: '',
    father_phone: '',
    father_occupation: '',
    mother_names: '',
    mother_phone: '',
    mother_occupation: '',
};