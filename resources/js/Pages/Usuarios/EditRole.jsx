import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Loading } from '@/Components/Loading';
import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import { Button } from 'primereact/button/button.esm';

export default function EditRole({ auth, permissions, role }) {
    const [list, setList] = useState([]);
    const [alert, setAlert] = useState();
    const { data, setData, put, processing, reset } = useForm({ role: '', permissions: [] });

    useEffect(() => {
        setData({ 'permissions': role.attachedPermissions, 'role': role.role });
        setList(permissions);
    }, [permissions, role]);

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
        put(route('role.update', role.id), {
            onSuccess: ({ props: { message } }) => {
                setAlert(message);
                reset();
            }, onError: (error) => {
                setAlert(error);
            }
        });
    };
    return (

        <AuthenticatedLayout
            user={auth.user}
            header={"Usuarios / Editar Rol"}
            alert={alert}
            setAlert={setAlert}
        >
            <Head title="Editar Rol" />
            <form onSubmit={handleSubmit}>
                <div className='flex justify-between px-8 pt-8 pb-4 items-center'>
                    <h1 className='text-4xl font-bold  '>Editar Rol</h1>
                    <Link href={route('roles')} className='pi pi-arrow-circle-left text-3xl' />
                </div>

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

            <Loading status={processing} message="Actualizando rol..." />
        </AuthenticatedLayout>
    );
}

