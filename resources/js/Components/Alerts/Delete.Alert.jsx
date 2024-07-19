import { useForm } from '@inertiajs/react';
import { Dialog } from 'primereact/dialog'
import React from 'react'
import { FormActionButtons } from '../FormActionButtons';
import { Loading } from '../Loading';

export default function DeleteAlert({ value, showDialog, hideDialog, message, endpoint, itemId }) {
    console.log(value)
    const { delete: deleteItem, processing } = useForm()

    const destroy = () => {

        deleteItem(route(endpoint, itemId), {
            onSuccess: () => {
                hideDialog()
            }
        });
    };

    return (
        <Dialog visible={showDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal onHide={hideDialog}>
            <div className="confirmation-content flex items-center">
                <i className="pi pi-exclamation-triangle mr-3 text-red-500" style={{ fontSize: '2rem' }} />
                {value && (
                    <span>
                        Seguro que deseas eliminar {message} <b>{value}</b>?
                    </span>
                )}
            </div>
            <FormActionButtons hideDialog={hideDialog} type={"button"} action={destroy} />
            <Loading status={processing} />
        </Dialog>
    )
}
