import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useForm } from '@inertiajs/react';
import { Dropdown } from 'primereact/dropdown';
import { FormActionButtons } from '@/Components/FormActionButtons';
import '../../css/formbg.css';
const courseLevels = [
    { id: 1, level: "Nivel Inicial 1" },
    { id: 2, level: "Nivel Inicial 2" },
    { id: 3, level: "Primer Año de Educación Básica (1° EGB)" },
    { id: 4, level: "Segundo Año de Educación Básica (2° EGB)" },
    { id: 5, level: "Tercer Año de Educación Básica (3° EGB)" },
    { id: 6, level: "Cuarto Año de Educación Básica (4° EGB)" },
    { id: 7, level: "Quinto Año de Educación Básica (5° EGB)" },
    { id: 8, level: "Sexto Año de Educación Básica (6° EGB)" },
    { id: 9, level: "Séptimo Año de Educación Básica (7° EGB)" },
    { id: 10, level: "Octavo Año de Educación Básica (8° EGB)" },
    { id: 11, level: "Noveno Año de Educación Básica (9° EGB)" },
    { id: 12, level: "Décimo Año de Educación Básica (10° EGB)" },
    { id: 13, level: "Primer Año de Bachillerato (1° BGU)" },
    { id: 14, level: "Segundo Año de Bachillerato (2° BGU)" },
    { id: 15, level: "Tercer Año de Bachillerato (3° BGU)" },
];


