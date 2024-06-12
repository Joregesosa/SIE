import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { MainFormFieldset } from "./MainFormFieldset";
export const MedicalHistory = ({ data, setData, errorHandling }) => {

    const handleAcademicData = (e) => {
        setData({
            ...data,
            medical_history: {
                ...data.medical_history,
                [e.target.name]: e.target.value,
            },
        });
    };
   
    return (
        <MainFormFieldset
            legend="HISTORIA VITAL"
            description="Embarazo y parto, Datos del/la niño/a recién nacido, Enfermedades (desde la infancia hasta la actualidad):"
        >
            <label
                htmlFor="pregnancy_mother_age"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Edad de la madre durante el embarazo:
                <InputText
                    type="number"
                    id="pregnancy_mother_age"
                    name="pregnancy_mother_age"
                    value={data?.medical_history.pregnancy_mother_age}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Edad de la madre durante el embarazo"
                />
                {errorHandling?.pregnancy_mother_age && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="pregnancy_accidents"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Accidentes durante el embarazo
                <InputText
                    id="pregnancy_accidents"
                    name="pregnancy_accidents"
                    value={data?.medical_history.pregnancy_accidents}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Accidentes durante el embarazo"
                />
                {errorHandling?.pregnancy_accidents && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="pregnancy_medications"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Medicamentos durante el embarazo
                <InputText
                    id="pregnancy_medications"
                    name="pregnancy_medications"
                    value={data?.medical_history.pregnancy_medications}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Medicamentos durante el embarazo"
                />
                {errorHandling?.pregnancy_medications && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="pregnancy_type_id"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Tipo de parto
                <InputText
                    id="pregnancy_type_id"
                    name="pregnancy_type_id"
                    value={data?.medical_history.pregnancy_type_id}
                    className="rounded-md w-full"
                    //onChange={handleAcademicData}
                    placeholder="Tipo de parto"
                />
                {errorHandling?.pregnancy_type_id && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="pregnancy_difficulties"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Especifique otras dificultades durante el embarazo
                (preeclampsia, hipoxia, etc.)
                <InputText
                    id="pregnancy_difficulties"
                    name="pregnancy_difficulties"
                    value={data?.medical_history.pregnancy_difficulties}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Especifique otras dificultades durante el embarazo"
                />
                {errorHandling?.pregnancy_difficulties && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="birth_weight"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Peso al nacer
                <InputText
                    id="birth_weight"
                    name="birth_weight"
                    value={data?.medical_history.birth_weight}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Peso al nacer"
                />
                {errorHandling?.birth_weight && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="birth_height"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Altura al nacer
                <InputText
                    id="birth_height"
                    name="birth_height"
                    value={data?.medical_history.birth_height}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Altura al nacer"
                />
                {errorHandling?.birth_height && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="walking_age"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Edad cuando comenzó a caminar
                <InputText
                    id="walking_age"
                    name="walking_age"
                    value={data?.medical_history.walking_age}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Edad cuando comenzó a caminar"
                />
                {errorHandling?.walking_age && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="talking_age"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Edad cuando pronunció las primeras palabras
                <InputText
                    id="talking_age"
                    name="talking_age"
                    value={data?.medical_history.talking_age}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Edad cuando pronunció las primeras palabras"
                />
                {errorHandling?.talking_age && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="breastfeeding_period"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Período de lactancia
                <InputText
                    id="breastfeeding_period"
                    name="breastfeeding_period"
                    value={data?.medical_history.breastfeeding_period}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Período de lactancia"
                />
                {errorHandling?.breastfeeding_period && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="bottle_age"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Edad hasta el uso del biberón
                <InputText
                    id="bottle_age"
                    name="bottle_age"
                    value={data?.medical_history.bottle_age}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Edad hasta el uso del biberón"
                />
                {errorHandling?.bottle_age && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="toilet_age"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Edad en que aprendió a controlar esfínteres
                <InputText
                    id="toilet_age"
                    name="toilet_age"
                    value={data?.medical_history.toilet_age}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Edad cuando aprendió el entrenamiento para ir al baño"
                />
                {errorHandling?.toilet_age && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="observations"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Observaciones
                <InputText
                    id="observations"
                    name="observations"
                    value={data?.medical_history.observations}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Observaciones"
                />
                {errorHandling?.observations && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="family_medical_history"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Antecedentes médicos familiares
                <InputText
                    id="family_medical_history"
                    name="family_medical_history"
                    value={data?.medical_history.family_medical_history}
                    className="rounded-md w-full"
                    //onChange={handleAcademicData}
                    placeholder="Antecedentes médicos familiares"
                />
                {errorHandling?.family_medical_history && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="father_relationship"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿Cómo describiría la relación del estudiante con el padre?
                <InputText
                    id="father_relationship"
                    name="father_relationship"
                    value={data?.medical_history.father_relationship}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con el padre?"
                />
                {errorHandling?.father_relationship && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="mother_relationship"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿Cómo describiría la relación del estudiante con la madre?
                <InputText
                    id="mother_relationship"
                    name="mother_relationship"
                    value={data?.medical_history.mother_relationship}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con la madre?"
                />
                {errorHandling?.mother_relationship && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="siblings_relationship"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿Cómo describiría la relación del estudiante con los hermanos?
                <InputText
                    id="siblings_relationship"
                    name="siblings_relationship"
                    value={data?.medical_history.siblings_relationship}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con los hermanos?"
                />
                {errorHandling?.siblings_relationship && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="others_relationship"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿Cómo describiría la relación del estudiante con otras personas?
                <InputText
                    id="others_relationship"
                    name="others_relationship"
                    value={data?.medical_history.others_relationship}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con otras personas?"
                />
                {errorHandling?.others_relationship && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="habits_and_activities"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Hábitos y actividades (hábitos de sueño, hábitos alimenticios,
                actividades de ocio, amigos, tareas diarias y tiempo dedicado a
                ellas)
                <InputText
                    id="habits_and_activities"
                    name="habits_and_activities"
                    value={data?.medical_history.habits_and_activities}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Hábitos y actividades"
                />
                {errorHandling?.habits_and_activities && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>
        </MainFormFieldset>
    );
};

MedicalHistory.prototype = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
};
