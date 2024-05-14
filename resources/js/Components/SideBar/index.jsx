import React, { useContext, useState } from 'react'
import 'primeicons/primeicons.css';
import Menu from './Menu';
import { ThemeContext } from '@/Context/ThemeProvider';
export default function SideBar() {
    /* const [isMouseOver, setIsMouseOver] = useState(false) */
    const { theme, handleMouseOverSidebar, isMouseOver } = useContext(ThemeContext)
    const width = isMouseOver ? 'w-64 px-8' : 'w-20 px-4';

    return (
        <aside className={` min-h-[calc(100vh-64px)] h-full bg-${theme}-secondary  mr-0 py-6 flex-shrink-0 ${width} transition-all duration-500 overflow-hidden  shadow`} onMouseOver={() => handleMouseOverSidebar(true)} onMouseOut={() => handleMouseOverSidebar(false)}>
           {/*  <figure className='w-44 h-44 mx-auto md:mx-0 flex-shrink-0'>
                <img loading='lazy' src="https://lists.office.com/Images/9074fa55-8f43-42bd-9a40-0d7a38b9c66e/0fd61129-93f5-4eca-8c45-3e318953accd/T8REH8MB6WNIDPEDE9XWC501E7/d7cfebf9-81be-4890-823d-22781aa93638" alt="company logo" className='w-full' />
            </figure> */}

            <Menu
                isMouseOver={isMouseOver}
                theme={theme}
            />


        </aside>
    )
}