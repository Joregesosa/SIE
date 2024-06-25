import { Link, useForm } from "@inertiajs/react";

export const desc = 'Bienvenidos a la Unidad Educativa Thomas Russell Crampton, un espacio donde la innovación y la excelencia educativa se encuentran para forjar el futuro de las nuevas generaciones. En nuestra institución, nos enorgullece ofrecer un entorno de aprendizaje único, diseñado para inspirar la curiosidad, el pensamiento crítico y la pasión por el conocimiento en cada uno de nuestros estudiantes. Al aspirar a formar parte de nuestra comunidad, te embarcas en un viaje educativo sin precedentes, donde cada experiencia está cuidadosamente elaborada para expandir tus horizontes y desafiar tus límites. Aquí, en Thomas Russell Crampton, no solo te preparamos para afrontar los desafíos del mañana, sino que te equipamos con las herramientas necesarias para ser un líder innovador y un ciudadano global responsable. Te invitamos a unirte a nosotros en esta aventura transformadora, donde tu potencial no conoce límites y tu pasión por aprender se enciende con cada nuevo día.'

export const required_fields = [
    'first_name',
    'fLast_name',
    'id_card',
    'age',
    'number',
    'email',
    'last_institution',
    'behavior_qualification',
    'address',
    'level_id',
    'father_names',
    'father_phone',
    'father_occupation',
    'mother_names',
    'mother_phone',
    'mother_occupation',
]

export const contact_fields = {
    first_name: '',
    second_name: '',
    fLast_name: '',
    sLast_name: '',
    id_card: '',
    age: '',
    number: '',
    email: '',
    last_institution: '',
    behavior_qualification: '',
    address: '',
    level_id: '',
    father_names: '',
    father_phone: '',
    father_occupation: '',
    mother_names: '',
    mother_phone: '',
    mother_occupation: '',
};

export const requestStatus = (rowData) => {
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

export const link = (rowData) => {
    const {
        data: contacdata,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm();
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