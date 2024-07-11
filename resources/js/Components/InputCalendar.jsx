import React from 'react';
import { Calendar } from 'primereact/calendar';
import { format } from 'date-fns';
//import { es } from 'date-fns/locale';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';  // Estilos principales de PrimeReact
import 'primeicons/primeicons.css';  // Iconos de PrimeReact
import { locale, addLocale } from "primereact/api";


const InputCalendar = ({
    inputId,
    name,
    value,
    onChange,
    required = false,
    maxDate = new Date(),
    placeholder = "Ingrese la fecha",
    className = "",
    inputClassName = "",
}) => {

    addLocale("es", {
        firstDayOfWeek: 1,
        dayNames: [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],
        monthNamesShort: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
        ],
        today: "Hoy",
        clear: "Limpiar",
    });



    const handleDateChange = (e) => {
        const formattedDate = e.value ? format(new Date(e.value), 'yyyy-MM-dd') : '';
        onChange({ target: { name, value: formattedDate } });
    };

    return (
        <Calendar
            inputId={inputId}
            name={name}
            dateFormat="yy-mm-dd"
            value={value ? new Date(value) : null}
            required={required}
            locale='es'
            maxDate={maxDate}
            className={` ${className}`}
            inputClassName={` ${inputClassName}`}
            onChange={handleDateChange}
            placeholder={placeholder}
        />
    );
};

export default InputCalendar;
