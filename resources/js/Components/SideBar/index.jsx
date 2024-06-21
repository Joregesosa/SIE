import React, { useContext, useState } from 'react'
import 'primeicons/primeicons.css';
import Menu from './Menu';
import { ThemeContext } from '@/Context/ThemeProvider';
import Dropdown from '../Dropdown';
import { Link } from '@inertiajs/inertia-react';
import ApplicationLogo from '../ApplicationLogo';
export default function SideBar({ user }) {
    /* const [isMouseOver, setIsMouseOver] = useState(false) */
    const { theme, handleMouseOverSidebar, isMouseOver } = useContext(ThemeContext)
    const width = isMouseOver ? 'w-72' : 'w-20';

    return (
        <aside className={`flex flex-col min-h-screen h-full bg-${theme}-primary  mr-0 flex-shrink-0 ${width} transition-all duration-500 overflow-hidden  shadow border-r border-${theme}-active print:hidden`} onMouseOver={() => handleMouseOverSidebar(true)} onMouseOut={() => handleMouseOverSidebar(false)}>

            <div aria-roledescription='logo container' className={`w-full h-fit p-2 flex flex-col items-center justify-center shadow`} >
               
                <Link href="/dashboard">
                    <ApplicationLogo className="w-full mx-auto md:mx-0 flex-shrink-0  max-w-32" />
                </Link>
                {
                    isMouseOver && <h2 className={`text-center font-mono text-xl font-bold text-${theme}-text`}>Thomas Russell Crampton</h2>
                }
            </div>

            <Menu
                isMouseOver={isMouseOver}
                theme={theme}
            />

        </aside>
    )
}