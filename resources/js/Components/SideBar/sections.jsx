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
        icon: 'pi-address-book',
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

        title: 'Solicitudes',
        icon: 'pi-address-book',
        content: [
            {
                icon: 'pi-graduation-cap',
                title: 'Solicitudes de Contacto',
                url: 'contact',
                permission: 'read_contactsRequest'

            },
            {
                icon: 'pi-chart-pie',
                title: 'Grupos',
                url: 'groups',
                permission: 'read_groups'
            },
            ,
            {
                icon: 'pi-cog',
                title: 'Permisos usuario',
                url: 'permission'
            }
        ],
    },

];
