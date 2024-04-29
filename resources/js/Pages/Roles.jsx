import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { New } from '@/Components/Role/New';
import { useTable } from '@/hooks/useTable';
import { Edit } from '@/Components/Role/Edit';



export default function Roles({ auth, data, msj, permissions }) {
    const {
        dt,
        alert,
        setAlert,
        RenderStatus,
        RenderRightToolbar,
        RenderLeftToolbar,
        RenderActionButtons,
        dataList,
        setDataList,
        selectedItem,
        editItemDialog,
        deleteItemDialog,
        hideDeleteDialog,
        tableConfig,
        showNewDialog,
        setShowNewDialog,
        onHideEditDialog
    } = useTable(data)

    const RenderPermissionList = (rowData) => {
        return (<span className='text-sm'>{rowData.permissions.map(obj => obj.permission).join(', ')}
        </span>)
    }





    useEffect(() => {
        setDataList(data)
        setAlert(msj)
    }, [data, msj])
    return (
        <AuthenticatedLayout
            alert={alert}
            setAlert={setAlert}
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Roles</h2>}
        >
            <Head title="Lista de Usuarios" />

            <div className='h-[calc(100vh-120px)]  bg-white rounded-b-md flex flex-col'>
                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className='pt-3 pb-0 rounded-none' />
                <DataTable ref={dt} value={dataList} {...tableConfig} >

                    <Column field='id' header='ID' sortable className='py-2' />

                    <Column field='role' header='Role' sortable className='py-2' />

                    <Column field='permissions' header='Permissions' sortable body={RenderPermissionList} className='py-2 max-w-80' />

                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData)} exportable={false} className='py-2' />

                </DataTable>
            </div>

            {/* modal delete User */}


            <Edit
                selectedItem={selectedItem}
                showDialog={editItemDialog}
                hideDialog={onHideEditDialog}
                permissions={permissions}
                endpoint='role.update'
            />
            <New
                showDialog={showNewDialog}
                hideDialog={() => setShowNewDialog(false)}
                permissions={permissions}
            />

            <DeleteAlert
                itemId={selectedItem.id}
                value={selectedItem.role}
                message={"el role"}
                endpoint='role.delete'
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />
        </AuthenticatedLayout>
    );
}
