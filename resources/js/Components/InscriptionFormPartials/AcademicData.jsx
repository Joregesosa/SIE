import { InputText } from "primereact/inputtext";
import { MainFormFieldset } from "./MainFormFieldset";
<<<<<<< get_data_all
import PropTypes from "prop-types";
export const AcademicData = ({ data, setData }) => {
=======
import PropTypes from 'prop-types';

export const AcademicData = ({data, setData, errorHandling}) => {
>>>>>>> dev
    const handleAcademicData = (e) => {
        setData({
            ...data,
            academic_data: {
                ...data.academic_data,
                [e.target.name]: e.target.value,
            },
        });
    };

    return (
        <MainFormFieldset legend="DATOS ACADÉMICOS/RENDIMIENTO ESCOLAR">
            <label
                htmlFor="entry_date"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Fecha de ingreso a la institución por primera vez
                <span>*</span>
                <InputText
                    id="entry_date"
                    name="entry_date"
                    value={data?.academic_data?.entry_date}
                    type="date"
                    required
<<<<<<< get_data_all
                    className="rounded-md w-full"
=======
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Entry Date"
                />
                {errorHandling?.entry_date && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="previous_institution"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Institución educativa de la que procede
                <InputText
                    id="previous_institution"
                    name="previous_institution"
<<<<<<< get_data_all
                    value={data?.academic_data.previous_institution}
                    className="rounded-md w-full"
=======
                    value={data?.academic_data?.previous_institution}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Previous Institution"
                />
                {errorHandling?.previous_institution && <span className="text-red-500 text-xs">Este campo es requerido</span> }
            </label>

            <label
                htmlFor="repeated_years"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                El estudiante ha repetido años (especificar cuáles y razones)
                <InputText
                    id="repeated_years"
                    name="repeated_years"
<<<<<<< get_data_all
                    value={data?.academic_data.repeated_years}
                    className="rounded-md w-full"
=======
                    value={data?.academic_data?.repeated_years}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Repeated Years"
                />
                {errorHandling?.repeated_years && <span className="text-red-500 text-xs">Este campo es requerido</span> }
            </label>

            <label
                htmlFor="preferred_subjects"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Asignaturas de preferencia del estudiante
                <InputText
                    id="preferred_subjects"
                    name="preferred_subjects"
<<<<<<< get_data_all
                    value={data?.academic_data.preferred_subjects}
                    className="rounded-md w-full"
=======
                    value={data?.academic_data?.preferred_subjects}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Preferred Subjects"
                />
                {errorHandling?.preferred_subjects && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="difficult_subjects"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Asignaturas en las que ha tenido dificultad
                <InputText
                    id="difficult_subjects"
                    name="difficult_subjects"
<<<<<<< get_data_all
                    value={data?.academic_data.difficult_subjects}
                    className="rounded-md w-full"
=======
                    value={data?.academic_data?.difficult_subjects}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Difficult Subjects"
                />
                {errorHandling?.difficult_subjects && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label
                htmlFor="dignities"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Logros académicos
                <InputText
                    id="dignities"
                    name="dignities"
                    value={data?.academic_data.dignities}
                    className="rounded-md w-full"
                    onChange={handleAcademicData}
                    placeholder="dignities"
                />
            </label>

            <label htmlFor="achievements" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Dignidades alcanzadas
                <InputText
                    id="achievements"
                    name="achievements"
<<<<<<< get_data_all
                    value={data?.academic_data.achievements}
                    className="rounded-md w-full"
=======
                    value={data?.academic_data?.achievements}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Achievements"
                />
                {errorHandling?.achievements && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

<<<<<<< get_data_all
            <label
                htmlFor="extracurriculars"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
=======
            <label htmlFor="participation" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Logros académicos
                <InputText
                    id="participation"
                    name="participation"
                    value={data?.academic_data?.participation}
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleAcademicData}
                    placeholder="Participation"
                />
                {errorHandling?.participation && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>

            <label htmlFor="extracurriculars" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
>>>>>>> dev
                Participación en Extracurriculares
                <InputText
                    id="extracurriculars"
                    name="extracurriculars"
<<<<<<< get_data_all
                    value={data?.academic_data.extracurriculars}
                    className="rounded-md w-full"
=======
                    value={data?.academic_data?.extracurriculars}
                    className='rounded-md w-full placeholder:font-normal'
>>>>>>> dev
                    onChange={handleAcademicData}
                    placeholder="Extracurriculars"
                />
                {errorHandling?.extracurriculars && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </label>
        </MainFormFieldset>
    );
};
AcademicData.prototype = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
};
