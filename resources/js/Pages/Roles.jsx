import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useRef, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import DeleteAlert from '@/Components/Alerts/Delete.Alert';
import { ThemeContext } from '@/Context/ThemeProvider';
import { Search, TableConfig, RenderStatus, RenderRightToolbar, RenderLeftToolbar, RenderActionButtons } from '@/Config/Table.Config';
const defaultRoles = [
    {
        id: "1",
        role: "Director/a",
        permissions: [
            "Gestionar personal",
            "Gestionar alumnado",
            "Gestionar presupuesto",
            "Acceso a toda la información del centro",
        ],
        status: true,
    },
    {
        id: "2",
        role: "Profesor/a",
        permissions: [
            "Impartir clases",
            "Calificar tareas y exámenes",
            "Comunicarse con las familias",
            "Acceso al expediente académico de sus alumnos",
        ],
        status: true,
    },
    {
        id: "3",
        role: "Tutor/a",
        permissions: [
            "Orientación y seguimiento académico de los alumnos",
            "Tutorías individualizadas",
            "Comunicación con las familias",
            "Acceso al expediente académico de sus tutorados",
        ],
        status: true,
    },
    {
        id: "4",
        role: "Secretario/a",
        permissions: [
            "Gestión administrativa del centro",
            "Atención al público",
            "Trámites y expedientes",
            "Acceso a la información general del centro",
        ],
        status: true,
    },
    {
        id: "5",
        role: "Conserje",
        permissions: [
            "Mantenimiento del centro",
            "Control de acceso",
            "Seguridad del centro",
            "Acceso a las instalaciones del centro",
        ],
        status: true,
    },
    {
        id: "6",
        role: "Bibliotecario/a",
        permissions: [
            "Gestión de la biblioteca",
            "Préstamo y devolución de libros",
            "Búsqueda y recuperación de información",
            "Acceso a la información bibliográfica",
        ],
        status: true,
    },
    {
        id: "7",
        role: "Becario/a",
        permissions: [
            "Colaboración en tareas administrativas",
            "Apoyo en el aula",
            "Participación en actividades extraescolares",
            "Acceso a la información general del centro",
        ],
        status: true,
    },
];


export default function Roles({ auth }) {
    const [roles, setRoles] = useState(defaultRoles)
    const [selectedRole, setSelectedRole] = useState({})
    const [globalFilter, setGlobalFilter] = useState(null);
    const [editRoleDialog, setEditRoleDialog] = useState(false);
    const [deleteRoleDialog, setDeleteRoleDialog] = useState(false);
    const { theme } = useContext(ThemeContext)
    const dt = useRef(null);

    const search = Search(setGlobalFilter)
    const tableConfig = TableConfig(theme, globalFilter, search, dt, roles)

    const editRole = (role) => {
        setSelectedRole(role);
        setEditRoleDialog(true);
    };

    const deleteRole = (role) => {
        setSelectedRole(role);
        setDeleteRoleDialog(true);
    };

    const renderPermissions = (rowData) => {
        return <div className='flex flex-wrap gap-2'>
            {
                rowData.permissions.map((item, i) =>
                    <span key={i} className='rounded-md bg-gray-100 px-2'>{item}</span>
                )
            }
        </div>

    }

    /* Render footer buttons */
    const renderRoleDialogFooter = (close, execute) => (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" outlined onClick={() => close(false)} className='mx-3' />
            <Button label="Aceptar" icon="pi pi-check" className='mx-3' />
        </React.Fragment>
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-lg leading-tight">Roles</h2>}
        >
            <Head title="Lista de Usuarios" />

            <div className='h-[calc(100vh-120px)]  bg-white rounded-b-md flex flex-col'>
                <Toolbar left={RenderLeftToolbar} right={() => RenderRightToolbar(dt)} className='pt-3 pb-0 rounded-none' />
                <DataTable ref={dt} value={roles} {...tableConfig} >

                    <Column field='id' header='ID' sortable className='py-2' />

                    <Column field='role' header='Nombre' sortable className='py-2' />

                    <Column field='status' header='Estatus' sortable body={RenderStatus} className='py-2' />

                    <Column header="Acciones" body={(rowData) => RenderActionButtons(rowData, editRole, deleteRole)} exportable={false} className='py-2' />

                </DataTable>
            </div>

            {/* modal delete User */}


            <DeleteAlert
                data={selectedRole.role}
                message={"el rol"}
                showDialog={deleteRoleDialog}
                actionFooter={() => renderRoleDialogFooter(setDeleteRoleDialog)}
                hideDialog={() => setDeleteRoleDialog(false)}
            />
        </AuthenticatedLayout>
    );
}
