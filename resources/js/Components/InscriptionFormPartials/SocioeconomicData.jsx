import { InputText } from "primereact/inputtext";
import PropType from 'prop-types';
import { MainFormFieldset } from "./MainFormFieldset";
import Checkbox from "../Checkbox";
const studentPartnersOptions = [
    { key: 'padres', label: 'Padres', description: 'Los progenitores biológicos o adoptivos del niño, quienes tienen la responsabilidad primaria de cuidarlo, educarlo y proporcionarle apoyo emocional y material.' },
    { key: 'hijos', label: 'Hijos', description: 'Los niños que forman parte de la familia, ya sean biológicos o adoptivos.' },
    { key: 'abuelos', label: 'Abuelos', description: 'Los padres de los padres del niño, quienes pueden tener un papel importante en la crianza y el apoyo familiar.' },
    { key: 'hermanos', label: 'Hermanos', description: 'Los hermanos del niño, ya sean biológicos (hermanos de sangre) o no (hermanastros, hermanastros adoptivos), que comparten al menos un padre en común.' },
    { key: 'tios_tias', label: 'Tíos y tías', description: 'Los hermanos de los padres del niño, quienes pueden ser figuras significativas en su vida y proporcionar apoyo adicional.' },
    { key: 'primos', label: 'Primos', description: 'Los hijos de los tíos y tías del niño, que comparten al menos un abuelo en común.' },
    { key: 'padres_adoptivos', label: 'Padres adoptivos', description: 'Las personas que han adoptado legalmente al niño y asumen la responsabilidad de su crianza y cuidado.' },
    { key: 'hermanos_adoptivos', label: 'Hermanos adoptivos', description: 'Los niños que han sido adoptados por la misma familia y se consideran hermanos aunque no tengan parentesco biológico.' },
    { key: 'padres_crianza', label: 'Padres de crianza', description: 'Las personas que proporcionan cuidado temporal a un niño cuando no pueden vivir con sus padres biológicos por diversas razones, como problemas de salud o seguridad.' },
    { key: 'cuidadores', label: 'Cuidadores', description: 'Personas que pueden no tener un parentesco directo pero que desempeñan un papel importante en el cuidado y la crianza del niño, como niñeras, educadores o trabajadores sociales.' }
];
const family_description = [
    {
        label: 'Familia Nuclear',
        description: 'Formada por dos progenitores (padre y madre) y sus hijos biológicos. Esta es la estructura familiar más tradicional y común en muchas sociedades.'
    },
    {
        label: 'Familia Monoparental',
        description: 'Consiste en un solo progenitor (ya sea padre o madre) que es responsable de la crianza y el cuidado de los hijos. Puede ser resultado de divorcio, viudez, o decisión de tener hijos sin pareja.'
    },
    {
        label: 'Familia Extendida',
        description: 'Incluye no solo a los padres e hijos, sino también a otros parientes cercanos como abuelos, tíos, tías, primos, y en algunos casos, familiares más lejanos. Esta estructura puede brindar un sistema de apoyo más amplio y una red de cuidado más extensa.'
    },
    {
        label: 'Familia Reconstruida o Reconstituida',
        description: 'Se forma cuando uno o ambos progenitores tienen hijos de relaciones anteriores y se vuelven a casar o establecen una nueva pareja. Los hijos pueden ser biológicos de uno o ambos padres o adoptados.'
    },
    {
        label: 'Familia Homoparental',
        description: 'Compuesta por una pareja del mismo sexo y sus hijos, ya sean biológicos, adoptivos o de relaciones anteriores. Esta estructura se ha vuelto más común con el reconocimiento legal del matrimonio entre personas del mismo sexo y la adopción por parte de parejas homosexuales.'
    },
    {
        label: 'Familia de Crianza o Adoptiva',
        description: 'Se forma cuando una persona o pareja adopta legalmente a uno o más niños, o cuando cuida temporalmente a niños que no son biológicamente suyos, pero que necesitan un hogar seguro y amoroso.'
    },
    {
        label: 'Familia Compuesta',
        description: 'Se caracteriza por la presencia de dos o más núcleos familiares que se fusionan en una sola unidad. Esto puede ocurrir cuando dos familias se unen a través del matrimonio o la convivencia, y cada una trae consigo hijos de relaciones anteriores.'
    }
];
const baseSibling = { age: '', name: '', studying: false }
export const SocioeconomicData = ({ data, setData }) => {

    /**
     * Handles the changes in the socioeconomic data based on the event target.
     * If the event target is a checkbox, it updates the `student_partners` array in the `data` object accordingly.
     * @param {Event} e - The event object triggered by the change.
     */
    const handleSocioeconomicData = (e) => {
        const newData = { ...data }
        if (e.target.name === 'student_partners') {
            if (e.target.checked) {
                newData.socioeconomic_data.student_partners = [...newData.socioeconomic_data.student_partners, e.target.value]
            } else {
                newData.socioeconomic_data.student_partners = newData.socioeconomic_data.student_partners.filter(partner => partner !== e.target.value)
            }
            setData(newData)
            return
        }

        newData.socioeconomic_data[e.target.name] = e.target.value
        setData(newData)
    }

    const newSibling = () => {
        const newSiblingData = { ...data }
        newSiblingData.socioeconomic_data.siblings.push(baseSibling);
        setData(newSiblingData);
    };
    const setSiblingData = (item, index, value) => {
        const newSiblingData = { ...data }
        newSiblingData.socioeconomic_data.siblings[index][item] = value;

        setData(newSiblingData)
    }
    return (
        <MainFormFieldset legend="Datos socioeconómicos del estudiante">

            {
                studentPartnersOptions?.map((partner, index) =>
                    <label key={index} htmlFor={partner.key} className="ml-2 col-span-2 md:col-span-1">

                        <Checkbox
                            id={partner.key}
                            name="student_partners"
                            value={partner.key}
                            onChange={handleSocioeconomicData}
                            checked={data?.socioeconomic_data?.student_partners.includes(partner.key)}
                            className='mr-2'
                        />
                        <b> {partner.label}</b>: {partner.description}
                    </label>
                )
            }


            <legend className='text-lg font-semibold py-6 col-span-2 md:col-span-1'>
                Nombres de hermanos/as y edades:
            </legend>
            <>
                {data.socioeconomic_data?.siblings.map((_, index) => (
                    <div key={index} className="grid grid-cols-2 md:grid-cols-5  gap-4 col-span-2 justify-between mt-2">

                        <label htmlFor={`name_${index}`} className="font-bold text-xs col-span-2 md:col-span-2">
                            Nombre completo <span>*</span>
                            <InputText
                                id={`name_${index}`}
                                name="name"
                                required
                                className='rounded-md w-full placeholder:font-normal'
                                value={data?.socioeconomic_data?.siblings[index]?.name}
                                onChange={(e) => setSiblingData('name', index, e.target.value)}
                                placeholder="Ingrese el nombre completo"
                            />
                        </label>

                        <label htmlFor={`age_${index}`} className="font-bold text-xs col-span-2 md:col-span-1">
                            Edad <span>*</span>
                            <InputText
                                id={`age_${index}`}
                                name={`age_${index}`}
                                type="number"
                                required
                                className='rounded-md w-full placeholder:font-normal'
                                value={data?.socioeconomic_data?.siblings[index]?.age}
                                onChange={(e) => setSiblingData('age', index, e.target.value)}
                                placeholder="Ingrese la edad"
                            />
                        </label>

                        <label htmlFor={`studying_${index}`} className='w-full md:mt-2 col-span-2 md:col-span-2 flex items-center'>
                            <Checkbox
                                id={`studying_${index}`}
                                className='mr-2 '
                                checked={data?.socioeconomic_data?.siblings[index]?.studying}
                                onChange={(e) => setSiblingData('studying', index, e.target.checked)}
                            />
                            Actualmente estudia en esta institución
                        </label>
                    </div>
                ))}

                <div className='w-full flex justify-end col-span-2'>
                    <button type='button' onClick={newSibling} className='px-5 rounded-md bg-sky-400 py-2'>
                        Agregar hermano
                    </button>
                </div>
            </>

            <label htmlFor="birth_order" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Lugar que ocupa en la familia (Posición de nacimiento en relación a los hermanos )
                <span>*</span>

                <InputText
                    id="birth_order"
                    name="birth_order"
                    value={data?.socioeconomic_data?.birth_order}
                    type='number'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={(e) => setData({ ...data, socioeconomic_data: { ...data.socioeconomic_data, birth_order: e.target.value } })}
                    placeholder="Ingrese el lugar que ocupa en la familia"
                />
            </label>


            <label htmlFor="disabled" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Familiares con algún tipo de discapacidad
                <InputText
                    id={`disabled`}
                    name="disabled" // Add name attribute
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    value={data?.socioeconomic_data?.disabled}
                    onChange={(e) => setData({ ...data, socioeconomic_data: { ...data.socioeconomic_data, disabled: e.target.value } })}
                    placeholder="Determinar quién y la discapacidad con porcentaje"
                />
            </label>

            <legend className='text-lg font-semibold py-6 col-span-2'>
                Descripción de la estructura familiar:
            </legend>
            {
                family_description.map((family, index) =>

                    <label key={index} htmlFor={index} className="ml-2 col-span-2 md:col-span-1">
                        <InputText
                            required
                            id={index}
                            type='radio'
                            name='family'
                            value={family?.label}
                            className='mr-2'
                            checked={data?.socioeconomic_data?.family === family?.label}
                            onChange={handleSocioeconomicData}
                        />
                        <b>{family?.label}</b>: {family?.description}
                    </label>

                )
            }

        </MainFormFieldset>
    )
}
SocioeconomicData.propTypes = {
    data: PropType.object.isRequired,
    setData: PropType.func.isRequired
}