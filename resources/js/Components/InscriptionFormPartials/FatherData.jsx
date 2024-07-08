import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MainFormFieldset } from "./MainFormFieldset";
import PropTypes from 'prop-types';
import { Calendar } from "primereact/calendar";




export const FatherData = ({ data, setData, errorHandling, information }) => {
    const handleFatherData = (e) => {
        setData({ ...data, father_data: { ...data.father_data, [e.target.name]: e.target.value } })
    }
    return (
        <MainFormFieldset
            legend="Datos familiares"
            description="Datos del Padre">


            <label htmlFor="first_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Primer nombre <span>*</span>
                <InputText
                    id="first_name"
                    name="first_name"
                    value={data?.father_data?.first_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFatherData}
                    placeholder="Ingrese el primer nombre"
                />
                {errorHandling?.first_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}

            </label>

            <label htmlFor="second_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo nombre
                <InputText
                    id="second_name"
                    name="second_name"
                    value={data?.father_data?.second_name}
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFatherData}
                    placeholder="Ingrese el segundo nombre"
                />
            </label>

            <label htmlFor="fLast_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Primer Apellido <span>*</span>
                <InputText
                    id="fLast_name"
                    name="fLast_name"
                    value={data?.father_data?.fLast_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFatherData}
                    placeholder="Ingrese el primer apellido"
                />
                {errorHandling?.fLast_name && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="sLast_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo Apellido
                <InputText
                    id="sLast_name"
                    name="sLast_name"
                    value={data?.father_data?.sLast_name}
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFatherData}
                    placeholder="Ingrese el segundo apellido"
                />
            </label>

            <label htmlFor="birth_date" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Fecha de nacimiento <span>*</span>
                <Calendar
                    inputId="birth_date"
                    name="birth_date"
                    value={data?.father_data?.birth_date}
                    type='date'
                    required
                    className='rounded-md w-full placeholder:font-normal h-[40px] p-0 overflow-hidden'
                    inputClassName="border-none outline-none h-full"
                    onChange={handleFatherData}
                    placeholder="Ingrese la fecha de nacimiento"
                />
                {errorHandling?.birth_date && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="id_card" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Número de cédula <span>*</span>
                <InputText
                    id="id_card"
                    name="id_card"
                    pattern="[0-9]{9}-[0-9]"
                    value={data?.father_data?.id_card}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFatherData}
                    placeholder="Ingrese el número de cédula"
                />
                {errorHandling?.id_card && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>
            <label htmlFor="marital_status_id" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Estado civil <span>*</span>
                <Dropdown
                    inputId="marital_status_id"
                    name="marital_status_id"
                    value={data?.father_data?.marital_status_id}
                    onChange={handleFatherData}
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
                    inputId="education_level_id"
                    name="education_level_id"
                    value={data?.father_data?.education_level_id}
                    onChange={handleFatherData}
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
                    value={data?.father_data?.profession}
                    type='text'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFatherData}
                    placeholder="Ingrese la fecha de nacimiento"
                />
                {errorHandling?.profession && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="work_place" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Lugar de trabajo <span>*</span>
                <InputText
                    id="work_place"
                    name="work_place"
                    value={data?.father_data?.work_place}
                    type='text'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFatherData}
                    placeholder="Ingrese la fecha de nacimiento"
                />
                {errorHandling?.work_place && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="number" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Teléfono de contacto <span>*</span>
                <InputText
                    id="number"
                    name="number"
                    value={data?.father_data?.number}
                    type='text'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFatherData}
                    placeholder="Ingrese la fecha de nacimiento"
                />
                {errorHandling?.number && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="email" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Correo Electrónico <span>*</span>
                <InputText
                    id="email"
                    name="email"
                    value={data?.father_data?.email}
                    type='text'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFatherData}
                    placeholder="Ingrese la fecha de nacimiento"
                />
                {errorHandling?.email && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

        </MainFormFieldset>
    )
}
FatherData.propTypes = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired
}