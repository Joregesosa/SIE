import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
const Accordion = ({ isMouseOver, theme }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };
    const mainIconSize = isMouseOver? 'text-2xl' : 'text-3xl';
    useEffect(()=>{
        !isMouseOver && setOpenIndex(null)
    }, [isMouseOver])
    return (
        <div>
            {sections.map((section, index) => (
                <div key={index} className='py-1 rounded-md  '>

                    <div onClick={() => handleItemClick(index)} className={`cursor-pointer flex gap-2  items-center text-${theme}-text  py-2  justify-center rounded-sm`} >
                        <i className={`pi ${section.icon}  ${mainIconSize} `}></i>
                        {isMouseOver &&
                            <>
                                <h3 className='text-base'>{section.title}</h3>
                                <i className={`pi ${openIndex === index ? 'pi-angle-up' : 'pi-angle-down'} ml-auto`} /> 
                            </>
                        }

                    </div>
                    {openIndex === index && (
                        <ul className='  '>
                            {section.content.map(item => (
                                <li key={item.title} className={`rounded-sm my-2 bg-transparent text-${theme}-text text-sm px-4 py-2`}>
                                    <i className={`pi ${item.icon} mr-2`} ></i>
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
                url: 'permissions'
            }
        ],
    },
 
];

export default Accordion;
