import React from 'react'

export const sections = [
    {

        title: 'Usuarios',
        icon: 'pi-users',
        content: [
            {
                icon: 'pi-list',
                title: 'Lista  de Usuarios',
                url: 'users',
                permission: 'edit_user'

            },
            {
                icon: 'pi-cog',
                title: 'Roles',
                url: 'roles'
            },
            ,
            {
                icon: 'pi-cog',
                title: 'Permisos usuario',
                url: 'permission'
            }
        ],
    },
    {

        title: 'Cursos',
        icon: 'pi-graduation-cap',
        content: [
            {
                icon: 'pi-graduation-cap',
                title: 'Niveles',
                url: 'levels',
                permission: 'read_levels'

            },
            {
                icon: 'pi-chart-pie',
                title: 'Grupos',
                url: 'groups',
                permission: 'read_groups'
            }
        ],
    },
    {

        title: 'Solicitudes',
        icon: 'pi-envelope',
        content: [
            {
                icon: 'pi-book',
                title: 'Postulantes',
                url: 'contact',
                permission: 'read_contactsRequest'

            },
            {
                icon: 'pi-receipt',
                title: 'Matriculas',
                url: 'students',
                permission: 'read_enrollmentRequest'
            } 
        ],
    },

];
