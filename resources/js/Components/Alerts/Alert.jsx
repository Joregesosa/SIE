import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React from 'react'

export const Alert = ({ alerta, setAlert }) => {
    console.log(alerta)
    const renderMessage = (message) => {
        if (!message) return null;
        const lines = message.split('\n');

        return (
            <>
                {lines.map((line, index) => (
                    <span key={index}>{line}<br /></span>
                ))}
            </>
        );
    };

    return (
        <Dialog visible={alerta != null} onHide={() => setAlert(null)} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Atención!" modal>
            <div className="flex flex-col items-center">
                <i className={`pi ${alerta?.success ? 'pi-verified text-green-500' : 'pi-exclamation-triangle text-red-500'} mr-3`} style={{ fontSize: '4rem' }} />

                <span className={`py-4 w-full ${alerta?.success ? 'text-center' : 'text-start'} block`}>
                    {alerta?.success && renderMessage(alerta.success)}

                    {alerta?.error && Array.isArray(alerta?.error) ? (
                        <ul className='list-disc list-inside'>
                            {alerta.error.map((err, index) => (
                                <li key={index} className='text-lg'>{renderMessage(err)}</li>
                            ))}
                        </ul>
                    ) : alerta?.error ? (
                        <span className='text-sky-800 font-bold text-lg w-full flex justify-center'>{renderMessage(alerta.error)}</span>
                    ) : null}
                </span>

                <Button onClick={() => setAlert(null)} type='button' label="Aceptar" icon="pi pi-check" className='mx-3 self-end' />
            </div>
        </Dialog>
    );
};

export default Alert;
