import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { MainFormFieldset } from "./MainFormFieldset";
import { InputNumber } from "primereact/inputnumber";

export const FinancialReferences = ({
    data,
    setData,
    errorHandling,
    information,
}) => {
    const handleFinancialReferences = (e) => {
        console.log(e.target.name )
        if (e.target.name === "father_incomes") {
            setData({
                ...data,
                financial_references: {
                    ...data.financial_references,
                    [e.target.name]: e.target.value,
                },
                father_data: { ...data.father_data, income: e.target.value },
            });
        } else if (e.target.name === "mother_incomes") {
            setData({
                ...data,
                financial_references: {
                    ...data.financial_references,
                    [e.target.name]: e.target.value,
                },
                mother_data: { ...data.mother_data, income: e.target.value },
            });
        } else {
            setData({
                ...data,
                financial_references: {
                    ...data.financial_references,
                    [e.target.name]: e.target.value,
                },
            });
        }
    };
   
    return (
        <MainFormFieldset
            legend="REFERENCIAS SOCIOECONÓMICAS GENERALES"
            description="Ingresos/egresos de los miembros de la familia, Condición de la vivienda, Servicios"
        >
           
            <label
                htmlFor="mother_incomes"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Ingresos de Madre <span>*</span>
                <InputNumber
                    disabled={data?.mother_data ? false : true}
                    mode="currency"
                    currency="USD"
                    inputId="integeronly"
                    id="mother_incomes"
                    name="mother_incomes"
                    maxFractionDigits={0}
                    value={data?.mother_data?.income}
                    required
                    className="rounded-md  w-full placeholder:font-normal  "
                    inputClassName="rounded-md  w-full placeholder:font-normal  "
                    onValueChange={handleFinancialReferences}
                    placeholder="Ingresos de la Madre"
                />
                {errorHandling?.mother_incomes && (
                    <span className="text-red-500 text-xs">
                        Este campo es requerido
                    </span>
                )}
            </label>
            <label
                htmlFor="father_incomes"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Ingresos de Padre <span>*</span>
                <InputNumber
                    disabled={data?.father_data ? false : true}
                    mode="currency"
                    currency="USD"
                    inputId="integeronly"
                    maxFractionDigits={0}
                    required
                    className="rounded-md  w-full placeholder:font-normal  "
                    inputClassName="rounded-md  w-full placeholder:font-normal  "
                    onValueChange={handleFinancialReferences}
                    id="father_incomes"
                    name="father_incomes"
                    value={data?.father_data?.income}
                    placeholder="Ingresos de Padre"
                />
                {errorHandling?.father_incomes && (
                    <span className="text-red-500 text-xs">
                        Este campo es requerido
                    </span>
                )}
            </label>
              <label
                htmlFor="other_incomes"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Otros Ingresos <span>*</span>
                 <InputNumber 
                    mode="currency"
                     currency="USD" 
                    id="other_incomes"
                    name="other_incomes"
                    inputId="integeronly"
                    maxFractionDigits={0}
                    value={data?.financial_references?.other_incomes}
                    required
                    className="rounded-md  w-full placeholder:font-normal  "
                    inputClassName="rounded-md  w-full placeholder:font-normal  "
                    onValueChange={handleFinancialReferences}
                     placeholder="Otros Ingresos"
                />

                {errorHandling?.other_incomes && (
                    <span className="text-red-500 text-xs">
                        Este campo es requerido
                    </span>
                )}
            </label>
            <label
                htmlFor="expenditure"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Total de Egresos <span>*</span>
               
                 <InputNumber 
                    mode="currency"
                     currency="USD" 
                    id="expenditure"
                    name="expenditure"
                    inputId="integeronly"
                    maxFractionDigits={0}
                    value={data?.financial_references?.expenditure}
                    required
                    className="rounded-md  w-full placeholder:font-normal  "
                    inputClassName="rounded-md  w-full placeholder:font-normal  "
                    onValueChange={handleFinancialReferences}
                       placeholder="Total de Egresos"
                />
                {errorHandling?.expenditure && (
                    <span className="text-red-500 text-xs">
                        Este campo es requerido
                    </span>
                )}
            </label>

            <label
                htmlFor="type_house_id"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Condición de la vivienda <span>*</span>
                <Dropdown
                    value={data?.financial_references?.type_house_id}
                    inputId="type_house_id"
                    name="type_house_id"
                    onChange={handleFinancialReferences}
                    optionValue="id"
                    optionLabel="name"
                    options={information.type_houses}
                    placeholder="Condición de la vivienda"
                    filter
                    className="flex rounded-md items-center border h-[42px] border-gray-500 flex-grow"
                />
                {errorHandling?.type_house_id && (
                    <span className="text-red-500 text-xs">
                        Este campo es requerido
                    </span>
                )}
            </label>

            <label
                htmlFor="living_description"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Breve descripción de la vivienda: (casa, departamento, cuarto,
                etc.) <span>*</span>
                <InputText
                    id="living_description"
                    name="living_description"
                    value={data?.financial_references?.living_description}
                    type="text"
                    required
                    className="rounded-md font-normal w-full placeholder:font-normal"
                    onChange={handleFinancialReferences}
                    placeholder="Descripción de la vivienda"
                />
                {errorHandling?.living_description && (
                    <span className="text-red-500 text-xs">
                        Este campo es requerido
                    </span>
                )}
            </label> 
        </MainFormFieldset>
    );
};
FinancialReferences.propTypes = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
};
