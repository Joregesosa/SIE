import React from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css"; // Puedes cambiar el tema según tus preferencias
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputMask } from "primereact/inputmask";

const InputPhoneType = ({
    tel_id,
    tel_name,
    tel_value = '',
    placeholder,
    type_id,
    type_name,
    type_value = 1,
    onChange,
    required,
    className,
}) => {
    const phoneTypes = [
        { id: 1, name: "Celular", code: "MOBILE", icon: "pi pi-mobile" },
        { id: 2, name: "Trabajo", code: "OFFICE", icon: "pi pi-briefcase" },
        { id: 3, name: "Casa", code: "HOME", icon: "pi pi-home" },
        { id: 4, name: "Otro", code: "OTHER", icon: "pi pi-phone" },
    ];

    const selectedPhoneTypeTemplate = (option) => {
        if (option) {
            return (
                <div className="flex items-center h-full">
                    <i className={`${option.icon} `}></i>
                </div>
            );
        }

        return <span>{placeholder}</span>;
    };

    const phoneTypeOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <i className={`${option.icon} mr-2`}></i>
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div
            className={`card flex border border-black overflow-hidden ${className}`}
        >
            <InputMask
                id={tel_id}
                name={tel_name}
                value={tel_value}
                type="tel"
                required
                className="w-full  border-0 border-e-[1px] border-e-gray-600"
                mask="(999) 999-9999"
                onChange={onChange}
                placeholder={placeholder}
            />

            <Dropdown
                id={type_id}
                name={type_name}
                value={type_value || 1}
                onChange={onChange}
                options={phoneTypes}
                optionLabel="name"
                optionValue="id"
                valueTemplate={selectedPhoneTypeTemplate}
                itemTemplate={phoneTypeOptionTemplate}
                className="small-dropdown"
                required={required}
                style={{ width: "4rem" }}
            />
        </div>
    );
};

export default InputPhoneType;
