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
import { requestStatus } from "@/Helpers/Contact.Form-Statics";
import { EnrollmentPayment } from "@/Components/EnrollmentPayment";
import { Loading } from "@/Components/Loading";
import Alert from "@/Components/Alerts/Alert";

export default function ContactsRequest({ auth, data, msj, success }) {

    const {
        dt,
        alert,
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

    const [enviado, setEnviado] = useState(false);
    const [payment, setPayment] = useState({});

    useEffect(() => {
        setDataList(data);
    }, [data]);

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

    const handleSubmit = async (e, rowData) => {

        e.preventDefault();
        setSelectedItem(rowData);
        post(route("inscription.sent", rowData), {
            rowData,
            onSuccess: (page) => {
                const msj = page?.props?.message;
                if (msj?.success && msj.whatsappLink) {
                    if (msj.whatsappLink) {
                        setAlert(msj);
                        window.open(msj.whatsappLink, '_blank');
                        setEnviado(true);
                    } else {
                        setAlert({ error: "No se recibió el enlace de WhatsApp." });
                    }
                } else {
                    setAlert(msj);
                }
            },
            onError: (error) => {
                console.log(error);
            }
        });
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setPayment({});
        post(route("payment.store"), {
            onSuccess: (page) => {
                if (page?.props?.message) {
                    setAlert(page.props.message);
                }

            },
            onError: (error) => {

                setAlert(error);
            }
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
        if (rowData.status == 3 || rowData.status == 4) {
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

    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Solicitudes / Postulantes"
            alert={alert}
            setAlert={setAlert}
        >
            <Head title="Lista de Solicitudes" />

            <div className="h-[calc(100vh-120px)] rounded-b-md flex flex-col">
                <Toolbar
                    right={() => RenderRightToolbar(dt)}
                    className="py-2 rounded-none"
                />

                <DataTable {...tableConfig} onRowClick={(e) => setPayment(e.data)} rowClassName="cursor-pointer hover:bg-gray-500 hover:bg-opacity-20">
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
                        header="Provisional-Matriculación"
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
                hideDialog={() => setEnviado(false)}
            />

            <DeleteAlert
                itemId={selectedItem.id}
                value={selectedItem.email}
                message={"el estudiante"}
                endpoint=''
                showDialog={deleteItemDialog}
                hideDialog={hideDeleteDialog}
            />

            <EnrollmentPayment
                request={payment}
                setPayment={setPayment}
                handleSubmit={handlePaymentSubmit}
                data={contacdata}
                setData={setData}
            />
            <Loading status={processing} />
        </AuthenticatedLayout>
    );
}
