import React from 'react';
import { useForm } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FormActionButtons } from '../FormActionButtons';
import { InputTextarea } from 'primereact/inputtextarea';

const cleanUser = { permission: '', description: '' }
export default function NewPermission({ showDialog, hideDialog }) {
    const { data, setData, post, processing, errors, reset } = useForm(cleanUser);

    const submit = (e) => {
        e.preventDefault();
        hideDialog()
        setData(cleanUser)
        post(route('permission.store'), {
            onSuccess: () => {
                console.log('created')
            }
        });
    };

    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Nuevo Permiso" modal className="p-fluid" onHide={hideDialog} >

            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-3'>
                    <div className="field">
                        <label htmlFor="permission" className="font-bold text-xs">
                            Permiso
                        </label>
                        <InputText id="permission" value={data?.permission} required className='rounded-md' onChange={(e) => setData('permission', e.target.value)} placeholder='Nombre del permiso' />
                    </div>
                    <div className="field">
                        <label htmlFor="description" className="font-bold text-xs">
                            Descripción
                        </label>
                        <InputTextarea id="description" value={data?.description} onChange={(e) => setData('description', e.target.value)} className='rounded-md resize-none' placeholder='Descripcion del permiso' />
                    </div>

                </div>
                <FormActionButtons hideDialog={hideDialog} />
            </form>
        </Dialog>
    )
}
