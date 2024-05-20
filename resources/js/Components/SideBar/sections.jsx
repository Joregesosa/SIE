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
];
