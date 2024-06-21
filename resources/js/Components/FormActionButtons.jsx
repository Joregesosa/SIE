import { Button } from 'primereact/button'
import React from 'react'

export const FormActionButtons = ({ hideDialog, type, action, accept_lbl, cancel_lbl }) => {
    const execute = () => {
        if (typeof action === 'function') {

            action()
        }
    }
    return (
        <div className='flex justify-end pt-4 gap-8'>
            <Button type='button' label={`${cancel_lbl || "Cancelar"}`} icon="pi pi-times" outlined onClick={hideDialog} className='bg-red-600 hover:bg-red-500 text-center px-6 py-2 text-white pl-4' />
            <Button type={type || "submit"} label={`${accept_lbl || "Aceptar"}`} icon="pi pi-check" className='bg-blue-600 hover:bg-blue-500 text-center px-6 py-2 text-white pl-4' onClick={execute} />
        </div>
    )
}
