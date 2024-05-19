import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { sections } from './sections';
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
        <div className='px-4 flex-grow'>
            {sections.map((section, index) => (
                <div key={index} className='py-1 rounded-md'>

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



export default Accordion;
