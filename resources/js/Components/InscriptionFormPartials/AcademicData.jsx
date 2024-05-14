import { InputText } from "primereact/inputtext";
import { MainFormFieldset } from "./MainFormFieldset";
import PropTypes from 'prop-types';
export const AcademicData = ({data, setData}) => {
    const handleAcademicData = (e) => {
        setData({ ...data, academic_data: { ...data.academic_data, [e.target.name]: e.target.value } })
    }

    return (
        <MainFormFieldset legend="DATOS ACADÉMICOS/RENDIMIENTO ESCOLAR">

            <label htmlFor="entry_date" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Fecha de ingreso a la institución por primera vez
                <span>*</span>
                <InputText
                    id="entry_date"
                    name="entry_date"
                    value={data?.academic_data?.entry_date}
                    type='date'
                    required
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Entry Date"
                />
            </label>

            <label htmlFor="previous_institution" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Institución educativa de la que procede
                <InputText
                    id="previous_institution"
                    name="previous_institution"
                    value={data?.academic_data.previous_institution}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Previous Institution"
                />
            </label>

            <label htmlFor="repeated_years" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                El estudiante ha repetido años (especificar cuáles y razones)
                <InputText
                    id="repeated_years"
                    name="repeated_years"
                    value={data?.academic_data.repeated_years}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Repeated Years"
                />
            </label>

            <label htmlFor="preferred_subjects" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Asignaturas de preferencia del estudiante
                <InputText
                    id="preferred_subjects"
                    name="preferred_subjects"
                    value={data?.academic_data.preferred_subjects}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Preferred Subjects"
                />
            </label>

            <label htmlFor="difficult_subjects" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Asignaturas en las que ha tenido dificultad
                <InputText
                    id="difficult_subjects"
                    name="difficult_subjects"
                    value={data?.academic_data.difficult_subjects}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Difficult Subjects"
                />
            </label>

            <label htmlFor="achievements" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Dignidades alcanzadas
                <InputText
                    id="achievements"
                    name="achievements"
                    value={data?.academic_data.achievements}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Achievements"
                />
            </label>

            <label htmlFor="participation" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Logros académicos
                <InputText
                    id="participation"
                    name="participation"
                    value={data?.academic_data.participation}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Participation"
                />
            </label>

            <label htmlFor="extracurriculars" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Participación en Extracurriculares
                <InputText
                    id="extracurriculars"
                    name="extracurriculars"
                    value={data?.academic_data.extracurriculars}
                    className='rounded-md w-full'
                    onChange={handleAcademicData}
                    placeholder="Extracurriculars"
                />
            </label>
        </MainFormFieldset>
    )
}
AcademicData.prototype = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
}
