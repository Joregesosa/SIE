import React, { useState } from 'react'
import 'primeicons/primeicons.css';
import Menu from './Menu';
export default function SideBar() {
    const [isMouseOver, setIsMouseOver] = useState(false)
    const width = isMouseOver ? 'w-64' : 'w-20';

    return (
        <aside className={` min-h-[calc(100vh-66px)] bg-white p-4 flex-shrink-0 ${width} transition-all duration-500`} onMouseOver={() => setIsMouseOver(true)} onMouseOut={() => setIsMouseOver(false)}>

            <Menu
                isMouseOver={isMouseOver}
            />
        </aside>
    )
}