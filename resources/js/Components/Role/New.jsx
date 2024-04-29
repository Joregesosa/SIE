import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FormActionButtons } from '../FormActionButtons';
import { PickList } from 'primereact/picklist';

const cleanUser = { role: '', permissions: [] }
export function New({ showDialog, hideDialog, permissions }) {
    const [source, setSource] = useState(permissions)
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
        setSource(e.source);
        setData('permissions', e.target);
    };
    const itemTemplate = (item) => {
        return (
            <div className="flex flex-col align-items-center gap-3">
                <span className='font-semibold text-sky-700'>{item.permission}</span>
            </div>
        );
    };
    useEffect(()=>{
        console.log(data.permissions)
    }, [data])
    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Nuevo Permiso" modal className="p-fluid" onHide={hideDialog} >

            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-3'>
                    <div className="field">
                        <label htmlFor="role" className="font-bold text-xs">
                            Rol
                        </label>
                        <InputText id="role" value={data?.role} required className='rounded-md' onChange={(e) => setData('role', e.target.value)} placeholder='Nombre del permiso' />
                    </div>

                    <div className="card">
                        <PickList dataKey="id" itemTemplate={itemTemplate} source={source} target={data.permissions} onChange={onChange} breakpoint="1280px" sourceHeader="Disponibles" targetHeader="Asignados" sourceStyle={{ height: '20rem' }} targetStyle={{ height: '20rem'}}  />
                    </div>

                </div>
                <FormActionButtons hideDialog={hideDialog} />
            </form>
        </Dialog>
    )
}
