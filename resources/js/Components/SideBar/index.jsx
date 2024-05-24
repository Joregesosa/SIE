import React, { useContext, useState } from 'react'
import 'primeicons/primeicons.css';
import Menu from './Menu';
import { ThemeContext } from '@/Context/ThemeProvider';
import Dropdown from '../Dropdown';
export default function SideBar({ user }) {
    /* const [isMouseOver, setIsMouseOver] = useState(false) */
    const { theme, handleMouseOverSidebar, isMouseOver } = useContext(ThemeContext)
    const width = isMouseOver ? 'w-72' : 'w-20';

    return (
        <aside className={`flex flex-col min-h-screen h-full bg-${theme}-primary  mr-0 flex-shrink-0 ${width} transition-all duration-500 overflow-hidden  shadow border-r border-${theme}-active print:hidden`} onMouseOver={() => handleMouseOverSidebar(true)} onMouseOut={() => handleMouseOverSidebar(false)}>
    
          <div aria-roledescription='logo container' className={`w-full h-40 flex flex-col items-center justify-center shadow`} >
                <figure className='w-32 mx-auto md:mx-0 flex-shrink-0  '>
                    <img loading='lazy' src="https://lists.office.com/Images/9074fa55-8f43-42bd-9a40-0d7a38b9c66e/0fd61129-93f5-4eca-8c45-3e318953accd/T8REH8MB6WNIDPEDE9XWC501E7/d7cfebf9-81be-4890-823d-22781aa93638" alt="company logo" className='w-full' />
                </figure>
                <h2 className={`text-center font-mono text-xl font-bold text-${theme}-text`}>Thomas Russell Crampton</h2>
            </div>

            <Menu
                isMouseOver={isMouseOver}
                theme={theme}
            />

        </aside>
    )
}