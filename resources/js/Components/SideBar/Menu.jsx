import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
const Accordion = ({ isMouseOver }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };
    const mainIconSize = isMouseOver? 'text-xl' : 'text-2xl';
    return (
        <div>
            {sections.map((section, index) => (
                <div key={index} className='py-1 rounded-md  '>

                    <div onClick={() => handleItemClick(index)} className='cursor-pointer flex gap-2  items-center text-slate-800 px-4 py-2   rounded-sm' >
                        <i className={`pi ${section.icon}  ${mainIconSize}`}></i>
                        {isMouseOver &&
                            <>
                                <h3 className=''>{section.title}</h3>
                                <i className={`pi ${openIndex === index ? 'pi-angle-up' : 'pi-angle-down'} ml-auto`} /> 
                            </>
                        }

                    </div>
                    {openIndex === index && (
                        <ul className='pl-5  '>
                            {section.content.map(item => (
                                <li key={item.title} className='rounded-sm my-2 hover:bg-gray-700 text-gray-50 text-sm px-4 py-2'>
                                    <i className={`pi ${item.icon} mr-2 text-gray-400`} ></i>
                                    <Link href={route(item.url)}>
                                        {item.title}
                                    </Link>

                                </li>
                            ))}

                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

const sections = [
    {

        title: 'Usuarios',
        icon: 'pi-users',
        content: [
            {
                icon: 'pi-list',
                title: 'Lista  de Usuarios',
                url: 'users'
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
                url: 'users'
            }
        ],
    },
    {

        title: 'Loans',
        icon: 'pi-users',
        content: [
            {
                icon: 'pi-list',
                title: 'Nuevo',
                url: 'loans'
            },
            {
                icon: 'pi-file',
                title: 'Nueva Solicitud',
                url: 'request.form'
            },
            ,
            {
                icon: 'pi-cog',
                title: 'Permisos usuario',
                url: 'users'
            }
        ],
    },


];

export default Accordion;
