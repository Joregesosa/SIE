import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";


/* export const MedicalData = () => (
    <fieldset className='max-w-screen-lg w-full mx-auto p-6 grid grid-cols-2 gap-4 my-8'>
        <legend className='text-2xl font-semibold col-span-2'>
            DATOS MEDICOS
        </legend>

        <label htmlFor="student_disability" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            ¿El estudiante tiene algún tipo de discapacidad?
            <select
                id="student_disability"
                name="student_disability"
                className='rounded-md w-full'
                onChange={setMedicalData}
                value={data?.academic_data.student_disability}
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
                onChange={setMedicalData}
                placeholder="Detalles de la discapacidad"
            />
        </label>

        <label htmlFor="specific_medical_condition" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            ¿El estudiante tiene alguna condición médica específica?
            <select
                id="specific_medical_condition"
                name="specific_medical_condition"
                className='rounded-md w-full'
                onChange={setMedicalData}
                value={data?.academic_data.specific_medical_condition}
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
                onChange={setMedicalData}
                placeholder="Detalles de la condición médica"
            />
        </label>

        <label htmlFor="allergies" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            ¿El estudiante tiene alguna alergia?
            <select
                id="allergies"
                name="allergies"
                className='rounded-md w-full'
                onChange={setMedicalData}
                value={data?.academic_data.allergies}
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
                onChange={setMedicalData}
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
                onChange={setMedicalData}
                placeholder="Medicamentos"
            />
        </label>

        <label htmlFor="medical_facility" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            ¿Dónde recibe atención médica el estudiante?
            <select
                id="medical_facility"
                name="medical_facility"
                className='rounded-md w-full'
                onChange={setMedicalData}
                value={data?.academic_data.medical_facility}
            >
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
                onChange={setMedicalData}
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
                onChange={setMedicalData}
                placeholder="Médico tratante"
            />
        </label>

    </fieldset>
) */

