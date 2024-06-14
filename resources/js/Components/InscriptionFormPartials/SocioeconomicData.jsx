import { InputText } from "primereact/inputtext";
import PropType from 'prop-types';
import { MainFormFieldset } from "./MainFormFieldset";
import Checkbox from "../Checkbox";
import { useEffect } from "react";


const baseSibling = { age: '', name: '', studying: false }
export const SocioeconomicData = ({ data, setData , information }) => {


    /**
     * Handles the changes in the socioeconomic data based on the event target.
     * If the event target is a checkbox, it updates the `student_partners` array in the `data` object accordingly.
     * @param {Event} e - The event object triggered by the change.
     */
    const handleSocioeconomicData = (e) => {

        const newData = { ...data }
        if (e.target.name === 'family_composition_data') {
            if (e.target.checked) {
                newData.socioeconomic_data.family_composition_data = [...newData.socioeconomic_data.family_composition_data, parseInt(e.target.value)]
            } else {
                newData.socioeconomic_data.family_composition_data = newData.socioeconomic_data.family_composition_data.filter(partner => partner != e.target.value)
            }
            setData(newData)
            return
        }

        newData.socioeconomic_data[e.target.name] = e.target.value
        setData(newData)
    }


    const newSibling = () => {
        const newSiblingData = { ...data }
        newSiblingData.socioeconomic_data.siblings_data.push(baseSibling);
        setData(newSiblingData);
    };
    const setSiblingData = (item, index, value) => {
        const newSiblingData = { ...data }
        newSiblingData.socioeconomic_data.siblings_data[index][item] = value;

        setData(newSiblingData)
    }
    return (
        <MainFormFieldset legend="Datos socioeconómicos del estudiante">

            {
                information.parent_types?.map((family, index) =>
                    <label key={index} htmlFor={`fc${family.id}`} className="ml-2 col-span-2 md:col-span-1">

                        <Checkbox
                            id={`fc${family.id}`}
                            name="family_composition_data"
                            value={family.id}
                            onChange={handleSocioeconomicData}
                            checked={data.socioeconomic_data?.family_composition_data.includes(family.id)}
                            className='mr-2'
                        />
                        <b> {family.name}</b>: {family.description}
                    </label>
                )
            }


            <legend className='text-lg font-semibold py-6 col-span-2 md:col-span-1'>
                Nombres de hermanos/as y edades:
            </legend>
            <>
                {data.socioeconomic_data?.siblings_data?.map((_, index) => (
                    <div key={index} className="grid grid-cols-2 md:grid-cols-5  gap-4 col-span-2 justify-between mt-2">

                        <label htmlFor={`name_${index}`} className="font-bold text-xs col-span-2 md:col-span-2">
                            Nombre completo <span>*</span>
                            <InputText
                                id={`name_${index}`}
                                name="name"
                                required
                                className='rounded-md w-full'
                                value={data.socioeconomic_data?.siblings_data[index]?.name}
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
                                className='rounded-md w-full'
                                value={data.socioeconomic_data?.siblings_data[index]?.age}
                                onChange={(e) => setSiblingData('age', index, e.target.value)}
                                placeholder="Ingrese la edad"
                            />
                        </label>

                        <label htmlFor={`studying_${index}`} className='w-full md:mt-2 col-span-2 md:col-span-2 flex items-center'>
                            <Checkbox
                                id={`studying_${index}`}
                                className='mr-2 '
                                checked={data.socioeconomic_data?.siblings_data[index]?.studying}
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


            <label htmlFor="disability_description" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Familiares con algún tipo de discapacidad
                <InputText
                    id={`disability_description`}
                    name="disability_description" // Add name attribute
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    value={data?.socioeconomic_data?.disability_description}
                    onChange={(e) => setData({ ...data, socioeconomic_data: { ...data.socioeconomic_data, disability_description: e.target.value } })}
                    placeholder="Determinar quién y la discapacidad con porcentaje"
                />
            </label>

            <legend className='text-lg font-semibold py-6 col-span-2'>
                Descripción de la estructura familiar:
            </legend>
            {
                information.family_structures.map((family, index) =>

                    <label key={index} htmlFor={index} className="ml-2 col-span-2 md:col-span-1">
                        <InputText
                            required
                            id={index}
                            type='radio'
                            name='family_structure_id'
                            value={family.id}
                            className='mr-2'
                            checked={ parseInt(data.socioeconomic_data?.family_structure_id) == family.id}
                            onChange={handleSocioeconomicData}
                        />
                        <b>{family.name}</b>: {family.description}
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