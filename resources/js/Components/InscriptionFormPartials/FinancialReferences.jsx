import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import { MainFormFieldset } from "./MainFormFieldset";

export const FinancialReferences = ({
    data,
    setData,
    errorHandling,
    information,
}) => {
    const handleFinancialReferences = (e) => {
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
                htmlFor="father_incomes"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Ingresos de Padre <span>*</span>
                <InputText
                    id="father_incomes"
                    name="father_incomes"
                    value={data?.father_data?.income}
                    type="number"
                    required
                    className="rounded-md w-full placeholder:font-normal"
                    onChange={handleFinancialReferences}
                    placeholder="Ingresos de Padre"
                />
                {errorHandling?.father_incomes && (
                    <span className="text-red-500 text-xs">
                        Este campo es requerido
                    </span>
                )}
            </label>
            <label
                htmlFor="mother_incomes"
                className="mt-2 font-bold text-xs col-span-2 md:col-span-1"
            >
                Ingresos de Madre <span>*</span>
                <InputText
                    id="mother_incomes"
                    name="mother_incomes"
                    value={data?.mother_data?.income}
                    type="number"
                    required
                    className="rounded-md w-full placeholder:font-normal"
                    onChange={handleFinancialReferences}
                    placeholder="Ingresos de Madre"
                />
                {errorHandling?.mother_incomes && (
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
                <InputText
                    id="other_incomes"
                    name="other_incomes"
                    value={data?.financial_references?.other_incomes}
                    type="number"
                    required
                    className="rounded-md w-full placeholder:font-normal"
                    onChange={handleFinancialReferences}
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
                <InputText
                    id="expenditure"
                    name="expenditure"
                    value={data?.financial_references?.expenditure}
                    type="number"
                    required
                    className="rounded-md w-full placeholder:font-normal"
                    onChange={handleFinancialReferences}
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
                    className="flex items-center border h-[42px] border-gray-500 flex-grow"
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
                    className="rounded-md w-full placeholder:font-normal"
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