export const Form9 = () => (
    <fieldset className='max-w-screen-lg w-full mx-auto p-6 grid grid-cols-2 gap-4 my-8'>
        <legend className='text-2xl font-semibold col-span-2'>
            HISTORIA VITAL
            <span className='font-normal text-base'><br />
                Embarazo y parto, Datos del/la niño/a recién nacido, Enfermedades (desde la infancia hasta la actualidad):
            </span>
        </legend>

        <label htmlFor="motherAge" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Edad de la madre durante el embarazo
            <InputText
                id="motherAge"
                name="motherAge"
                value={data?.academic_data.motherAge}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Edad de la madre durante el embarazo"
            />
        </label>

        <label htmlFor="accidentsDuringPregnancy" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Accidentes durante el embarazo
            <InputText
                id="accidentsDuringPregnancy"
                name="accidentsDuringPregnancy"
                value={data?.academic_data.accidentsDuringPregnancy}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Accidentes durante el embarazo"
            />
        </label>

        <label htmlFor="medicationsDuringPregnancy" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Medicamentos durante el embarazo
            <InputText
                id="medicationsDuringPregnancy"
                name="medicationsDuringPregnancy"
                value={data?.academic_data.medicationsDuringPregnancy}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Medicamentos durante el embarazo"
            />
        </label>

        <label htmlFor="typeOfDelivery" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Tipo de parto
            <InputText
                id="typeOfDelivery"
                name="typeOfDelivery"
                value={data?.academic_data.typeOfDelivery}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Tipo de parto"
            />
        </label>

        <label htmlFor="otherDifficultiesDuringPregnancy" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Especifique otras dificultades durante el embarazo (preeclampsia, hipoxia, etc.)
            <InputText
                id="otherDifficultiesDuringPregnancy"
                name="otherDifficultiesDuringPregnancy"
                value={data?.academic_data.otherDifficultiesDuringPregnancy}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Especifique otras dificultades durante el embarazo"
            />
        </label>

        <label htmlFor="birthWeight" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Peso al nacer
            <InputText
                id="birthWeight"
                name="birthWeight"
                value={data?.academic_data.birthWeight}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Peso al nacer"
            />
        </label>

        <label htmlFor="birthHeight" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Altura al nacer
            <InputText
                id="birthHeight"
                name="birthHeight"
                value={data?.academic_data.birthHeight}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Altura al nacer"
            />
        </label>

        <label htmlFor="walkingAge" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Edad cuando comenzó a caminar
            <InputText
                id="walkingAge"
                name="walkingAge"
                value={data?.academic_data.walkingAge}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Edad cuando comenzó a caminar"
            />
        </label>

        <label htmlFor="firstWordsAge" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Edad cuando pronunció las primeras palabras
            <InputText
                id="firstWordsAge"
                name="firstWordsAge"
                value={data?.academic_data.firstWordsAge}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Edad cuando pronunció las primeras palabras"
            />
        </label>

        <label htmlFor="breastfeedingPeriod" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Período de lactancia
            <InputText
                id="breastfeedingPeriod"
                name="breastfeedingPeriod"
                value={data?.academic_data.breastfeedingPeriod}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Período de lactancia"
            />
        </label>

        <label htmlFor="bottleUsageAge" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Edad hasta el uso del biberón
            <InputText
                id="bottleUsageAge"
                name="bottleUsageAge"
                value={data?.academic_data.bottleUsageAge}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Edad hasta el uso del biberón"
            />
        </label>

        <label htmlFor="toiletTrainingAge" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Edad cuando aprendió el entrenamiento para ir al baño
            <InputText
                id="toiletTrainingAge"
                name="toiletTrainingAge"
                value={data?.academic_data.toiletTrainingAge}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Edad cuando aprendió el entrenamiento para ir al baño"
            />
        </label>

        <label htmlFor="observations" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Observaciones
            <InputText
                id="observations"
                name="observations"
                value={data?.academic_data.observations}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Observaciones"
            />
        </label>

        <label htmlFor="familyMedicalHistory" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Antecedentes médicos familiares
            <InputText
                id="familyMedicalHistory"
                name="familyMedicalHistory"
                value={data?.academic_data.familyMedicalHistory}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Antecedentes médicos familiares"
            />
        </label>

        <label htmlFor="studentFatherRelationship" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            ¿Cómo describiría la relación del estudiante con el padre?
            <InputText
                id="studentFatherRelationship"
                name="studentFatherRelationship"
                value={data?.academic_data.studentFatherRelationship}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="¿Cómo describiría la relación del estudiante con el padre?"
            />
        </label>

        <label htmlFor="studentMotherRelationship" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            ¿Cómo describiría la relación del estudiante con la madre?
            <InputText
                id="studentMotherRelationship"
                name="studentMotherRelationship"
                value={data?.academic_data.studentMotherRelationship}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="¿Cómo describiría la relación del estudiante con la madre?"
            />
        </label>

        <label htmlFor="studentSiblingsRelationship" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            ¿Cómo describiría la relación del estudiante con los hermanos?
            <InputText
                id="studentSiblingsRelationship"
                name="studentSiblingsRelationship"
                value={data?.academic_data.studentSiblingsRelationship}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="¿Cómo describiría la relación del estudiante con los hermanos?"
            />
        </label>

        <label htmlFor="studentOthersRelationship" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            ¿Cómo describiría la relación del estudiante con otras personas?
            <InputText
                id="studentOthersRelationship"
                name="studentOthersRelationship"
                value={data?.academic_data.studentOthersRelationship}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="¿Cómo describiría la relación del estudiante con otras personas?"
            />
        </label>

        <label htmlFor="habitsAndActivities" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
            Hábitos y actividades (hábitos de sueño, hábitos alimenticios, actividades de ocio, amigos, tareas diarias y tiempo dedicado a ellas)
            <InputText
                id="habitsAndActivities"
                name="habitsAndActivities"
                value={data?.academic_data.habitsAndActivities}
                className='rounded-md w-full'
                onChange={setAcademicData}
                placeholder="Hábitos y actividades"
            />
        </label>

    </fieldset>
)