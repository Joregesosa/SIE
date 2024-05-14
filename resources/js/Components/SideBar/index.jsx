import React, { useContext, useState } from 'react'
import 'primeicons/primeicons.css';
import Menu from './Menu';
import { ThemeContext } from '@/Context/ThemeProvider';
export default function SideBar() {
    /* const [isMouseOver, setIsMouseOver] = useState(false) */
    const { theme, handleMouseOverSidebar, isMouseOver } = useContext(ThemeContext)
    const width = isMouseOver ? 'w-64 px-8' : 'w-20 px-4';

    return (
        <aside className={` min-h-screen h-full bg-${theme}-secondary  mr-0 py-6 flex-shrink-0 ${width} transition-all duration-500 overflow-hidden  shadow`} onMouseOver={() => handleMouseOverSidebar(true)} onMouseOut={() => handleMouseOverSidebar(false)}>
            <picture className='w-full h-44 bg-gray-600'>
                    <img src="" alt="" />
            </picture>

            <Menu
                isMouseOver={isMouseOver}
                theme={theme}
            />


        </aside>
    )
}