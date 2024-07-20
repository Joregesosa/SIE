import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FormActionButtons } from '../FormActionButtons';

const cleanUser = { role: '', permissions: [] }
export function New({ showDialog, hideDialog, permissions }) {
    console.log(permissions)
    const { data, setData, post, processing, errors, reset } = useForm(cleanUser);

    const submit = (e) => {
        e.preventDefault();
        hideDialog()
        setData(cleanUser)
        post(route('role.store'), {
            onSuccess: () => {
                console.log('created')
            }
        });
    };
    const onChange = (e) => {
        setData({ ...data, permissions: e.value });
    };
    const itemTemplate = (item) => {
        return (
            <div className="flex flex-col align-items-center gap-3">
                <span className='font-semibold text-sky-700'>{item.permission}</span>
            </div>
        );
    };

    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Nuevo Rol" modal className="p-fluid" onHide={hideDialog} >

            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-3'>

                    <label htmlFor="role" className="font-bold text-xs">
                        Rol
                        <InputText id="role" value={data?.role} required className='rounded-md' onChange={(e) => setData('role', e.target.value)} placeholder='Nombre del permiso' />
                    </label>

                    <ul className='w-full'>
                        {/* {permissions && permissions.map((permission, index) => (
                            <li key={index} className='flex justify-between p-2'>
                                <span className=''>{permission.name}</span>
                                <input type="checkbox" value={permission.id} onChange={(e) => {
                                    if (e.target.checked) {
                                        setData('permissions', [...data.permissions, e.target.value])
                                    } else {
                                        setData('permissions', data.permissions.filter((item) => item !== e.target.value))
                                    }
                                }} />
                            </li>
                        ))} */}
                    </ul>


                </div>
                <FormActionButtons hideDialog={hideDialog} />
            </form>
        </Dialog>
    )
}
