import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-lg leading-tight">
                    Acceso denegado
                </h2>
            }
        >
            <Head title="Acceso denegado" />
            <div className="h-[calc(100vh-120px)]  bg-white rounded-b-md flex flex-col">
                <div className="font-ubuntu pb-20 bg-[#332851] w-full h-[calc(100vh-64px)] relative overflow-hidden flex items-center justify-center flex-col">
                    <h1 className="acceso-403">403</h1>
                    <h2 className="acceso-denegado">Acceso Denegado</h2>

                    <Link
                        href={route("dashboard")}
                        className="acceso-home cursor-pointer "
                    >
                        ir al Inicio
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
