import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import DeleteAlert from "@/Components/Alerts/Delete.Alert";
import { New } from "@/Components/Role/New";
import { useTable } from "@/hooks/useTable";
import { Edit } from "@/Components/Role/Edit";

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
        onHideEditDialog,
    } = useTable(data);

    const RenderPermissionList = (rowData) => {
        if (rowData) {
            return (
                <span className="text-sm flex flex-wrap gap-1 ">
                    {rowData.permissions.map((obj) => {

                        return (
                            <span className={`text-black px-1 text-nowrap rounded-md bg-${obj.color}`}>
                                {obj.name}
                            </span>
                        )
                    })}
                </span>
            );
        }
    };

    useEffect(() => {
        setDataList(data);
        setAlert(msj);
    }, [data, msj]);
    return (
        <AuthenticatedLayout
            alert={alert}
            setAlert={setAlert}
            user={auth.user}
            header={
                "Usuarios / Roles"
            }
        >
            <Head title="Lista de Usuarios" />

                <Toolbar
                    left={RenderLeftToolbar}
                    right={() => RenderRightToolbar(dt)}
                    className="py-2 rounded-none bg-white bg-opacity-40"
                />
                <DataTable ref={dt} value={dataList} {...tableConfig}>
                    <Column
                        field="id"
                        header="ID"
                        sortable
                        className="h-fit"
                    />

                    <Column
                        field="role"
                        header="Role"
                        sortable
                        className="h-fit"
                    />

                    <Column
                        field="permissions"
                        header="Permissions"
                        sortable
                        body={RenderPermissionList}
                        className="h-fit max-w-80"
                    />

                    <Column
                        field="status"
                        header="Estatus"
                        sortable
                        body={RenderStatus}
                        className="h-fit"
                    />

                    <Column
                        header="Acciones"
                        body={(rowData) => RenderActionButtons(rowData)}
                        exportable={false}
                        className="h-fit"
                    />
                </DataTable>

            {/* modal delete User */}

            <Edit
                selectedItem={selectedItem}
                showDialog={editItemDialog}
                hideDialog={onHideEditDialog}
                permissions={permissions}
                endpoint="role.update"
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
                endpoint="role.delete"
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />
        </AuthenticatedLayout>
    );
}
