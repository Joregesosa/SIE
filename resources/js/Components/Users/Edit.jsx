import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';
import { FormActionButtons } from '../FormActionButtons';

const cleanUser = {
    firstName: '',
    secondName: '',
    fLastName: '',
    sLastName: '',
    email: '',
    rol: '',
    status: false,
}
const options = ['Active', 'Inactive'];
export default function Edit({ selectedItem, showDialog, actionFooter, hideDialog }) {
    const { data, setData, post, processing, errors, reset } = useForm(cleanUser);
    useEffect(() => {
        setData(selectedItem)
    }, [selectedItem])
    const roles = [
        { rol: 'Estudiante', id: '1' },
        { rol: 'Maestro', id: '2' },
        { rol: 'Gerencia', id: '3' },
        { rol: 'Psicología', id: '4' },
    ];

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Editar usuario" modal className="p-fluid" footer={actionFooter} onHide={hideDialog}>
            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='flex gap-3'>
                    <div className="field">
                        <label htmlFor="firstName" className="font-bold text-xs">
                            Primer nombre
                        </label>
                        <InputText id="firstName" value={data.person?.first_name} required autoFocus className='rounded-md' onChange={(e) => setData('firstName', e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="secondName" className="font-bold text-xs">
                            Segundo nombre
                        </label>
                        <InputText id="secondName" value={data.person?.second_name} autoFocus onChange={(e) => setData('secondName', e.target.value)} className='rounded-md' />
                    </div>

                </div>
                <div className='flex gap-3'>
                    <div className="field">
                        <label htmlFor="fLastName" className="font-bold text-xs">
                            Primer apellido
                        </label>
                        <InputText id="fLastName" value={data.person?.fLast_name} required autoFocus className='rounded-md' onChange={(e) => setData('fLastName', e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="sLastName" className="font-bold text-xs">
                            Segundo apellido
                        </label>
                        <InputText id="sLastName" value={data.person?.sLast_name} autoFocus className='rounded-md' />

                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className="field">
                        <label htmlFor="email" className="font-bold text-xs">
                            Correo
                        </label>
                        <InputText id="email" type='email' value={data.email} required autoFocus onChange={(e) => setData('email', e.target.value)} className='rounded-md' disabled />
                    </div>
                    <div className="field">
                        <label htmlFor="userName" className="font-bold text-xs">
                            Nombre de usuario
                        </label>
                        <InputText id="userName" value={data.user_name} required autoFocus onChange={(e) => setData('userName', e.target.value)} className='rounded-md' disabled />
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div className="field flex-grow ">
                        <label htmlFor="rol" className="font-bold text-xs">
                            Rol
                        </label>
                        <Dropdown value={data.rol} onChange={(e) => setData('rol', (e.target.value === 'Activo'))} options={roles} optionLabel="rol" optionValue="id" placeholder="Select a Role"
                            filter className="flex items-center border h-[42px] border-gray-500 flex-grow" />
                    </div>

                    <div className="card flex flex-col justify-content-center">
                        <label className="font-bold text-xs mt-2">
                            Estado
                        </label>
                        <SelectButton value={data.status ? 'Active' : 'Inactive'} onChange={(e) => setData('status', e.value === 'Active')} options={options} className=' h-10' />
                    </div>
                </div>
                <FormActionButtons hideDialog={hideDialog} />
            </form>
        </Dialog>
    )
}
