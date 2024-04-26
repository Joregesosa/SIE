import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React from 'react'

export const Alert = ({ alerta, setAlert }) => {
    return (
        <Dialog visible={alerta != null} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Alert" modal>
            <div className=" flex flex-col items-center">

                <i className={`pi ${alerta?.success ? 'pi-verified text-green-500' : 'pi-exclamation-triangle text-red-500'} mr-3 `} style={{ fontSize: '4rem' }} />

                <span className='py-6'>
                    {alerta?.success}
                    {alerta?.error}
                </span>
                <Button onClick={() => setAlert(null)} type='button' label="Aceptar" icon="pi pi-check" className='mx-3  self-end' />
            </div>

        </Dialog>
    )
}
