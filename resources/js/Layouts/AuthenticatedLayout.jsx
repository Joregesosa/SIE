import { useContext, useState } from 'react';
import SideBar from '@/Components/SideBar';
import { ThemeControl } from '@/Components/ThemeControl';
import { ThemeContext } from '@/Context/ThemeProvider';
import { Alert } from '@/Components/Alerts/Alert';
import { Navbar } from '@/Components/Navbar';

export default function Authenticated({ user, header, alert, setAlert, children }) {

    const [showThemeControl, setShowThemeControl] = useState(false)
    const { theme } = useContext(ThemeContext)
    return (
        <div className="min-h-screen bg-gray-100">

            <div className='w-full flex overflow-hidden'>
                <SideBar user={user} />
                <div className={`flex-grow bg-main bg-cover bg-no-repeat rounded-md min-h-[calc(100vh-73px)] flex flex-col`}>
                    <Navbar theme={theme} user={user} setShowThemeControl={setShowThemeControl} />
                    {header && (
                        <header className={`shadow bg-${theme}-secondary text-${theme}-text rounded-t-md m-[2px] print:hidden`}>
                            <div className={`max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 py-2`}>{header}</div>
                        </header>
                    )}
                    <main className='p-1 rounded-b-md flex-grow print:p-0 print:m-0'>{children}</main>
                </div>
            </div>
            <ThemeControl
                showThemeControl={showThemeControl}
                setShowThemeControl={setShowThemeControl}
            />
            <Alert alerta={alert} setAlert={setAlert} />
        </div>
    );
}
