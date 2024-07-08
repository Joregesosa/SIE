import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MainFormFieldset } from "./MainFormFieldset";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { Calendar } from "primereact/calendar";


export const IdentificationData = ({ data, setData, errorHandling , information, disable }) => {
 
    
    const handleIdentificationData = (e) => {
        setData({ ...data, identification_data: { ...data.identification_data, [e.target.name]: e.target.value } })
    }
 
    return (
        <MainFormFieldset legend="DATOS DE IDENTIFICACIÓN/INFORMACIÓN ESTUDIANTE">

            <label htmlFor="level_id"  className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Año Educativo al que ingresa el alumno
                <Dropdown

                    disabled={true}
                    id="id"
                    inputId="level_id"
                    name="level_id"
                    value={data?.identification_data?.level_id}
                    onChange={handleIdentificationData}
                    options={information.levels}
                    optionLabel="description"
                    optionValue="id"
                    placeholder="Seleccione un nivel"
                    className="flex items-center border h-[42px] border-gray-500 flex-grow"
                    filter
                />
                {errorHandling?.level_id && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

             <label htmlFor="first_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Primer nombre <span>*</span>
                <InputText
                    disabled={!disable}
                    id="first_name"
                    name="first_name"
                    value={data?.identification_data?.first_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el primer nombre"
                />
                {errorHandling?.first_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

           <label htmlFor="second_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo nombre
                <InputText  
                    disabled
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
                    disabled
                    id="fLast_name"
                    name="fLast_name"
                    value={data?.identification_data?.fLast_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el primer apellido"
                />
                {errorHandling?.fLast_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="sLast_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo Apellido
                <InputText
                    disabled
                    id="sLast_name"
                    name="sLast_name"
                    value={data?.identification_data?.sLast_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el segundo apellido"
                />
            </label>

            <label htmlFor="id_card" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Número de cédula <span>*</span>
                <InputText
                disabled
                    id="id_card"
                    name="id_card"
       
                    pattern="[0-9]{9}-[0-9]"
                    value={data?.identification_data?.id_card}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el número de cédula"
                />
                    {errorHandling?.id_card && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

        
            <label htmlFor="birth_date" className="mt-2 font-bold text-xs col-span-2 md:col-span-1 ">
                Fecha de nacimiento <span>*</span>
                <Calendar
                    inputId="birth_date"
                    name="birth_date"
                    value={data?.identification_data?.birth_date}
                    dateFormat="yy/mm/dd"
                    required
                    className='rounded-md w-full placeholder:font-normal h-[40px] p-0 overflow-hidden border border-gray-500'
                    inputClassName="border-none outline-none h-full"
                    onChange={handleIdentificationData}
                    placeholder="Ingrese la fecha de nacimiento"
                />
                    {errorHandling?.birth_date && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="birth_place" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Lugar de nacimiento <span>*</span>
                <InputText
                    id="birth_place"
                    name="birth_place"
                    value={data?.identification_data?.birth_place}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleIdentificationData}
                    placeholder="Ingrese el lugar de nacimiento"
                />
                    {errorHandling?.birth_place && <span className="text-red-500 text-xs">Este campo es requerido</span>}
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
                {errorHandling?.address_street && <span className="text-red-500 text-xs">Este campo es requerido</span>}
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
                {errorHandling?.sector && <span className="text-red-500 text-xs">Este campo es requerido</span>}
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
                {errorHandling?.number && <span className="text-red-500 text-xs">Este campo es requerido</span>}
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
                {errorHandling?.reference && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>  

        </MainFormFieldset>
    )
}
IdentificationData.prototype = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
    errorHandling: PropTypes.object.isRequired,
    information: PropTypes.object.isRequired
}