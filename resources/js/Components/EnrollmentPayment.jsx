import { useForm } from '@inertiajs/inertia-react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import React, { useEffect } from 'react'
import { FormActionButtons } from './FormActionButtons';

export const EnrollmentPayment = ({ request, setPayment }) => {

    const closeDialog = () => {
        setPayment({});
    }

    const { data, setData, post, processing, errors, reset } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("payment.store"));
    };

    useEffect(() => {
        console.log(request)
        setData({
            contact_id: request?.id,
            student: request?.full_Name,
            amount: request?.level?.enrollment_fee,
            date: new Date().toISOString().split('T')[0],
            method: 1,
            reference: ''
        })

    }, [request])

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })

    }

    return (
        <Dialog visible={Object.keys(request).length > 0} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Pago de matricula" modal className="w-[32rem]" onHide={closeDialog}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="student" className="mt-2 font-bold text-xs col-span-2 md:col-span-1">
                    Nombre del estudiante
                    <InputText
                        id="student"
                        name="student"
                        value={data.student}
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
                        value={data.amount}
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
                        value={data.date}
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
                            checked={data.method == 1}
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
                            checked={data.method == 2}
                            type='radio'
                            required
                            className="ml-4"
                            onChange={handleChanges}
                        />
                    </label>
                </fieldset>

                {data.method == 2 &&
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
