import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { MainFormFieldset } from "./MainFormFieldset";
import { useEffect } from "react";
<<<<<<< get_data_all
export const MedicalData = ({ data, setData, information }) => {
    const handleMedicalData = (e) => {
        setData({
            ...data,
            medical_data: {
                ...data.medical_data,
                [e.target.name]: e.target.value,
            },
        });
    };
=======
export const MedicalData = ({ data, setData , errorHandling}) => {

    const handleMedicalData = (e) => { 
        setData({ ...data, medical_data: { ...data.medical_data, [e.target.name]: e.target.value } })
    }
>>>>>>> dev

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
<<<<<<< get_data_all
                    className="rounded-md w-full"
=======
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleMedicalData}
                    value={data?.medical_data?.student_disability}
                    defaultValue="0"
                >
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                </select>
                {errorHandling?.student_disability && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="student_disability_details"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Determine qué discapacidad / porcentaje / número de
                identificación
                <InputText
<<<<<<< get_data_all
                    disabled={data?.medical_data.student_disability === "0"}
                    id="student_disability_details"
                    name="student_disability_details"
                    value={
                        data?.medical_data.student_disability === "0"
                            ? ""
                            : data?.medical_data.student_disability_details
                    }
                    className="rounded-md w-full"
=======
                    disabled={data?.medical_data?.student_disability === '0'}
                    id="disability_details"
                    name="disability_details"
                    value={data?.medical_data?.student_disability === '0' ? "" : data?.medical_data?.disability_details}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleMedicalData}
                    placeholder="Detalles de la discapacidad"
                />
                {errorHandling?.disability_details && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="medical_condition"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿El estudiante tiene alguna condición médica específica?
                <select
<<<<<<< get_data_all
                    id="medical_condition"
                    name="medical_condition"
                    className="rounded-md w-full"
                    onChange={handleMedicalData}
                    value={data?.medical_data.medical_condition}
=======
                    id="specific_medical_condition"
                    name="specific_medical_condition"
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleMedicalData}
                    value={data?.medical_data?.specific_medical_condition}
>>>>>>> dev
                    defaultValue="0"
                >
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                </select>
                {errorHandling?.specific_medical_condition && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="medical_condition_details"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Determine qué condición médica
                <InputText
<<<<<<< get_data_all
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
=======
                    disabled={data?.medical_data?.specific_medical_condition === '0'}
                    id="medical_condition_details"
                    name="medical_condition_details"
                    value={data?.medical_data?.specific_medical_condition === '0' ? "" : data?.medical_data?.medical_condition_details}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
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
<<<<<<< get_data_all
                    className="rounded-md w-full"
=======
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleMedicalData}
                    value={data?.medical_data?.allergies}
                    defaultValue="0"
                >
                    <option value="1">Sí</option>
                    <option value="0">No</option>
                </select>
                {errorHandling?.allergies && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="allergies_details"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Determine qué alergias
                <InputText
<<<<<<< get_data_all
                    disabled={data?.medical_data.allergies == "0"}
                    id="allergies_details"
                    name="allergies_details"
                    value={
                        data?.medical_data.allergies == "0"
                            ? ""
                            : data?.medical_data.allergies_details
                    }
                    className="rounded-md w-full"
=======
                    disabled={data?.medical_data?.allergies === '0'}
                    id="allergies_details"
                    name="allergies_details"
                    value={data?.medical_data?.allergies === '0' ? "" :   data?.medical_data?.allergies_details}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
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
<<<<<<< get_data_all
                    value={data?.medical_data.medications}
                    className="rounded-md w-full"
=======
                    value={data?.medical_data?.medications}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
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
<<<<<<< get_data_all
                    id="medical_attention_type_id"
                    name="medical_attention_type_id"
                    className="rounded-md w-full"
                    onChange={handleMedicalData}
                    value={data?.medical_data.medical_attention_type_id}
=======
                    id="medical_facility"
                    name="medical_facility"
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleMedicalData}
                    value={data?.medical_data?.medical_facility}

>>>>>>> dev
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
                {errorHandling?.medical_facility && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="medical_attention_details"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Nombre y dirección de la institución médica
                <InputText
<<<<<<< get_data_all
                    id="medical_attention_details"
                    name="medical_attention_details"
                    value={data?.medical_data.medical_attention_details}
                    className="rounded-md w-full"
=======
                    id="medical_facility_details"
                    name="medical_facility_details"
                    value={data?.medical_data?.medical_facility_details}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleMedicalData}
                    placeholder="Detalles de la institución médica"
                />
                {errorHandling?.medical_facility_details && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="medical_attention_doctor"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Nombre del médico tratante
                <InputText
<<<<<<< get_data_all
                    id="medical_attention_doctor"
                    name="medical_attention_doctor"
                    value={data?.medical_data.medical_attention_doctor}
                    className="rounded-md w-full"
=======
                    id="attending_physician"
                    name="attending_physician"
                    value={data?.medical_data?.attending_physician}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleMedicalData}
                    placeholder="Médico tratante"
                />
                {errorHandling?.attending_physician && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>
        </MainFormFieldset>
    );
};
MedicalData.propTypes = {
    setData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};
