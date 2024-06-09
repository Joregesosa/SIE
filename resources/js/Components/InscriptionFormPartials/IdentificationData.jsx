import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MainFormFieldset } from "./MainFormFieldset";
import PropTypes from 'prop-types';
import { useEffect } from "react";

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
export const IdentificationData = ({ data, setData }) => {

    const handleIdentificationData = (e) => {
        setData({ ...data, identification_data: { ...data.identification_data, [e.target.name]: e.target.value } })
    }
    useEffect(() => {
        console.log(data.identification_data)
    }, [data.identification_data])

    return (
        <MainFormFieldset legend="DATOS DE IDENTIFICACIÓN/INFORMACIÓN ESTUDIANTE">

            <label  className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Año Educativo al que ingresa el alumno
                <Dropdown
                    id="level"
                    name="level"
                    value={data?.identification_data?.level}
                    onChange={handleIdentificationData}
                    options={courseLevels}
                    optionLabel="level"
                    optionValue="id"
                    placeholder="Seleccione un nivel"
                    className="flex items-center border h-[42px] border-gray-500 flex-grow"
                    filter
                />
            </label>

            <label htmlFor="first_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Primer nombre <span>*</span>
                <InputText
                    id="first_name"
                    name="first_name"
                    value={data?.identification_data?.first_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el primer nombre"
                />
            </label>

            <label htmlFor="second_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo nombre
                <InputText
                    id="second_name"
                    name="second_name"
                    value={data?.identification_data?.second_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el segundo nombre"
                />
            </label>

            <label htmlFor="fLast_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Primer Apellido <span>*</span>
                <InputText
                    id="fLast_name"
                    name="fLast_name"
                    value={data?.identification_data?.fLast_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el primer apellido"
                />

            </label>

            <label htmlFor="sLast_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo Apellido
                <InputText
                    id="sLast_name"
                    name="sLast_name"
                    value={data?.identification_data?.sLast_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el segundo apellido"
                />
            </label>

            <label htmlFor="birth_date" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Fecha de nacimiento <span>*</span>
                <InputText
                    id="birth_date"
                    name="birth_date"
                    value={data?.identification_data?.birth_date}
                    type='date'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese la fecha de nacimiento"
                />
            </label>

            <label htmlFor="birth_day_place" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Lugar de nacimiento <span>*</span>
                <InputText
                    id="birth_day_place"
                    name="birth_day_place"
                    value={data?.identification_data?.birth_day_place}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el lugar de nacimiento"
                />
            </label>

            <label htmlFor="id_card" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Número de cédula <span>*</span>
                <InputText
                    id="id_card"
                    name="id_card"
                    value={data?.identification_data?.id_card}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el número de cédula"
                />
            </label>

            <label htmlFor="id_card" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Edad del alumno <span>*</span>
                <InputText
                    id="id_card"
                    name="id_card"
                    value={data?.identification_data?.id_card}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese la edad del alumno"
                />
            </label>

            <label htmlFor="address_street" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Dirección del domicilio (calles) <span>*</span>
                <InputText
                    id="address_street"
                    name="address_street"
                    value={data?.identification_data?.address_street}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese la dirección"
                />
            </label>

            <label htmlFor="sector" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Sector <span>*</span>
                <InputText
                    id="sector"
                    name="sector"
                    value={data?.identification_data?.sector}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese la dirección"
                />
            </label>

            <label htmlFor="number" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Número de teléfono <span>*</span>
                <InputText
                    id="number"
                    name="number"
                    value={data?.identification_data?.number}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el número de teléfono"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
            </label>

            <label htmlFor="reference" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Referencia <span>*</span>
                <InputText
                    id="reference"
                    name="reference"
                    value={data?.identification_data?.reference}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el número de teléfono"
                />
            </label>

        </MainFormFieldset>
    )
}
IdentificationData.prototype = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired
}