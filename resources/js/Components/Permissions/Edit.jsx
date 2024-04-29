import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { SelectButton } from 'primereact/selectbutton';
import { FormActionButtons } from '../FormActionButtons'

const options = ['Active', 'Inactive'];
const cleanPermission = { permission: '', description: '', status: true }
export default function Edit({ showDialog, hideDialog, selectedItem, endpoint }) {


    const { data, setData, put, processing, errors, reset } = useForm(selectedItem);
    useEffect(() => {
        setData(selectedItem)
    }, [selectedItem])
    const submit = (e) => {
        e.preventDefault();
        hideDialog()
        setData(cleanPermission)
        put(route(endpoint, data.id), {
            onSuccess: () => {
                console.log('created')
            }
        });
    };
    const setStatus = (e)=> e.value === 'Active'? 'Active': 'Inactive'
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
                        <InputTextarea id="description" value={data?.description} onChange={(e) => setData('description', e.target.value)} className='rounded-md resize-none' placeholder='Descripción del permiso' />
                    </div>

                    <div className="card flex justify-content-center">
                        <SelectButton value={data.status? 'Active': 'Inactive'}  onChange={(e) => setData('status', e.value === 'Active')} options={options} />
                    </div>

                </div>
                <FormActionButtons hideDialog={hideDialog} />
            </form>
        </Dialog>
    )
}
