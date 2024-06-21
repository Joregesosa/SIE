import { useForm } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog'
import React from 'react'
import { Button } from 'primereact/button';

export default function Enviado({ value, showDialog, hideDialog, message, endpoint, itemId }) {

     
    const { delete: deleteItem , post } = useForm()

    const enviar = () => {  
        post(route(endpoint, itemId), {
            onSuccess: () => {
                hideDialog()
            }
        });
    }


    return (
        <Dialog visible={showDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal >
            <div className="confirmation-content flex items-center">
                <i className="pi pi-exclamation-triangle mr-3 text-red-500" style={{ fontSize: '2rem' }} />
                {value && (
                    <span>
                        Confirma que ah enviado el formulario de <b>{value}</b>?
                    </span>
                )} 
            </div>
            <div className='flex justify-end pt-4 gap-8'>
            <Button type='button' label="Aun no" icon="pi pi-times" outlined onClick={hideDialog} className='bg-red-600 hover:bg-red-500 text-center px-6 py-2 text-white pl-4' />
            <Button type={"button"} label="Enviado" icon="pi pi-check" className='bg-green-600 hover:bg-blue-500 text-center px-6 py-2 text-white pl-4' onClick={enviar} />
        </div>
        </Dialog>
    )
}
