import { ThemeContext } from '@/Context/ThemeProvider'
import React, { useContext } from 'react'

export const PickTheme = () => {
    const { theme, handleTheme } = useContext(ThemeContext)
    const themeList = [
        {
            id: 1,
            theme: 'classic',
        },
        {
            id: 2,
            theme: 'dark',
        },
        {
            id: 3,
            theme: 'monochrome',
        },
        {
            id: 4,
            theme: 'vintage',
        },
        {
            id: 5,
            theme: 'minimalist',
        },
        {
            id: 6,
            theme: 'material',
        },
        {
            id: 7,
            theme: 'jewel',
        },
        {
            id: 8,
            theme: 'geometric',
        },
        {
            id: 9,
            theme: 'artDeco',
        },
        {
            id: 10,
            theme: 'natural',
        },
    ]
    return (
        <div className='w-full'>
            <h2 className='text-xl font-semibold'>Theme Colors</h2>
            <ul className='py-4 flex flex-wrap gap-4'>
                {
                    themeList.map(item =>
                        <li key={item.id}>
                            <button value={item.theme} onClick={() => handleTheme(item.theme)} className={`bg-${item.theme}-secondary px-7 py-2 rounded-full focus:border-4 focus:border-white ring-sky-700-400 ring-2 ${theme === item.theme && 'border-4'}`} />
                        </li>
                    )
                }

            </ul>
        </div>
    )
}


export const SidebarStyle = () => {
    const {  setSidebarState, sidebarState } = useContext(ThemeContext)
    return (
        <div className='w-full pb-4'>
            <h2 className='text-xl font-medium'>Sidebar Style</h2>
        
            <div className='grid grid-cols-2 p-2' onChange={(e)=>setSidebarState(e.target.value)}>
                <label htmlFor="static" >
                    <input className='mb-1 mr-3' type="radio" id='static' name='sidebarStyle' value='static' defaultChecked={sidebarState === 'static'}/>
                    Static
                </label>
                <label htmlFor="collapsed" >
                    <input  className='mb-1 mr-3' type="radio" id='collapsed' name='sidebarStyle' value='collapsed' defaultChecked={sidebarState === 'collapsed'}/>
                    Collapesed
                </label>
            </div>
        </div>)
}


