import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import PropTypes from 'prop-types';
import { MainFormFieldset } from "./MainFormFieldset";
import { info } from "autoprefixer";



export const MotherData = ({ data, setData, errorHandling, information }) => {
    const handleMotherData = (e) => {
        setData({ ...data, mother_data: { ...data.mother_data, [e.target.name]: e.target.value } })
    }
    return (
        <MainFormFieldset
            legend="Datos familiares"
            description="Datos de la Madre">

            <label htmlFor="first_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Primer nombre <span className=" w-full">*</span>
                <InputText
                    id="first_name"
                    name="first_name"
                    value={data?.mother_data?.first_name}
                    required
                    className='rounded-md w-full'
                    onChange={handleMotherData}
                    placeholder="Ingrese el primer nombre"
                />
                {errorHandling?.first_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="second_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo nombre
                <InputText
                    id="second_name"
                    name="second_name"
                    value={data?.mother_data?.second_name}
                    className='rounded-md w-full'
                    onChange={handleMotherData}
                    placeholder="Ingrese el segundo nombre"
                />

            </label>

            <label htmlFor="fLast_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Primer Apellido <span>*</span>
                <InputText
                    id="fLast_name"
                    name="fLast_name"
                    value={data?.mother_data?.fLast_name}
                    required
                    className='rounded-md w-full'
                    onChange={handleMotherData}
                    placeholder="Ingrese el primer apellido"
                />
                {errorHandling?.fLast_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="sLast_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo Apellido
                <InputText
                    id="sLast_name"
                    name="sLast_name"
                    value={data?.mother_data?.sLast_name}
                    className='rounded-md w-full'
                    onChange={handleMotherData}
                    placeholder="Ingrese el segundo apellido"
                />
            </label>

            <label htmlFor="birth_date" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Fecha de nacimiento <span>*</span>
                <InputText
                    id="birth_date"
                    name="birth_date"
                    value={data?.mother_data?.birth_date}
                    type='date'
                    required
                    className='rounded-md w-full'
                    onChange={handleMotherData}
                    placeholder="Ingrese la fecha de nacimiento"
                />
                {errorHandling?.birth_date && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>
            <label htmlFor="id_card" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Número de cédula <span>*</span>
                <InputText
                    id="id_card"
                    name="id_card"
                    value={data?.mother_data?.id_card}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleMotherData}
                    placeholder="Ingrese el número de cédula"
                />
                {errorHandling?.id_card && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>
            <label htmlFor="marital_status_id" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Estado civil <span>*</span>
                <Dropdown
                    value={data?.mother_data?.marital_status_id}
                    inputId="marital_status_id"
                    name="marital_status_id"
                    onChange={handleMotherData}
                    options={information.marital_status}
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Seleccione un estado civil"
                    filter
                    className="flex items-center border h-[42px] border-gray-500 flex-grow" />
                {errorHandling?.marital_status_id && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>



            <label htmlFor="education_level_id" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Nivel de Instrucción <span>*</span>
                <Dropdown
                    value={data?.mother_data?.education_level_id}
                    inputId="education_level_id"
                    name="education_level_id"
                    onChange={handleMotherData}
                    options={information.education_levels}
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Seleccione un nivel de instrucción"
                    filter
                    className="flex items-center border h-[42px] border-gray-500 flex-grow" />
                {errorHandling?.education_level_id && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="profession" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Profesión/ocupación <span>*</span>
                <InputText
                    id="profession"
                    name="profession"
                    value={data?.mother_data?.profession}
                    type='text'
                    required
                    className='rounded-md w-full'
                    onChange={handleMotherData}
                    placeholder="Ingrese la profesión/ocupación"
                />
                {errorHandling?.profession && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="work_place" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Lugar de trabajo <span>*</span>
                <InputText
                    id="work_place"
                    name="work_place"
                    value={data?.mother_data?.work_place}
                    type='text'
                    required
                    className='rounded-md w-full'
                    onChange={handleMotherData}
                    placeholder="Ingrese el lugar de trabajo"
                />
                {errorHandling?.work_place && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="number" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Teléfono de contacto <span>*</span>
                <InputText
                    id="number"
                    name="number"
                    value={data?.mother_data?.number}
                    type='text'
                    required
                    className='rounded-md w-full'
                    onChange={handleMotherData}
                    placeholder="Ingrese el número de teléfono"
                />
                {errorHandling?.number && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>


            <label htmlFor="email" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Correo Electrónico <span>*</span>
                <InputText
                    id="email"
                    name="email"
                    value={data?.mother_data?.email}
                    type='text'
                    required
                    className='rounded-md w-full'
                    onChange={handleMotherData}
                    placeholder="Ingrese el correo electrónico"
                />
                {errorHandling?.email && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

        </MainFormFieldset>
    )
}

MotherData.prototype = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired
}