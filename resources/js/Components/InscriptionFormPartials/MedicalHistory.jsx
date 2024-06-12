import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { MainFormFieldset } from "./MainFormFieldset";
<<<<<<< get_data_all
export const MedicalHistory = ({ data, setData }) => {
=======
export const MedicalHistory = ({ data, setData, errorHandling }) => {

>>>>>>> dev
    const handleAcademicData = (e) => {
        setData({
            ...data,
            medical_history: {
                ...data.medical_history,
                [e.target.name]: e.target.value,
            },
        });
    };
    console.log(data.medical_history);
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
<<<<<<< get_data_all
                    type="number"
                    id="pregnancy_mother_age"
                    name="pregnancy_mother_age"
                    value={data?.medical_history.pregnancy_mother_age}
                    className="rounded-md w-full"
=======
                    id="mother_age"
                    name="mother_age"
                    value={data?.medical_history?.mother_age}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Edad de la madre durante el embarazo"
                />
                {errorHandling?.mother_age && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="pregnancy_accidents"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Accidentes durante el embarazo
                <InputText
<<<<<<< get_data_all
                    id="pregnancy_accidents"
                    name="pregnancy_accidents"
                    value={data?.medical_history.pregnancy_accidents}
                    className="rounded-md w-full"
=======
                    id="accidents_during_pregnancy"
                    name="accidents_during_pregnancy"
                    value={data?.medical_history?.accidents_during_pregnancy}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Accidentes durante el embarazo"
                />
                {errorHandling?.accidents_during_pregnancy && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="pregnancy_medications"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Medicamentos durante el embarazo
                <InputText
<<<<<<< get_data_all
                    id="pregnancy_medications"
                    name="pregnancy_medications"
                    value={data?.medical_history.pregnancy_medications}
                    className="rounded-md w-full"
=======
                    id="medications_during_pregnancy"
                    name="medications_during_pregnancy"
                    value={data?.medical_history?.medications_during_pregnancy}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Medicamentos durante el embarazo"
                />
                {errorHandling?.medications_during_pregnancy && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="pregnancy_type_id"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Tipo de parto
                <InputText
<<<<<<< get_data_all
                    id="pregnancy_type_id"
                    name="pregnancy_type_id"
                    value={data?.medical_history.pregnancy_type_id}
                    className="rounded-md w-full"
                    //onChange={handleAcademicData}
=======
                    id="birth_type"
                    name="birth_type"
                    value={data?.medical_history?.birth_type}
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleAcademicData}
>>>>>>> dev
                    placeholder="Tipo de parto"
                />
                {errorHandling?.birth_type && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="pregnancy_difficulties"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Especifique otras dificultades durante el embarazo
                (preeclampsia, hipoxia, etc.)
                <InputText
<<<<<<< get_data_all
                    id="pregnancy_difficulties"
                    name="pregnancy_difficulties"
                    value={data?.medical_history.pregnancy_difficulties}
                    className="rounded-md w-full"
=======
                    id="other_difficulties_during_pregnancy"
                    name="other_difficulties_during_pregnancy"
                    value={data?.medical_history?.other_difficulties_during_pregnancy}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Especifique otras dificultades durante el embarazo"
                />
                {errorHandling?.other_difficulties_during_pregnancy && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="birth_weight"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Peso al nacer
                <InputText
                    id="birth_weight"
                    name="birth_weight"
<<<<<<< get_data_all
                    value={data?.medical_history.birth_weight}
                    className="rounded-md w-full"
=======
                    value={data?.medical_history?.birth_weight}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
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
<<<<<<< get_data_all
                    value={data?.medical_history.birth_height}
                    className="rounded-md w-full"
=======
                    value={data?.medical_history?.birth_height}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
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
<<<<<<< get_data_all
                    value={data?.medical_history.walking_age}
                    className="rounded-md w-full"
=======
                    value={data?.medical_history?.walking_age}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
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
<<<<<<< get_data_all
                    id="talking_age"
                    name="talking_age"
                    value={data?.medical_history.talking_age}
                    className="rounded-md w-full"
=======
                    id="first_wordsAge"
                    name="first_wordsAge"
                    value={data?.medical_history?.first_wordsAge}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Edad cuando pronunció las primeras palabras"
                />
                {errorHandling?.first_wordsAge && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="breastfeeding_period"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Período de lactancia
                <InputText
                    id="breastfeeding_period"
                    name="breastfeeding_period"
<<<<<<< get_data_all
                    value={data?.medical_history.breastfeeding_period}
                    className="rounded-md w-full"
=======
                    value={data?.medical_history?.breastfeeding_period}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
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
<<<<<<< get_data_all
                    id="bottle_age"
                    name="bottle_age"
                    value={data?.medical_history.bottle_age}
                    className="rounded-md w-full"
=======
                    id="bottle_usage_age"
                    name="bottle_usage_age"
                    value={data?.medical_history?.bottle_usage_age}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Edad hasta el uso del biberón"
                />
                {errorHandling?.bottle_usage_age && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="toilet_age"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Edad en que aprendió a controlar esfínteres
                <InputText
<<<<<<< get_data_all
                    id="toilet_age"
                    name="toilet_age"
                    value={data?.medical_history.toilet_age}
                    className="rounded-md w-full"
=======
                    id="toilet_training_age"
                    name="toilet_training_age"
                    value={data?.medical_history?.toilet_training_age}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Edad cuando aprendió el entrenamiento para ir al baño"
                />
                {errorHandling?.toilet_training_age && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="observations"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Observaciones
                <InputText
                    id="observations"
                    name="observations"
<<<<<<< get_data_all
                    value={data?.medical_history.observations}
                    className="rounded-md w-full"
=======
                    value={data?.medical_history?.observations}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
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
<<<<<<< get_data_all
                    value={data?.medical_history.family_medical_history}
                    className="rounded-md w-full"
                    //onChange={handleAcademicData}
=======
                    value={data?.medical_history?.family_medical_history}
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleAcademicData}
>>>>>>> dev
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
<<<<<<< get_data_all
                    id="father_relationship"
                    name="father_relationship"
                    value={data?.medical_history.father_relationship}
                    className="rounded-md w-full"
=======
                    id="student_father_relationship"
                    name="student_father_relationship"
                    value={data?.medical_history?.student_father_relationship}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con el padre?"
                />
                {errorHandling?.student_father_relationship && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="mother_relationship"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿Cómo describiría la relación del estudiante con la madre?
                <InputText
<<<<<<< get_data_all
                    id="mother_relationship"
                    name="mother_relationship"
                    value={data?.medical_history.mother_relationship}
                    className="rounded-md w-full"
=======
                    id="student_mother_relationship"
                    name="student_mother_relationship"
                    value={data?.medical_history?.student_mother_relationship}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con la madre?"
                />
                {errorHandling?.student_mother_relationship && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="siblings_relationship"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿Cómo describiría la relación del estudiante con los hermanos?
                <InputText
<<<<<<< get_data_all
                    id="siblings_relationship"
                    name="siblings_relationship"
                    value={data?.medical_history.siblings_relationship}
                    className="rounded-md w-full"
=======
                    id="student_siblings_relationship"
                    name="student_siblings_relationship"
                    value={data?.medical_history?.student_siblings_relationship}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con los hermanos?"
                />
                {errorHandling?.student_siblings_relationship && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="others_relationship"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿Cómo describiría la relación del estudiante con otras personas?
                <InputText
<<<<<<< get_data_all
                    id="others_relationship"
                    name="others_relationship"
                    value={data?.medical_history.others_relationship}
                    className="rounded-md w-full"
=======
                    id="student_others_relationship"
                    name="student_others_relationship"
                    value={data?.medical_history?.student_others_relationship}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="¿Cómo describiría la relación del estudiante con otras personas?"
                />
                {errorHandling?.student_others_relationship && <span className="text-red-500 text-xs">Este campo es requerido</span>}
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
<<<<<<< get_data_all
                    value={data?.medical_history.habits_and_activities}
                    className="rounded-md w-full"
=======
                    value={data?.medical_history?.habits_and_activities}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
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
