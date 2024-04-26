import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';


export default function EditPermission({ permission, showDialog, actionFooter, hideDialog }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        fLastName: '',
        sLastName: '',
        email: '',
        rol: '',
        status: false,
    });
    useEffect(() => {
        setData(permission)
    }, [permission])

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={actionFooter} onHide={hideDialog}>
            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='flex gap-3 flex-col'>
                    <div className="field">
                        <label htmlFor="firstName" className="font-bold text-xs">
                            Permiso
                        </label>
                        <InputText id="firstName" value={data.firstName} required autoFocus className='rounded-md' onChange={(e) => setData('firstName', e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="secondName" className="font-bold text-xs">
                            Descripción
                        </label>
                        <InputText id="secondName" value={data.secondName} autoFocus onChange={(e) => setData('secondName', e.target.value)} className='rounded-md' />
                    </div>

                </div>
            </form>
        </Dialog>
    )
}
