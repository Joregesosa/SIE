import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';
import { MainFormFieldset } from './MainFormFieldset';

const structural_integrity_option =
    [
      
        { id: 1, label: "Propia" },
        { id: 2, label: "Arrendada" },
        { id: 3, label: "Prestada" },
        { id: 4, label: "Anticresis" },
        { id: 5, label: "Con préstamo" }

    ]
export const FinancialReferences = ({ data, setData }) => {
    const handleFinancialReferences = (e) => {

        setData({ ...data, financial_references: { ...data.financial_references, [e.target.name]: e.target.value } })
    }

    return (
        <MainFormFieldset
            legend="REFERENCIAS SOCIOECONÓMICAS GENERALES"
            description="Ingresos/egresos de los miembros de la familia, Condición de la vivienda, Servicios">

            <label htmlFor="father_incomes" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Ingresos de Padre <span>*</span>
                <InputText
                    id="father_incomes"
                    name="father_incomes"
                    value={data?.father_data?.incomes}
                    type='number'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                   /*  onChange={handleFinancialReferences} */
                    onChange={(e) => setData({
                        ...data,
                        father_data: {
                          ...data.father_data,
                          incomes: e.target.value
                        }
                      })}
                    placeholder="Ingresos de Padre"
                />
            </label>
            <label htmlFor="mother_incomes" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Ingresos de Madre <span>*</span>

                <InputText
                    id="mother_incomes"
                    name="mother_incomes"
                    value={data?.mother_data?.incomes}
                    type='number'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    /* onChange={handleFinancialReferences} */
                    onChange={(e) => setData({
                        ...data,
                        mother_data: {
                          ...data.mother_data,
                          incomes: e.target.value
                        }
                      })}
                    placeholder="Ingresos de Madre"
                />
            </label>
            <label htmlFor="other_incomes" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Otros Ingresos <span>*</span>

                <InputText
                    id="other_incomes"
                    name='other_incomes'
                    value={data?.tutor_data?.incomes}
                    type='number'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                   /*  onChange={handleFinancialReferences} */
                   onChange={(e) => setData({
                    ...data,
                    tutor_data: {
                        ...data.tutor_data,
                      incomes: e.target.value
                    }
                  })}
                    placeholder="Ingrese el lugar que ocupa en la familia"
                />
            </label>
            <label htmlFor="total_outcomes" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Total de Egresos <span>*</span>

                <InputText
                    id="total_outcomes"
                    name="total_outcomes"
                    value={data?.financial_references?.total_outcomes}
                    type='number'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFinancialReferences}
                    placeholder="Total de Egresos"
                />
            </label>

            <label  className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Condición de la vivienda <span>*</span>

                <Dropdown
                id='structural_integrity'
                    value={data?.financial_references?.structural_integrity}
                    name='structural_integrity'
                    onChange={handleFinancialReferences}
                    optionValue="id"
                    options={structural_integrity_option}
                    placeholder="Condición de la vivienda"
                    filter
                    className="flex items-center border h-[42px] border-gray-500 flex-grow" />
            </label>
            <label htmlFor="living_description" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                Breve descripción de la vivienda: (casa, departamento, cuarto, etc.) <span>*</span>

                <InputText
                    id="living_description"
                    name='living_description'
                    value={data?.financial_references?.living_description}
                    type='text'
                    required
                    className='rounded-md w-full placeholder:font-normal'
                    onChange={handleFinancialReferences}
                    placeholder="Descripción de la vivienda"
                />
            </label>
        </MainFormFieldset>
    )

}
FinancialReferences.propTypes = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired
}