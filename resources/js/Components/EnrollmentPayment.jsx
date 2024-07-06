import { useForm } from '@inertiajs/inertia-react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import React from 'react'
import { FormActionButtons } from './FormActionButtons';
import { Loading } from './Loading';

export const EnrollmentPayment = ({ student, setStudent, handleSubmit,}) => {

    const closeDialog = () => {
        setStudent({ ...student, show: false});
    }

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setData({
            ...student,
            [name]: value
        })

    }

    return (
        <Dialog visible={student?.show} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Pago de matricula" modal className="w-[32rem]" onHide={closeDialog}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="student" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                    Nombre del estudiante
                    <InputText
                        id="student"
                        name="student"
                        value={student.student}
                        type='text'
                        required
                        className='rounded-md w-full placeholder:font-normal'
                        readOnly

                    />
                </label>
                <label htmlFor="amount" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                    Monto
                    <InputText
                        id="amount"
                        name="amount"
                        value={student.amount}
                        type='number'
                        required
                        className='rounded-md w-full placeholder:font-normal'
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="date" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                    Fecha
                    <InputText
                        id="date"
                        name="date"
                        value={student.date}
                        type='date'
                        required
                        className='rounded-md w-full placeholder:font-normal'
                        onChange={handleChanges}
                    />
                </label>


                <fieldset className='mt-4'>
                    <legend className="text-sm font-bold">Método de pago</legend>
                    <label htmlFor="cash" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                        Efectivo
                        <InputText
                            id="cash"
                            name="method"
                            defaultValue={1}
                            checked={student.method == 1}
                            type='radio'
                            required
                            className="ml-4"
                            onChange={handleChanges}
                        />
                    </label>
                    <label htmlFor="transf" className="mt-2 font-bold text-xs col-span-2 md:col-span-1 px-4">
                        Transferencia
                        <InputText
                            id="transf"
                            name="method"
                            defaultValue={2}
                            checked={student.method == 2}
                            type='radio'
                            required
                            className="ml-4"
                            onChange={handleChanges}
                        />
                    </label>
                </fieldset>

                {student.method == 2 &&
                    <label htmlFor="reference" className="my-4 font-bold text-xs col-span-2 md:col-span-1">
                        Referencia
                        <InputText
                            id="reference"
                            name="reference"
                            value={""}
                            type='text'
                            required
                            placeholder="Referencia de la transacción"
                            className='rounded-md w-full placeholder:font-normal'
                            onChange={handleChanges}
                        />
                    </label>
                }
                <FormActionButtons hideDialog={closeDialog} />
            </form>
        </Dialog>
    )
}
