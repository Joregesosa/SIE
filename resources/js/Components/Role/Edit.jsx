import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FormActionButtons } from '../FormActionButtons';
import { PickList } from 'primereact/picklist';
import { SelectButton } from 'primereact/selectbutton';

const options = ['Active', 'Inactive'];
const cleanUser = { role: '', permissions: [] }
export function Edit({ showDialog, hideDialog, permissions, selectedItem }) {

    const [source, setSource] = useState(permissions)
    const { data, setData, put, processing, errors, reset } = useForm(cleanUser);

    const submit = (e) => {
        e.preventDefault();
        hideDialog()
        setData(cleanUser)
        put(route('role.update', selectedItem.id), {
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
    useEffect(() => {
        console.log(selectedItem?.permissions)
          if (selectedItem && selectedItem?.permissions) {
            const getSource = permissions.filter(objeto1 => {
                       const existeEnArray2 = selectedItem.permissions.some(objeto2 => objeto2.id === objeto1.id);
                       return !existeEnArray2;
                   });
                   setSource(getSource);
        }  

        setData(selectedItem);
    }, [selectedItem])
    return (
        <Dialog visible={showDialog} style={{ width: '40rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Nuevo Permiso" modal className="p-fluid" onHide={hideDialog} >

            <form onSubmit={submit} className='flex flex-col gap-2'>
                <div className='flex flex-col gap-3'>
                    <div className="field">
                        <label htmlFor="role" className="font-bold text-xs">
                            Rol
                        </label>
                        <InputText id="role" value={data?.role} required className='rounded-md' onChange={(e) => setData('role', e.target.value)} readOnly placeholder='Nombre del permiso' />
                    </div>

                    <div className="card">
                        <PickList dataKey="id" itemTemplate={itemTemplate} source={source} target={data.permissions} onChange={onChange} breakpoint="1280px" sourceHeader="Disponibles" targetHeader="Asignados" sourceStyle={{ height: '20rem' }} targetStyle={{ height: '20rem' }} />
                    </div>
                    <div className="card flex justify-content-center">
                        <SelectButton value={data.status ? 'Active' : 'Inactive'} onChange={(e) => setData('status', e.value === 'Active')} options={options} />
                    </div>
                </div>
                <FormActionButtons hideDialog={hideDialog} />
            </form>
        </Dialog>
    )
}
