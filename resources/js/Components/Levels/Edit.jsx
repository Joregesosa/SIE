import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FormActionButtons } from '../FormActionButtons';
import { SelectButton } from 'primereact/selectbutton';
import { InputTextarea } from 'primereact/inputtextarea';
import PropTypes from 'prop-types';
const options = ['Active', 'Inactive'];
const cleanLevel = { level: '', description: '', status: 1 }
export function Edit({ showDialog, hideDialog, selectedItem, endpoint }) {

    const { data, setData, put, processing, errors, reset } = useForm(cleanLevel);

    const submit = (e) => {
        e.preventDefault();
        hideDialog()
        setData(cleanLevel)
        put(route(endpoint, selectedItem.id), {
            onSuccess: () => {
                console.log('created')
            }
        });
    };

    useEffect(() => {
        setData(selectedItem);
    }, [selectedItem])
    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Editar Nivel" modal className="p-fluid" onHide={hideDialog} >

            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-3'>

                    <label htmlFor="role" className="font-bold text-xs">
                        Nivel
                        <InputText
                            id="level"
                            name='level'
                            value={data?.level}
                            required
                            className='rounded-md'
                            onChange={(e) => setData('role', e.target.value)}
                            readOnly
                            placeholder='Nombre del nivel' />
                    </label>



                    <label htmlFor="">
                        <InputTextarea
                            id='description'
                            name='description'
                            value={data?.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                            className='rounded-md h-36 resize-none'
                            placeholder='Descripción' />

                    </label>
                    <div className="card flex justify-content-center">
                        <SelectButton
                            value={data.status ? 'Active' : 'Inactive'}
                            onChange={(e) => setData('status', e.value === 'Active')}
                            options={options} />
                    </div>
                </div>
                <FormActionButtons hideDialog={hideDialog} />
            </form>
        </Dialog>
    )
}
Edit.prototype = {
    showDialog: PropTypes.bool.isRequired,
    hideDialog: PropTypes.func.isRequired,
    selectedItem: PropTypes.object.isRequired,
    endpoint: PropTypes.string.isRequired,
}