import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { MainFormFieldset } from "./MainFormFieldset";
import { Dropdown } from "primereact/dropdown";
import Checkbox from "../Checkbox";
import { InputNumber } from "primereact/inputnumber";
export const MedicalHistory = ({ data, setData, errorHandling, information }) => {
    const handleAcademicData = (e) => {
        const new_medical_history = { ...data };
        let nmh = JSON.parse(new_medical_history.medical_history.family_medical_history);
        
        if (e.target.name === 'family_medical_history') {
            if (e.target.checked) {
                nmh.push(parseInt(e.target.value));
                new_medical_history.medical_history.family_medical_history = JSON.stringify(nmh);
            } else {
                nmh = nmh.filter((illness) => illness !== parseInt(e.target.value));
                new_medical_history.medical_history.family_medical_history = JSON.stringify(nmh);
            }
            setData(new_medical_history);
            return;
        }
        setData({ ...data, medical_history: { ...data.medical_history, [e.target.name]: e.target.value }, });
    };

    console.log(data.medical_history)

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
                    value={data?.medical_history?.pregnancy_mother_age}
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
                    value={data?.medical_history?.pregnancy_accidents}
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
                    value={data?.medical_history?.pregnancy_medications}
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
                <Dropdown
                    inputId="pregnancy_type_id"
                    name="pregnancy_type_id"
                    value={data?.medical_history?.pregnancy_type_id}
                    onChange={handleAcademicData}
                    options={information.pregnancy_types}
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Seleccione el tipo de parto"
                    filter
                    className="flex items-center border h-[42px] border-gray-500 flex-grow" />
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
                    value={data?.medical_history?.pregnancy_difficulties}
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
                <InputNumber
                    id="birth_weight"
                    name="birth_weight"
                    value={data?.medical_history?.birth_weight}
                    className="rounded-md w-full"
                    inputClassName="rounded-md w-full"
                    onValueChange={handleAcademicData}
                    placeholder="Peso al nacer"
                     suffix=" Kg"
                />

              
                {errorHandling?.birth_weight && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="birth_height"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Estatura al nacer
                <InputText
                    id="birth_height"
                    name="birth_height"
                    value={data?.medical_history?.birth_height}
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
                    value={data?.medical_history?.walking_age}
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
                    value={data?.medical_history?.talking_age}
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
                    value={data?.medical_history?.breastfeeding_period}
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
                    value={data?.medical_history?.bottle_age}
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
                    value={data?.medical_history?.toilet_age}
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
                    value={data?.medical_history?.observations}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Observaciones"
                />
                {errorHandling?.observations && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>
            <label
                htmlFor="father_relationship"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                ¿Cómo describiría la relación del estudiante con el padre?
                <InputText
                    id="father_relationship"
                    name="father_relationship"
                    value={data?.medical_history?.father_relationship}
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
                    value={data?.medical_history?.mother_relationship}
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
                    value={data?.medical_history?.siblings_relationship}
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
                    value={data?.medical_history?.others_relationship}
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
                    value={data?.medical_history?.habits_and_activities}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="Hábitos y actividades"
                />
                {errorHandling?.habits_and_activities && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>
            <legend className="font-medium text-lg col-span-2">Antecedentes médicos familiares</legend>
            {
                information.pathological_family_histories?.map((illness) =>
                    <label key={illness.id} htmlFor={`pf${illness.id}`} className="ml-2 col-span-2 md:col-span-1">

                        <Checkbox
                            id={`pf${illness.id}`}
                            name="family_medical_history"
                            value={illness.id}
                            onChange={handleAcademicData}
                            checked={data.medical_history?.family_medical_history?.includes(illness.id)}
                            className='mr-2'
                        />
                        <b> {illness.name}</b>
                    </label>
                )
            }
        </MainFormFieldset>
    );
};

MedicalHistory.prototype = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
};
