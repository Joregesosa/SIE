import React, { useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown';
import { MainFormFieldset } from '../InscriptionFormPartials/MainFormFieldset';



export default function New({ data, setData }) {
    const handleChange = (e) => {
        setData({ ...data, user: { ...data.user, [e.target.name]: e.target.value } })
    }
    return (
        <MainFormFieldset legend="Agregar usuario">

            <label htmlFor="email" className="font-bold text-xs">
                Correo
                <InputText
                    id="email"
                    name='email'
                    type='email'
                    value={data?.user?.email || ''} required
                    onChange={handleChange}
                    className='rounded-md w-full placeholder:font-normal' placeholder='Correo del alumno' />
            </label>

            <label htmlFor="status" className="font-bold text-xs">
                Estado

                <Dropdown
                    name='status'
                    inputId='status'
                    value={data?.user?.status || 1}
                    onChange={handleChange}
                    options={status}
                    optionLabel="status"
                    optionValue="id"
                    placeholder="Select a status"
                    className="flex items-center border h-[42px] border-gray-500 flex-grow" />

            </label>
        </MainFormFieldset>
    )
}

const status = [
    { status: 'Activo', id: 1 },
    { status: 'Inactivo', id: 2 }
]
