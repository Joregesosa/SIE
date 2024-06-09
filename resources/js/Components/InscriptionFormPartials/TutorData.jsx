import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MainFormFieldset } from "./MainFormFieldset";
import PropTypes from 'prop-types';
const instructionLevelOptions = [
    { label: 'Educación Primaria', id: '1' },
    { label: 'Educación Secundaria', id: '2' },
    { label: 'Educación Técnica o 4', id: '3' },
    { label: 'Educación Superior', id: '5' },
    { label: 'Educación Profesional', id: '6' }
];
const maritalStatusOptions = [
    { label: 'Soltero/a', id: '1' },
    { label: 'Casado/a', id: '2' },
    { label: 'Separado/a', id: '3' },
    { label: 'Divorciado/a', id: '4' },
    { label: 'Viudo/a', id: '5' },
    { label: 'Conviviente', id: '6' },
    { label: 'Uniones civiles', id: '7' }
];

export const TutorData = ({ data, setData }) => {
    const handleTutorData = (e) => {
        setData({ ...data, tutor_data: { ...data.tutor_data, [e.target.name]: e.target.value } })
    }
    return (
        <MainFormFieldset
            legend="Datos familiares"
            description="Datos del Representante (En caso de no ser uno de los progenitores) caso contrario escriba nada el los casilleros">

            <label htmlFor="first_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Primer nombre <span>*</span>
                <InputText
                    id="first_name"
                    name="first_name"
                    value={data?.tutor_data?.first_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleTutorData}
                    placeholder="Ingrese el primer nombre"
                />
            </label>

            <label htmlFor="second_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo nombre
                <InputText
                    id="second_name"
                    name="second_name"
                    value={data?.tutor_data?.second_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleTutorData}
                    placeholder="Ingrese el segundo nombre"
                />
            </label>

            <label htmlFor="fLast_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Primer Apellido <span>*</span>
                <InputText
                    id="fLast_name"
                    name="fLast_name"
                    value={data?.tutor_data?.fLast_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleTutorData}
                    placeholder="Ingrese el primer apellido"
                />
            </label>

            <label htmlFor="sLast_name" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Segundo Apellido
                <InputText
                    id="sLast_name"
                    name="sLast_name"
                    value={data?.tutor_data?.sLast_name}
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleTutorData}
                    placeholder="Ingrese el segundo apellido"
                />
            </label>

            <label htmlFor="birth_date" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Fecha de nacimiento <span>*</span>
                <InputText
                    id="birth_date"
                    name="birth_date"
                    value={data?.tutor_data?.birth_date}
                    type='date'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleTutorData}
                    placeholder="Ingrese la fecha de nacimiento"
                />
            </label>

            <label htmlFor="marital_status" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Estado civil <span>*</span>
                <Dropdown
                    id="marital_status"
                    name="marital_status"
                    value={data?.tutor_data?.marital_status}
                    onChange={handleTutorData}
                    options={maritalStatusOptions}
                    optionLabel="label"
                    optionValue="id"
                    placeholder="Seleccione un estado civil"
                    filter
                    className="flex items-center border h-[42px] border-gray-500 flex-grow" />
            </label>

            <label htmlFor="instruction_level" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Nivel de Instrucción <span>*</span>
                <Dropdown
                    id="instruction_level"
                    name="instruction_level"
                    value={data?.tutor_data?.instruction_level}
                    onChange={handleTutorData}
                    options={instructionLevelOptions}
                    optionLabel="label"
                    optionValue="id"
                    placeholder="Seleccione un nivel de instrucción"
                    filter
                    className="flex items-center border h-[42px] border-gray-500 flex-grow" />
            </label>

            <label htmlFor="profession" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Profesión/ocupación <span>*</span>
                <InputText
                    id="profession"
                    name="profession"
                    value={data?.tutor_data?.profession}
                    type='text'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleTutorData}
                    placeholder="Ingrese la profesión/ocupación"
                />
            </label>

            <label htmlFor="work_place" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Lugar de trabajo <span>*</span>
                <InputText
                    id="work_place"
                    name="work_place"
                    value={data?.tutor_data?.work_place}
                    type='text'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleTutorData}
                    placeholder="Ingrese el lugar de trabajo"
                />
            </label>

            <label htmlFor="number" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Teléfono de contacto <span>*</span>
                <InputText
                    id="number"
                    name="number"
                    value={data?.tutor_data?.number}
                    type='text'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleTutorData}
                    placeholder="Ingrese el número de teléfono"
                />
            </label>

            <label htmlFor="email" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Correo Electrónico <span>*</span>
                <InputText
                    id="email"
                    name="email"
                    value={data?.tutor_data?.email}
                    type='text'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleTutorData}
                    placeholder="Ingrese el correo electrónico"
                />
            </label>

        </MainFormFieldset>
    )
}

TutorData.propTypes = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired
}