const ContactForm = () => {
    const cleanUser = {

    }
    const { data, setData, post, processing, errors, reset } = useForm(cleanUser);


    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('new.formcontact'));
    };

    return (
        <div className='form_bg'>
            <header className='bg-[#112757] text-gray-100'>
                <div className='md:flex md:items-center  max-w-screen-lg mx-auto pt-5 md:gap-6'>
                    <figure className='w-44 h-44 mx-auto md:mx-0 flex-shrink-0'>
                        <img loading='lazy' src="https://lists.office.com/Images/9074fa55-8f43-42bd-9a40-0d7a38b9c66e/0fd61129-93f5-4eca-8c45-3e318953accd/T8REH8MB6WNIDPEDE9XWC501E7/d7cfebf9-81be-4890-823d-22781aa93638" alt="company logo" className='w-full' />
                    </figure>
                    <h1 className='text-center md:text-left md:text-4xl py-2 text-2xl font-semibold'>Contactos aspirantes</h1>
                </div>
                <p className='px-3 py-5 mx-auto max-w-screen-lg'>
                    Bienvenidos a la Unidad Educativa Thomas Russell Crampton, un espacio donde la innovación y la excelencia educativa se encuentran para forjar el futuro de las nuevas generaciones. En nuestra institución, nos enorgullece ofrecer un entorno de aprendizaje único, diseñado para inspirar la curiosidad, el pensamiento crítico y la pasión por el conocimiento en cada uno de nuestros estudiantes. Al aspirar a formar parte de nuestra comunidad, te embarcas en un viaje educativo sin precedentes, donde cada experiencia está cuidadosamente elaborada para expandir tus horizontes y desafiar tus límites. Aquí, en Thomas Russell Crampton, no solo te preparamos para afrontar los desafíos del mañana, sino que te equipamos con las herramientas necesarias para ser un líder innovador y un ciudadano global responsable. Te invitamos a unirte a nosotros en esta aventura transformadora, donde tu potencial no conoce límites y tu pasión por aprender se enciende con cada nuevo día.
                </p>
            </header>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 mx-auto  '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto bg-white bg-opacity-75 p-5 h-full'>
                    <div>
                        <label htmlFor="firstName" className="font-bold text-xs">
                            Primer nombre <span>*</span>
                        </label>
                        <InputText
                            id="first_name"
                            value={data?.first_name}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('first_name', e.target.value)}
                            placeholder="Ingrese el primer nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="second_Name" className="font-bold text-xs">
                            Segundo nombre
                        </label>
                        <InputText
                            id="second_Name"
                            value={data?.second_Name}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('second_Name', e.target.value)}
                            placeholder="Ingrese el segundo nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName" className="font-bold text-xs">
                            Primer Apellido <span>*</span>
                        </label>
                        <InputText
                            id="fLast_name"
                            value={data?.fLast_name}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('fLast_name', e.target.value)}
                            placeholder="Ingrese el primer apellido"
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName" className="font-bold text-xs">
                            Segundo Apellido
                        </label>
                        <InputText
                            id="sLast_name"
                            value={data?.sLast_name}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('sLast_name', e.target.value)}
                            placeholder="Ingrese el segundo apellido"
                        />
                    </div>
                    <div>
                        <label htmlFor="id_card" className="font-bold text-xs">
                            Número de cédula <span>*</span>
                        </label>
                        <InputText
                            id="id_card"
                            value={data?.id_card}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('id_card', e.target.value)}
                            placeholder="Ingrese el número de cédula"
                        />
                    </div>
                    <div>
                        <label htmlFor="id_card" className="font-bold text-xs">
                            Edad del alumno <span>*</span>
                        </label>
                        <InputText
                            id="id_card"
                            value={data?.id_card}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('id_card', e.target.value)}
                            placeholder="Ingrese la edad del alumno"
                        />
                    </div>
                    <div>
                        <label htmlFor="number" className="font-bold text-xs">
                            Número de teléfono <span>*</span>
                        </label>
                        <InputText
                            id="number"
                            value={data?.number}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('number', e.target.value)}
                            placeholder="Ingrese el número de teléfono"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-bold text-xs">
                            Correo electrónico <span>*</span>
                        </label>
                        <InputText
                            id="number"
                            value={data?.email}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Ingrese el correo electrónico"
                        />
                    </div>
                    <div>
                        <label htmlFor="last_institution" className="font-bold text-xs">
                            Nombre de la Institución Educativa de donde proviene el alumno <span>*</span>
                        </label>
                        <InputText
                            id="last_institution"
                            value={data?.last_institution}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('last_institution', e.target.value)}
                            placeholder="Ingrese el nombre de la institución educativa"
                        />
                    </div>
                    <div>
                        <label htmlFor="behavior_qualification" className="font-bold text-xs">
                            Calificación comportamental del alumno <span>*</span>
                        </label>
                        <InputText
                            id="behavior_qualification"
                            value={data?.behavior_qualification}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('last_institution', e.target.value)}
                            placeholder="Ingrese la calificación comportamental del alumno"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="font-bold text-xs">
                            Dirección <span>*</span>
                        </label>
                        <InputText
                            id="behavior_qualification"
                            value={data?.address}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('address', e.target.value)}
                            placeholder="Ingrese la dirección"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="level" className="font-bold text-xs">
                            Año o nivel al que desea aplicar
                        </label>
                        <Dropdown
                            value={data?.level}
                            onChange={(e) => setData('level', (e.target.value))}
                            options={courseLevels}
                            optionLabel="level"
                            placeholder="Seleccione un nivel"
                            filter
                            className="flex items-center border h-[42px] border-gray-500 flex-grow"
                        />
                    </div>
                    <div>
                        <label htmlFor="father_names" className="font-bold text-xs">
                            Nombres del Padre
                        </label>
                        <InputText
                            id="father_names"
                            value={data?.father_names}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('father_names', e.target.value)}
                            placeholder="Ingrese los nombres del padre"
                        />
                    </div>
                    <div>
                        <label htmlFor="father_phone" className="font-bold text-xs">
                            Número de teléfono del Padre <span>*</span>
                        </label>
                        <InputText
                            id="father_phone"
                            value={data?.father_phone}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('father_phone', e.target.value)}
                            placeholder="Ingrese el número de teléfono del padre"
                        />
                    </div>
                    <div>
                        <label htmlFor="father_occupation" className="font-bold text-xs">
                            Actividad económica del Padre <span>*</span>
                        </label>
                        <InputText
                            id="father_occupation"
                            value={data?.father_occupation}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('father_occupation', e.target.value)}
                            placeholder="Ingrese la actividad económica del padre"
                        />
                    </div>
                    <div>
                        <label htmlFor="mother_names" className="font-bold text-xs">
                            Nombres de la Madre <span>*</span>
                        </label>
                        <InputText
                            id="mother_names"
                            value={data?.mother_names}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('mother_names', e.target.value)}
                            placeholder="Ingrese los nombres de la madre"
                        />
                    </div>
                    <div>
                        <label htmlFor="mother_phone" className="font-bold text-xs">
                            Número de teléfono de la Madre <span>*</span>
                        </label>
                        <InputText
                            id="mother_phone"
                            value={data?.mother_phone}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('mother_phone', e.target.value)}
                            placeholder="Ingrese el número de teléfono de la madre"
                        />
                    </div>
                    <div>
                        <label htmlFor="mother_occupation" className="font-bold text-xs">
                            Actividad económica de la Madre <span>*</span>
                        </label>
                        <InputText
                            id="mother_occupation"
                            value={data?.mother_occupation}
                            required
                            className='rounded-md w-full'
                            onChange={(e) => setData('mother_occupation', e.target.value)}
                            placeholder="Ingrese la actividad económica de la madre"
                        />
                    </div >
                    <div className='w-full flex justify-end md:col-span-2'>
                        <FormActionButtons />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;