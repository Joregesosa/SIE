import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Dashboard({ auth , data }) {


    console.log(data)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Dashboard"}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                    {data.userName ?
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-2">
                        <div className="p-6 text-gray-900">{data.userName}</div>
                        <div className="p-6 text-gray-900">{data.userEmail}</div>
                    </div>
                    :
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-2 text-center">
                       
                       <a href='/signin' className={`block w-24 mx-auto m-5 rounded-md bg-blue-500 p-2 text-white`}>
                       Ingresar
                                    </a>
                        
                    </div>
                    }
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
