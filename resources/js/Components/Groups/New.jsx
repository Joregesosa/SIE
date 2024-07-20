import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FormActionButtons } from '../FormActionButtons';
import { SelectButton } from 'primereact/selectbutton';
import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
const options = ['Active', 'Inactive'];

const cleanLevel = { group: '', description: '', status: 1 }
export function New({ showDialog, hideDialog }) {

    const { data, setData, put, processing, errors, reset } = useForm(cleanLevel);

    const submit = (e) => {
        e.preventDefault();
        hideDialog()
        setData(cleanLevel)
        put(route(endpoint), {
            onSuccess: () => {
                console.log('created')
            }
        });
    };


    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Nuevo Grupo" modal className="p-fluid" onHide={hideDialog} >

            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='grid grid-cols-2 gap-3'>

                    <label htmlFor="group" className=" text-xs col-span-2">
                        Grupo
                        <InputText
                            id="group"
                            name='group'
                            value={data?.group}
                            required
                            className='rounded-md'
                            onChange={(e) => setData('group', e.target.value)}
                            placeholder='Nombre del grupo' />
                    </label>

                    <label htmlFor="level" className=" text-xs col-span-1">
                        Nivel
                        <Dropdown
                            id="level"
                            name='level'
                            value={data?.level}
                            filter
                            optionLabel=''
                            required
                            className='rounded-md border border-black'
                            onChange={(e) => setData('level', e.target.value)}
                            placeholder='Seleccionar nivel' />
                    </label>

                    <label htmlFor="full_professor" className=" text-xs col-span-1">
                        Profesor Titular
                        <Dropdown
                            id="full_professor"
                            name='full_professor'
                            value={data?.full_professor}
                            filter
                            optionLabel=''
                            required
                            className='rounded-md border border-black'
                            onChange={(e) => setData('full_professor', e.target.value)}
                            placeholder='Seleccionar Profesor' />
                    </label>

                    <label htmlFor="student_capacity" className=" text-xs col-span-1">
                        Cupo Máximo
                        <InputText
                            id="student_capacity"
                            name='student_capacity'
                            value={data?.student_capacity}
                            type='number'
                            required
                            className='rounded-md'
                            onChange={(e) => setData('student_capacity', e.target.value)}
                            placeholder='Cupo Máximo' />
                    </label>
                    <label htmlFor="max_age" className=" text-xs col-span-1">
                        Edad Máxima Permitida
                        <InputText
                            id="max_age"
                            name='max_age'
                            value={data?.max_age}
                            type='number'
                            required
                            className='rounded-md'
                            onChange={(e) => setData('max_age', e.target.value)}
                            placeholder='Edad Máxima' />
                    </label>



                    <div className="card flex justify-content-center col-span-2">
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
New.prototype = {
    showDialog: PropTypes.bool.isRequired,
    hideDialog: PropTypes.func.isRequired
}