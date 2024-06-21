import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import DeleteAlert from "@/Components/Alerts/Delete.Alert";
import { useTable } from "@/hooks/useTable";
import { New } from "@/Components/Groups/New";
import Enviado from "@/Components/Alerts/Enviado";

export default function ContactsRequest({ auth, data, msj }) {
   
    const {
        dt,
        setAlert,
        RenderRightToolbar,
        RenderLeftToolbar,
        setDataList,
        selectedItem,
        deleteItemDialog,
        sentItemDialog,
        hideDeleteDialog,
        onHideSentDialog,
        tableConfig,
        showNewDialog,
        setShowNewDialog,
        RenderActionLinks,
        setSelectedItem,
    } = useTable(data);

    const [alert, setAlertt] = useState(null);
    const [enviado, setEnviado] = useState(false);

    useEffect(() => {
        setDataList(data);
        if (msj?.success){
            if (msj.whatsappLink) {
                setAlertt(msj);
                window.open(msj.whatsappLink, '_blank');
                setEnviado(true);
            } else {
                setAlertt({ error: "No se recibió el enlace de WhatsApp." });
            }
        }else{
            setAlertt(msj);
        }
    }, [data, msj]);

    const {
        data: contacdata,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm();

    const RenderName = (rowData) => {
        return rowData.first_name + " " + rowData.fLast_name;
    };

    const requestStatus = (rowData) => {
        if (rowData.status === 1) {
            return (
                <span className="rounded-md bg-sky-500 text-jewel-text py-1 px-2">
                    Pendiente
                </span>
            );
        }

        if (rowData.status === 2) {
            return (
                <span className="rounded-md bg-yellow-500 text-jewel-text py-1 px-2">
                    Aprobada
                </span>
            );
        }

        if (rowData.status === 3) {
            return (
                <span className="rounded-md bg-orange-500 text-jewel-text py-1 px-2">
                    Enviada
                </span>
            );
        }


        if (rowData.status === 4) {
            return (
                <span className="rounded-md bg-green-500 text-jewel-text py-1 px-2">
                    Completada
                </span>
            );
        }

        if (rowData.status === 5) {
            return (
                <span className="rounded-md bg-red-500 text-jewel-text py-1 px-2">
                    Rechazada
                </span>
            );
        }
    };

    const handleSubmit = async (e, rowData) => {
        
        e.preventDefault();
        setSelectedItem(rowData);
        post(route("inscription.sent", rowData), {
            rowData,
            onSuccess: (page) => {
                console.log(page);
            },
        });
    };

    const link = (rowData) => {
        if (rowData.status == 1) {
            return <span>Pendiente de Aprobación</span>;
        }
        if (rowData.status == 2) {
            return <button
                        onClick={(e) => handleSubmit(e, rowData)}
                        className="ms-2 cursor-pointer rounded-md hover:scale-105 bg-green-500 text-jewel-text py-1 px-2"
                    >
                        Enviar a Ws
                    </button>;
        }
        if (rowData.status ==  3 || rowData.status == 4) { 
            return (
                <div>
                    <Link
                        href={route("inscription.create", {
                            contact: rowData.key,
                            card: rowData.id_card,
                        })}
                        className="cursor-pointer hover:scale-105 rounded-md bg-blue-500 text-jewel-text py-1 px-2"
                    >
                        Ir al Formulario →
                    </Link>
                    <button
                        onClick={(e) => handleSubmit(e, rowData)}
                        className="ms-2 cursor-pointer rounded-md hover:scale-105 bg-green-500 text-jewel-text py-1 px-2"
                    >
                        Enviar a Ws
                    </button>
                </div>
            );
        }
    };

    const getDate = (rowData) => {
        const date = new Date(rowData.created_at);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("es-ES", options);
    };

    const edit = (rowData) => {};

    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Solicitudes / Postulantes"
            alert={alert}
            setAlert={setAlertt}
        >
            <Head title="Lista de Solicitudes" />

           


            <div className="h-[calc(100vh-120px)] rounded-b-md flex flex-col">
                <Toolbar
                    left={RenderLeftToolbar}
                    right={() => RenderRightToolbar(dt)}
                    className="py-2 rounded-none"
                />

                <DataTable {...tableConfig}>
                    <Column field="id" header="ID" sortable />

                    <Column header="Nombre" sortable body={RenderName} />

                    <Column field="email" header="Email" sortable />

                    <Column
                        header="Fecha de solicitud"
                        sortable
                        body={getDate}
                    />

                    <Column
                        field="responseDate"
                        header="Provisional-Matriculacion"
                        sortable
                        body={link}
                    />

                    <Column
                        field="status"
                        header="Estatus"
                        sortable
                        body={requestStatus}
                    />

                    <Column
                        header="Acciones"
                        body={(rowData) =>
                            RenderActionLinks(rowData, "contact.show")
                        }
                        exportable={false}
                    />
                </DataTable>
            </div>
            <Enviado
                itemId={selectedItem.id}
                value={selectedItem.full_Name}
                message={"el grupo"}
                endpoint='contact.enviado'
                showDialog={enviado}
                hideDialog={()=> setEnviado(false)}
            />

            <New
                showDialog={showNewDialog}
                hideDialog={() => setShowNewDialog(false)}
            />

            <DeleteAlert
                itemId={selectedItem.id}
                value={selectedItem.email}
                message={"el estudiante"}
                endpoint=""
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />
        </AuthenticatedLayout>
    );
}
