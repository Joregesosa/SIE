import { Button } from 'primereact/button'
import React from 'react'

export const FormActionButtons = ({ hideDialog, type, action }) => {
    const execute = () => {
        if (typeof action === 'function') {
   
            action()
        }
    }
    return (
        <div className='flex justify-end pt-4'>
            <Button type='button' label="Cancelar" icon="pi pi-times" outlined onClick={hideDialog} className='mx-3 w-fit' />
            <Button type={type || "submit"} label="Aceptar" icon="pi pi-check" className='mx-3 w-fit' onClick={execute} />
        </div>
    )
}
