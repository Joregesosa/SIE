import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';


export default function NewUser({ showDialog, actionFooter, hideDialog }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: '',
        secondName: '',
        fLastName: '',
        sLastName: '',
        email: '',
        rol: '',
        status: false,
    });
    useEffect(() => {
        
    }, [data])
    const roles = [
        { rol: 'Estudiante', id: '1' },
        { rol: 'Maestro', id: '2' },
        { rol: 'Gerencia', id: '3' },
        { rol: 'Psicologia', id: '4' },
    ];
    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };


    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Nuevo Usuario" modal className="p-fluid" footer={actionFooter} onHide={hideDialog}>
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
                        <InputText id="sLastName" value={data?.sLastName} className='rounded-md' />

                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className="field">
                        <label htmlFor="email" className="font-bold text-xs">
                            Correo
                        </label>
                        <InputText id="email" type='email' value={data?.email} required autoFocus onChange={(e) => setData('email', e.target.value)} className='rounded-md' />
                    </div>
                    <div className="field">
                        <label htmlFor="userName" className="font-bold text-xs">
                            Nombre de usuario
                        </label>
                        <InputText id="userName" value={data?.userName} required onChange={(e) => setData('userName', e.target.value)} className='rounded-md' readOnly />
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div className="field flex-grow ">
                        <label htmlFor="rol" className="font-bold text-xs">
                            Rol
                        </label>
                        <Dropdown value={data?.rol} onChange={(e) => setData('rol', (e.target.value === 'Activo'))} options={roles} optionLabel="rol" placeholder="Select a Role"
                            filter className="flex items-center border h-[42px] border-gray-500 flex-grow" />
                    </div>

                    <div className="card flex flex-col">
                        <label htmlFor="rol" className="font-bold text-xs">
                            Estado
                        </label>
                        <SelectButton value={data?.status ? 'Activo' : 'Inactivo'} onChange={(e) => { setData('status', e.target.value) }} options={['Activo', 'Inactivo']} className='h-[42px] mt-2 border border-gray-500 rounded-md' />
                    </div>
                </div>

            </form>
        </Dialog>
    )
}
