import { InputText } from "primereact/inputtext";
import PropTypes from 'prop-types';
import { MainFormFieldset } from "./MainFormFieldset";
export const MedicalHistory = ({ data, setData }) => {

    const handleAcademicData = (e) => {
        setData({ ...data, medical_history: { ...data.medical_history, [e.target.name]: e.target.value } })
    }

    return (

        <MainFormFieldset
            legend="HISTORIA VITAL"
            description="Embarazo y parto, Datos del/la niño/a recién nacido, Enfermedades (desde la infancia hasta la actualidad):">

            <label htmlFor="mother_age" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Edad de la madre durante el embarazo:
                <InputText
                    id="mother_age"
                    name="mother_age"
                    value={data?.medical_history.mother_age}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Edad de la madre durante el embarazo"
                />
            </label>

            <label htmlFor="accidents_during_pregnancy" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Accidentes durante el embarazo
                <InputText
                    id="accidents_during_pregnancy"
                    name="accidents_during_pregnancy"
                    value={data?.medical_history.accidents_during_pregnancy}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Accidentes durante el embarazo"
                />
            </label>

            <label htmlFor="medications_during_pregnancy" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Medicamentos durante el embarazo
                <InputText
                    id="medications_during_pregnancy"
                    name="medications_during_pregnancy"
                    value={data?.medical_history.medications_during_pregnancy}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Medicamentos durante el embarazo"
                />
            </label>

            <label htmlFor="birth_type" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Tipo de parto
                <InputText
                    id="birth_type"
                    name="birth_type"
                    value={data?.medical_history.birth_type}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Tipo de parto"
                />
            </label>

            <label htmlFor="other_difficulties_during_pregnancy" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Especifique otras dificultades durante el embarazo (preeclampsia, hipoxia, etc.)
                <InputText
                    id="other_difficulties_during_pregnancy"
                    name="other_difficulties_during_pregnancy"
                    value={data?.medical_history.other_difficulties_during_pregnancy}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Especifique otras dificultades durante el embarazo"
                />
            </label>

            <label htmlFor="birth_weight" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Peso al nacer
                <InputText
                    id="birth_weight"
                    name="birth_weight"
                    value={data?.medical_history.birth_weight}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Peso al nacer"
                />
            </label>

            <label htmlFor="birth_height" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Altura al nacer
                <InputText
                    id="birth_height"
                    name="birth_height"
                    value={data?.medical_history.birth_height}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Altura al nacer"
                />
            </label>

            <label htmlFor="walking_age" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Edad cuando comenzó a caminar
                <InputText
                    id="walking_age"
                    name="walking_age"
                    value={data?.medical_history.walking_age}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Edad cuando comenzó a caminar"
                />
            </label>

            <label htmlFor="first_wordsAge" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Edad cuando pronunció las primeras palabras
                <InputText
                    id="first_wordsAge"
                    name="first_wordsAge"
                    value={data?.medical_history.first_wordsAge}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Edad cuando pronunció las primeras palabras"
                />
            </label>

            <label htmlFor="breastfeeding_period" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Período de lactancia
                <InputText
                    id="breastfeeding_period"
                    name="breastfeeding_period"
                    value={data?.medical_history.breastfeeding_period}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Período de lactancia"
                />
            </label>

            <label htmlFor="bottle_usage_age" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Edad hasta el uso del biberón
                <InputText
                    id="bottle_usage_age"
                    name="bottle_usage_age"
                    value={data?.medical_history.bottle_usage_age}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Edad hasta el uso del biberón"
                />
            </label>

            <label htmlFor="toilet_training_age" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Edad en que aprendió a controlar esfínteres
                <InputText
                    id="toilet_training_age"
                    name="toilet_training_age"
                    value={data?.medical_history.toilet_training_age}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Edad cuando aprendió el entrenamiento para ir al baño"
                />
            </label>

            <label htmlFor="observations" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Observaciones
                <InputText
                    id="observations"
                    name="observations"
                    value={data?.medical_history.observations}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Observaciones"
                />
            </label>

            <label htmlFor="family_medical_history" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Antecedentes médicos familiares
                <InputText
                    id="family_medical_history"
                    name="family_medical_history"
                    value={data?.medical_history.family_medical_history}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Antecedentes médicos familiares"
                />
            </label>

            <label htmlFor="student_father_relationship" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                ¿Cómo describiría la relación del estudiante con el padre?
                <InputText
                    id="student_father_relationship"
                    name="student_father_relationship"
                    value={data?.medical_history.student_father_relationship}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con el padre?"
                />
            </label>

            <label htmlFor="student_mother_relationship" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                ¿Cómo describiría la relación del estudiante con la madre?
                <InputText
                    id="student_mother_relationship"
                    name="student_mother_relationship"
                    value={data?.medical_history.student_mother_relationship}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con la madre?"
                />
            </label>

            <label htmlFor="student_siblings_relationship" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                ¿Cómo describiría la relación del estudiante con los hermanos?
                <InputText
                    id="student_siblings_relationship"
                    name="student_siblings_relationship"
                    value={data?.medical_history.student_siblings_relationship}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con los hermanos?"
                />
            </label>

            <label htmlFor="student_others_relationship" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                ¿Cómo describiría la relación del estudiante con otras personas?
                <InputText
                    id="student_others_relationship"
                    name="student_others_relationship"
                    value={data?.medical_history.student_others_relationship}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con otras personas?"
                />
            </label>

            <label htmlFor="habits_and_activities" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Hábitos y actividades (hábitos de sueño, hábitos alimenticios, actividades de ocio, amigos, tareas diarias y tiempo dedicado a ellas)
                <InputText
                    id="habits_and_activities"
                    name="habits_and_activities"
                    value={data?.medical_history.habits_and_activities}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Hábitos y actividades"
                />
            </label>

        </MainFormFieldset>
    )
}

MedicalHistory.prototype = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
}