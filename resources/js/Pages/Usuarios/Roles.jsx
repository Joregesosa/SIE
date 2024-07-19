import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import DeleteAlert from "@/Components/Alerts/Delete.Alert";
import { useTable } from "@/hooks/useTable";

export default function Roles({ auth, data, message }) {
    const {
        dt,
        alert,
        setAlert,
        RenderStatus,
        RenderRightToolbar,
        dataList,
        setDataList,
        selectedItem,
        deleteItemDialog,
        hideDeleteDialog,
        tableConfig,
        RenderLeftLinkToolbar,
        RenderActionLinks
    } = useTable(data);

    const [expandedRows, setExpandedRows] = useState(null);
    const RenderPermissionList = (rowData) => {
        console.log(rowData);
        if (rowData) {
            return (
                <div className="text-sm flex flex-wrap gap-1 sm:px-16">
                    {rowData.permissions.sort((a, b) =>a.name < b.name ? -1 : 1).map((obj) => {
                        return (
                            <span className={`text-black px-1 text-nowrap rounded-md bg-${obj.color2}`} key={obj.id}>
                                {obj.name}
                            </span>
                        )
                    })}
                </div>
            );
        }
    };

    useEffect(() => {
        setDataList(data);
        setAlert(message);
    }, [data, message]);
    return (
        <AuthenticatedLayout
            alert={alert}
            setAlert={setAlert}
            user={auth.user}
            header={
                "Usuarios / Roles"
            }
        >
            <Head title="Lista de Roles" />

            <Toolbar
                left={RenderLeftLinkToolbar}
                right={() => RenderRightToolbar(dt)}
                className="py-2 rounded-none bg-white bg-opacity-40"
            />

            <DataTable ref={dt} value={dataList} {...tableConfig} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)} rowExpansionTemplate={RenderPermissionList}>
                <Column expander />
                <Column
                    field="id"
                    header="ID"
                    sortable
                    className="py-2"
                />

                <Column
                    field="role"
                    header="Role"
                    sortable
                    className="py-2"
                />

                {/* <Column
                    field="permissions"
                    header="Permissions"
                    sortable
                    body={RenderPermissionList}
                    className="py-2 max-w-80"
                /> */}

                <Column
                    field="status"
                    header="Estatus"
                    sortable
                    body={RenderStatus}
                    className="py-2"
                />

                <Column
                    header="Acciones"
                    body={(rowData) => RenderActionLinks(rowData, 'role.edit')}
                    exportable={false}
                    className="py-2"
                />
            </DataTable>

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
