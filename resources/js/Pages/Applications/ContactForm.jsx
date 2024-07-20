import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

import { FormActionButtons } from "@/Components/FormActionButtons";
import InputPhoneType from "@/Components/InputPhoneType";
import { Loading } from "@/Components/Loading";
import { FormHeader } from "@/Components/FormHeader";
import { required_fields, desc, contact_fields, } from "@/Helpers/Contact.Form-Statics";
import { fieldVerifier } from "@/Helpers/Form.Verifier";
import { FormSubmitted } from "@/Components/FormSubmitted";
import { useEffect } from "react";
import { Alert } from "@/Components/Alerts/Alert";
import { locale, addLocale } from "primereact/api";
import { Calendar } from "primereact/calendar";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { format } from 'date-fns';


const ContactForm = ({ levels }) => {
    const [errorHandling, setErrorHandling] = useState({});
    const { data, setData, post, processing, errors, reset } = useForm(contact_fields);
    const [sended, setSended] = useState(false);
    const [alert, setAlert] = useState(null);

    
    addLocale("es", {
        firstDayOfWeek: 1,
        dayNames: [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],
        monthNamesShort: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
        ],
        today: "Hoy",
        clear: "Limpiar",
    });

    const handleChanges = (e) => {
        
        if(e.target.id === 'birth_date'){
            setData(e.target.id, format(new Date(e.target.value), 'yyyy-MM-dd'));
            return; 
        }

        setData(e.target.id, e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFields = fieldVerifier(
            data,
            required_fields,
            setErrorHandling
        );


        if (Object.keys(emptyFields).length === 0) {
            post(route("contact.create"), {
                onSuccess: () => {
                    setSended(true);
                    reset();
                },
                onError: (error) => {
                    setAlert(error);
                },
            });
        }
    };
  
    return (
        <div className="bg-contact-form bg-no-repeat bg-cover bg-center py-6 min-h-screen">
            <Alert alerta={alert} setAlert={setAlert} />

            <FormHeader
                title="CONTACTO ASPIRANTES"
                desc={sended ? "" : desc}
                variant="contact"
            />
            {!sended ? (
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto bg-white bg-opacity-85 p-5 h-full">
                        <label
                            htmlFor="first_name"
                            className="font-bold text-sm"
                        >
                            Primer nombre <span>*</span>
                            <InputText
                                id="first_name"
                                name="first_name"
                                type="text"
                                value={data?.first_name}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese el primer nombre"
                            />
                            {errorHandling?.first_name && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="second_name"
                            className="font-bold text-sm"
                        >
                            Segundo nombre
                            <InputText
                                id="second_name"
                                name="second_name"
                                value={data?.second_name}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese el segundo nombre"
                            />
                            {errorHandling?.second_name && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="fLast_name"
                            className="font-bold text-sm"
                        >
                            Primer Apellido <span>*</span>
                            <InputText
                                id="fLast_name"
                                name="fLast_name"
                                value={data?.fLast_name}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese el primer apellido"
                            />
                            {errorHandling?.fLast_name && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="sLast_name"
                            className="font-bold text-sm"
                        >
                            Segundo Apellido
                            <InputText
                                id="sLast_name"
                                name="sLast_name"
                                value={data?.sLast_name}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese el segundo apellido"
                            />
                            {errorHandling?.sLast_name && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label htmlFor="id_card" className="font-bold text-sm">
                            Número de cédula <span>*</span>

                            <InputMask
                                id="id_card"
                                name="id_card"
                                value={data?.id_card}
                                required
                                type="tel"
                                className="rounded-md w-full "
                                onChange={handleChanges}
                                mask="999999999-9"
                                placeholder="Ingrese el numero de cedula"
                                pattern="[0-9]{9}-[0-9]{1}"
                            />

                            {errorHandling?.id_card && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="birth_date"
                            className="font-bold text-sm"
                        >
                            Fecha de nacimiento <span>*</span>
                            <Calendar
                                id="birth_date"
                                name="birth_date"
                                dateFormat="yy-mm-dd"
                                value={data.birth_date ? new Date(data.birth_date) : null}
                                type="date"
                                required
                                locale="es"
                                maxDate={new Date()}
                                className="rounded-md w-full placeholder:font-normal h-[40px] p-0 overflow-hidden"
                                inputClassName="border-none outline-none h-full"
                                onChange={handleChanges}
                                placeholder="Ingrese la fecha de nacimiento"
                            />
                            {errorHandling?.birth_date && (
                                <span className="text-red-500 text-xs">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label htmlFor="phone" className="font-bold text-sm">
                            Número de teléfono <span>*</span>


                            <InputPhoneType
                                tel_id="phone"
                                tel_name="phone"
                                tel_value={data?.phone}
                                required
                                placeholder="Ingrese el número de teléfono"

                                type_id="phone_type_id"
                                type_name="phone_type_id"
                                type_value={data?.phone_type_id}

                                className="rounded-md w-full"
                                onChange={handleChanges}
                            />

                            {errorHandling?.phone && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label htmlFor="email" className="font-bold text-sm">
                            Correo electrónico <span>*</span>
                            <InputText
                                id="email"
                                name="email"
                                type="email"
                                value={data?.email}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese el correo electrónico"
                            />
                            {errorHandling?.email && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="last_institution"
                            className="font-bold text-sm"
                        >
                            Nombre de la Institución Educativa de donde proviene
                            el alumno <span>*</span>
                            <InputText
                                id="last_institution"
                                name="last_institution"
                                value={data?.last_institution}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese el nombre de la institución educativa"
                            />
                            {errorHandling?.last_institution && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="behavior_qualification"
                            className="font-bold text-sm"
                        >
                            Calificación comportamental del alumno{" "}
                            <span>*</span>
                            <InputText
                                id="behavior_qualification"
                                name="behavior_qualification"
                                value={data?.behavior_qualification}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese la calificación comportamental del alumno"
                            />
                            {errorHandling?.behavior_qualification && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label htmlFor="address" className="font-bold text-sm">
                            Dirección <span>*</span>
                            <InputText
                                id="address"
                                name="address"
                                value={data?.address}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese la dirección"
                            />
                            {errorHandling?.address && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label className="font-bold text-sm">
                            Año o nivel al que desea aplicar <span>*</span>
                            <Dropdown
                                optionValue="id"
                                optionLabel="description"
                                placeholder="Seleccione un nivel"
                                id="level_id"
                                name="level_id"
                                value={data?.level_id}
                                onChange={handleChanges}
                                options={levels || []}
                               
                                filter
                                className="flex items-center rounded-md border h-[42px] border-gray-500 flex-grow"
                            />
                            {errorHandling?.level_id && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="father_names"
                            className="font-bold text-sm"
                        >
                            Nombres del Padre
                            <InputText
                                id="father_names"
                                name="father_names"
                                value={data?.father_names}
                                required
                                className="rounded-md w-full "
                                onChange={handleChanges}
                                placeholder="Ingrese los nombres del padre"
                            />
                            {errorHandling?.father_names && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="father_id_card"
                            className="font-bold text-sm"
                        >
                            Cedula del Padre <span>*</span>
                            <InputMask
                                id="father_id_card"
                                name="father_id_card"
                                value={data?.father_id_card}
                                required
                                type="tel"
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                mask="999999999-9"
                                placeholder="Ingrese la cedula del padre"
                                pattern="[0-9]{9}-[0-9]{1}"
                            />
                            {errorHandling?.father_id_card && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="father_phone"
                            className="font-bold text-sm"
                        >
                            Número de teléfono del Padre <span>*</span>

                            <InputPhoneType
                                tel_id="father_phone"
                                tel_name="father_phone"
                                tel_value={data?.father_phone}
                                required
                                placeholder="Ingrese el número de teléfono del padre"

                                type_id="father_phone_type_id"
                                type_name="father_phone_type_id"
                                type_value={data?.father_phone_type_id}

                                className="rounded-md w-full"
                                onChange={handleChanges}
                            />
                            {errorHandling?.father_phone && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="father_occupation"
                            className="font-bold text-sm"
                        >
                            Actividad económica del Padre <span>*</span>
                            <InputText
                                id="father_occupation"
                                name="father_occupation"
                                value={data?.father_occupation}
                                required
                                className="rounded-md w-full "
                                onChange={handleChanges}
                                placeholder="Ingrese la actividad económica del padre"
                            />
                            {errorHandling?.father_occupation && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="mother_names"
                            className="font-bold text-sm"
                        >
                            Nombres de la Madre <span>*</span>
                            <InputText
                                id="mother_names"
                                name="mother_names"
                                value={data?.mother_names}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese los nombres de la madre"
                            />
                            {errorHandling?.mother_names && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="mother_id_card"
                            className="font-bold text-sm"
                        >
                            Cedula de la Madre <span>*</span>
                            <InputMask
                                id="mother_id_card"
                                name="mother_id_card"
                                value={data?.mother_id_card}
                                required
                                type="tel"
                                className="rounded-md w-full "
                                onChange={handleChanges}
                                mask="999999999-9"
                                placeholder="Ingrese la cedula del padre"
                                pattern="[0-9]{9}-[0-9]{1}"
                            />
                            {errorHandling?.mother_id_card && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="mother_phone"
                            className="font-bold text-sm"
                        >
                            Número de teléfono de la Madre <span>*</span>
                            <InputPhoneType
                                tel_id="mother_phone"
                                tel_name="mother_phone"
                                tel_value={data?.mother_phone}
                                required
                                placeholder="Ingrese el número de teléfono de la madre"

                                type_id="mother_phone_type_id"
                                type_name="mother_phone_type_id"
                                type_value={data?.mother_phone_type_id}

                                className="rounded-md w-full"
                                onChange={handleChanges}
                            />
                            {errorHandling?.mother_phone && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <label
                            htmlFor="mother_occupation"
                            className="font-bold text-sm"
                        >
                            Actividad económica de la Madre <span>*</span>
                            <InputText
                                id="mother_occupation"
                                name="mother_occupation"
                                value={data?.mother_occupation}
                                required
                                className="rounded-md w-full"
                                onChange={handleChanges}
                                placeholder="Ingrese la actividad económica de la madre"
                            />
                            {errorHandling?.mother_occupation && (
                                <span className="text-red-500 text-sm">
                                    Este campo es requerido
                                </span>
                            )}
                        </label>

                        <div className="w-full flex justify-end md:col-span-2">
                            <FormActionButtons />
                        </div>
                    </div>
                </form>
            ) : (
                <FormSubmitted title={title} message={message} />
            )}

            <Loading message="Enviando" status={processing} />
        </div>
    );
};

export default ContactForm;

const title = "¡Hemos recibido tu solicitud de contacto!";
const message = "Te estaremos contactando en 24 horas";
