import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import ContactReport from '@/Reports/ContactReport';
import { Toolbar } from 'primereact/toolbar';
import { ExportMenu } from '@/Reports/ExportMenu';
import { EnrollmentPayment } from '@/Components/EnrollmentPayment';
import { Loading } from '@/Components/Loading';
import { useEffect, useState } from 'react';
import { set } from 'date-fns';
import Checkbox from '@/Components/Checkbox';
import { Button } from 'primereact/button/button.esm';

export default function CreateRole({ auth, permissions }) {
    const [list, setList] = useState([]);
    const [alert, setAlert] = useState();
    const { data, setData, post, processing, reset } = useForm({ role: '', permissions: [] });

    useEffect(() => {
        setList(permissions);
    }, [permissions]);

    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setData('permissions', [...data.permissions, parseInt(e.target.value)])
        } else {
            setData('permissions', data.permissions.filter((item) => item !== parseInt(e.target.value)))
        }
    }

    const checkAll = (key, e) => {
        if (e.target.checked) {

            let permissions = list[key].map((item) => item.id);

            setData('permissions', [...data.permissions, ...permissions]);

        } else {
            let removeAllPermission = list[key].map((item) => item.id);
            setData('permissions', data.permissions.filter((item) => !removeAllPermission.includes(item)));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('role.store'), {
            onSuccess: ({ props: { message } }) => {
                setAlert(message);
                reset();
            }, onError: (error) => {
                console.log(error)
                setAlert(error);
            }
        });
    };
    return (

        <AuthenticatedLayout
            user={auth.user}
            header={"Usuarios / Crear Rol"}
            alert={alert}
            setAlert={setAlert}
        >
            <Head title="Crear Rol" />
            <form onSubmit={handleSubmit}>
                <h1 className='text-4xl font-bold p-8'>Crear Rol</h1>
                <label htmlFor="role" className='w-96 block ml-12 mt-8'>
                    Rol
                    <InputText id="role" value={data?.role} required className='rounded-md w-full' onChange={(e) => setData('role', e.target.value)} placeholder='Nombre del Role' />
                </label>
                <div className='w-full permissions-grid px-8'>
                    {list && Object.keys(list).map((key) => (
                        <div className='w-full p-4' key={key}>
                            <h2 className='text-xl font-bold py-2'>{key}</h2>
                            <ul>

                                <li className={`p-2 bg-${list[key][0]['color2']} rounded-md`}>
                                    <label htmlFor={key} className='flex justify-between'>
                                        Seleccionar todos
                                        <Checkbox id={key} value={key} onChange={(e) => checkAll(key, e)} className='size-6' />
                                    </label>
                                </li>

                                {list[key].map((item, index) => (
                                    <li key={index} className='p-2'>
                                        <label htmlFor={item.id} className='flex justify-between italic'>
                                            {item.name}
                                            <Checkbox checked={data.permissions.includes(item.id)} id={item.id} value={item.id} onChange={handleCheckbox} className='size-6' />
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='flex justify-end p-8'>
                    <Button type={"submit"} label="Aceptar" icon="pi pi-check" className='bg-blue-600 hover:bg-blue-500 text-center px-6 py-2 text-white pl-4' />
                </div>
            </form>

            <Loading status={processing} message="Registrando nuevo rol..." />
        </AuthenticatedLayout>
    );
}

