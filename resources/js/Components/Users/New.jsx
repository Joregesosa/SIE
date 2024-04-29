import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';


export default function NewUser({ showDialog, hideDialog }) {
    const cleanUser = {
        firstName: '',
        secondName: '',
        fLastName: '',
        sLastName: '',
        email: '',
        rol: '',
    }
    const { data, setData, post, processing, errors, reset } = useForm(cleanUser);
    const roles = [
        { rol: 'Estudiante', id: '1' },
        { rol: 'Maestro', id: '2' },
        { rol: 'Gerencia', id: '3' },
        { rol: 'Psicologia', id: '4' },
    ];

    const submit = (e) => {
        e.preventDefault();
        hideDialog()
        setData(cleanUser)
        post(route('register'), {
            onSuccess: () => {
                    console.log('created')
            }
        });
    };

    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Nuevo Usuario" modal className="p-fluid" onHide={hideDialog}>
            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='flex gap-3'>
                    <div className="field">
                        <label htmlFor="firstName" className="font-bold text-xs">
                            Primer nombre
                        </label>
                        <InputText id="firstName" value={data?.firstName} required className='rounded-md' onChange={(e) => setData('firstName', e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="secondName" className="font-bold text-xs">
                            Segundo nombre
                        </label>
                        <InputText id="secondName" value={data?.secondName} onChange={(e) => setData('secondName', e.target.value)} className='rounded-md' />
                    </div>

                </div>
                <div className='flex gap-3'>
                    <div className="field">
                        <label htmlFor="fLastName" className="font-bold text-xs">
                            Primer apellido
                        </label>
                        <InputText id="fLastName" value={data?.fLastName} required className='rounded-md' onChange={(e) => setData('fLastName', e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="sLastName" className="font-bold text-xs">
                            Segundo apellido
                        </label>
                        <InputText id="sLastName" value={data?.sLastName} className='rounded-md' onChange={(e) => setData('sLastName', e.target.value)} />

                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className="field">
                        <label htmlFor="email" className="font-bold text-xs">
                            Correo
                        </label>
                        <InputText id="email" type='email' value={data?.email} required onChange={(e) => setData('email', e.target.value)} className='rounded-md' />
                    </div>

                    <div className="field flex-grow ">
                        <label htmlFor="rol" className="font-bold text-xs">
                            Rol
                        </label>
                        <Dropdown value={data?.rol} onChange={(e) => setData('rol', (e.target.value))} options={roles} optionLabel="rol" placeholder="Select a Role"
                            filter className="flex items-center border h-[42px] border-gray-500 flex-grow" />
                    </div>

                </div>

                <div className='flex justify-end pt-4'>
                    <Button typeof='button' label="Cancelar" icon="pi pi-times" outlined onClick={hideDialog} className='mx-3 w-fit' />
                    <Button type='submit' label="Aceptar" icon="pi pi-check" className='mx-3 w-fit' />
                </div>
            </form>
        </Dialog>
    )
}
