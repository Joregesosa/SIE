import { Dialog } from 'primereact/dialog'
import React from 'react'

export default function DeleteAlert({ data, actionFooter,showDialog,hideDeleteDialog, message }) {
    return (
        <Dialog visible={showDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={actionFooter} onHide={hideDeleteDialog}>
            <div className="confirmation-content flex items-center">
                <i className="pi pi-exclamation-triangle mr-3 text-red-500" style={{ fontSize: '2rem' }} />
                {data && (
                    <span>
                        Seguro que deseas eliminar {message} <b>{data}</b>?
                    </span>
                )}
            </div>
        </Dialog>
    )
}
