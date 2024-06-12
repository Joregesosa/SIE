import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { MainFormFieldset } from "./MainFormFieldset";
import { useEffect } from "react";
export const MedicalData = ({ data, setData , errorHandling,  information}) => {

    const handleMedicalData = (e) => { 
        setData({ ...data, medical_data: { ...data.medical_data, [e.target.name]: e.target.value } })
    }

    return (
        <MainFormFieldset legend="DATOS MEDICOS">
            <label
                htmlFor="student_disability"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿El estudiante tiene algún tipo de discapacidad?
                <select
                    id="student_disability"
                    name="student_disability"
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleMedicalData}
                    value={data?.medical_data?.student_disability}
                    defaultValue="1"
                >
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                </select>
            </label>

            <label
                htmlFor="student_disability_details"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Determine qué discapacidad / porcentaje / número de
                identificación
                <InputText
                    disabled={data?.medical_data.student_disability === "0"}
                    id="student_disability_details"
                    name="student_disability_details"
                    value={
                        data?.medical_data.student_disability === "0"
                            ? ""
                            : data?.medical_data.student_disability_details
                    }
                    className="rounded-md w-full"
                    onChange={handleMedicalData}
                    placeholder="Detalles de la discapacidad"
                />
                {errorHandling?.student_disability_details && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="medical_condition"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿El estudiante tiene alguna condición médica específica?
                <select
                    id="medical_condition"
                    name="medical_condition"
                    className="rounded-md w-full"
                    onChange={handleMedicalData}
                    value={data?.medical_data.medical_condition}
                    defaultValue="1"
                >
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                </select>
            </label>

            <label
                htmlFor="medical_condition_details"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Determine qué condición médica
                <InputText
                    disabled={
                        data?.medical_data.medical_condition === "0"
                    }
                    id="medical_condition_details"
                    name="medical_condition_details"
                    value={
                        data?.medical_data.medical_condition === "0"
                            ? ""
                            : data?.medical_data.medical_condition_details
                    }
                    className="rounded-md w-full"
                    onChange={handleMedicalData}
                    placeholder="Detalles de la condición médica"
                />
                {errorHandling?.medical_condition_details && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="allergies"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿El estudiante tiene alguna alergia?
                <select
                    id="allergies"
                    name="allergies"
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleMedicalData}
                    value={data?.medical_data?.allergies}
                    defaultValue="1"
                >
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                </select>
            </label>

            <label
                htmlFor="allergies_details"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Determine qué alergias
                <InputText
                    disabled={data?.medical_data?.allergies === '0'}
                    id="allergies_details"
                    name="allergies_details"
                    value={data?.medical_data?.allergies === '0' ? "" :   data?.medical_data?.allergies_details}
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleMedicalData}
                    placeholder="Detalles de las alergias"
                />
                {errorHandling?.allergies_details && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="medications"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Especifique los medicamentos utilizados por el estudiante
                <InputText
                    id="medications"
                    name="medications"
                    value={data?.medical_data?.medications}
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleMedicalData}
                    placeholder="Medicamentos"
                />
                {errorHandling?.medications && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="medical_attention_type_id"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿Dónde recibe atención médica el estudiante?
                <select
                    id="medical_attention_type_id"
                    name="medical_attention_type_id"
                    className="rounded-md w-full"
                    onChange={handleMedicalData}
                    value={data?.medical_data.medical_attention_type_id}
                >
                    <option disabled value="">Seleccionar centro de salud</option>
                    {information.medical_attention_types.map(
                        (medical, index) => (
                            <option key={index} value={medical.id}>
                                {medical.name}
                            </option>
                        )
                    )}
                </select>
                {errorHandling?.medical_attention_type_id && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="medical_attention_details"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Nombre y dirección de la institución médica
                <InputText
                    id="medical_attention_details"
                    name="medical_attention_details"
                    value={data?.medical_data.medical_attention_details}
                    className="rounded-md w-full"
                    onChange={handleMedicalData}
                    placeholder="Detalles de la institución médica"
                />
                {errorHandling?.medical_attention_details && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="medical_attention_doctor"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Nombre del médico tratante
                <InputText
                    id="medical_attention_doctor"
                    name="medical_attention_doctor"
                    value={data?.medical_data.medical_attention_doctor}
                    className="rounded-md w-full"
                    onChange={handleMedicalData}
                    placeholder="Médico tratante"
                />
                {errorHandling?.medical_attention_doctor && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>
        </MainFormFieldset>
    );
};
MedicalData.propTypes = {
    setData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};
