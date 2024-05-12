import { InputText } from "primereact/inputtext";
import PropTypes from 'prop-types';
import { MainFormFieldset } from "./MainFormFieldset";
export const MedicalData = ({ data, setData }) => {

    const handleMedicalData = (e) => {
        setData({ ...data, medical_data: { ...data.medical_data, [e.target.name]: e.target.value } })
    }

    return (

        <MainFormFieldset legend="DATOS MEDICOS">


            <label htmlFor="student_disability" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                ¿El estudiante tiene algún tipo de discapacidad?
                <select
                    id="student_disability"
                    name="student_disability"
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    value={data?.academic_data.student_disability}
                    defaultValue="no"
                >
                    <option value="yes">Sí</option>
                    <option value="no">No</option>
                </select>
            </label>

            <label htmlFor="disability_details" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Determine qué discapacidad / porcentaje / número de identificación
                <InputText
                    id="disability_details"
                    name="disability_details"
                    value={data?.academic_data.disability_details}
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    placeholder="Detalles de la discapacidad"
                />
            </label>

            <label htmlFor="specific_medical_condition" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                ¿El estudiante tiene alguna condición médica específica?
                <select
                    id="specific_medical_condition"
                    name="specific_medical_condition"
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    value={data?.academic_data.specific_medical_condition}
                    defaultValue="no"
                >
                     <option value="yes">Sí</option>
                    <option value="no">No</option>
                </select>
            </label>

            <label htmlFor="medical_condition_details" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Determine qué condición médica
                <InputText
                    id="medical_condition_details"
                    name="medical_condition_details"
                    value={data?.academic_data.medical_condition_details}
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    placeholder="Detalles de la condición médica"
                />
            </label>

            <label htmlFor="allergies" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                ¿El estudiante tiene alguna alergia?
                <select
                    id="allergies"
                    name="allergies"
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    value={data?.academic_data.allergies}
                    defaultValue="no"
                >
                    <option value="yes">Sí</option>
                    <option value="no">No</option>
                </select>
            </label>

            <label htmlFor="allergies_details" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Determine qué alergias
                <InputText
                    id="allergies_details"
                    name="allergies_details"
                    value={data?.academic_data.allergies_details}
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    placeholder="Detalles de las alergias"
                />
            </label>

            <label htmlFor="medications" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Especifique los medicamentos utilizados por el estudiante
                <InputText
                    id="medications"
                    name="medications"
                    value={data?.academic_data.medications}
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    placeholder="Medicamentos"
                />
            </label>

            <label htmlFor="medical_facility" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                ¿Dónde recibe atención médica el estudiante?
                <select
                    id="medical_facility"
                    name="medical_facility"
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    value={data?.academic_data.medical_facility}

                >
                    <option value="">Seleccionar centro de salud</option>
                    <option value="health_center">Centro de Salud</option>
                    <option value="public_hospital">Hospital Público</option>
                    <option value="private_hospital">Hospital Privado</option>
                    <option value="other">Otro</option>
                </select>
            </label>

            <label htmlFor="medical_facility_details" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Nombre y dirección de la institución médica
                <InputText
                    id="medical_facility_details"
                    name="medical_facility_details"
                    value={data?.academic_data.medical_facility_details}
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    placeholder="Detalles de la institución médica"
                />
            </label>

            <label htmlFor="attending_physician" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Nombre del médico tratante
                <InputText
                    id="attending_physician"
                    name="attending_physician"
                    value={data?.academic_data.attending_physician}
                    className='rounded-md w-full'
                    onChange={handleMedicalData}
                    placeholder="Médico tratante"
                />
            </label>

        </MainFormFieldset>
    )
}
MedicalData.propTypes = {
    setData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}   