import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { useTable } from "@/hooks/useTable";
// import { Edit } from '@/Components/Subjects/Edit';
// import { New } from "@/Components/Subjects/New";
import DeleteAlert from "@/Components/Alerts/Delete.Alert";

export default function Subjects({ auth, data, msj }) {
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


    useEffect(() => {
        setDataList(data);
        setAlert(msj);
    }, [data, msj]);

    return (
        <AuthenticatedLayout user={auth.user} header={"Subjects"}>
            <Head title="Lista de Subjects" />

            <Toolbar
                left={RenderLeftToolbar}
                right={() => RenderRightToolbar(dt)}
                className="py-2 rounded-none bg-white bg-opacity-40"
            />

            <DataTable {...tableConfig}>
                <Column field="id" header="ID" sortable className="py-2 " />

                <Column
                    field="name"
                    header="Materia"
                    sortable
                    className="py-2"
                />

             {/*    <Column
                    field="professor.name"
                    header="Professor"
                    sortable
                    className="py-2"
                  
                /> */}

                <Column
                    header="Actions"
                    body={(rowData) => RenderActionButtons(rowData)}
                    exportable={false}
                    className="py-2"
                />
            </DataTable>

            {/* modal edit Subject */}
            {/* <Edit
                selectedItem={selectedItem}
                showDialog={editItemDialog}
                hideDialog={onHideEditDialog}
                endpoint='subjects.update'
            /> */}

            {/* <New
                showDialog={showNewDialog}
                hideDialog={() => setShowNewDialog(false)}
                permissions={permissions}
            /> */}

            {/* modal delete Subject */}
            <DeleteAlert
                itemId={selectedItem.id}
                value={selectedItem.subject}
                message={"la asignatura"}
                endpoint="subjects.delete"
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />
        </AuthenticatedLayout>
    );
}
