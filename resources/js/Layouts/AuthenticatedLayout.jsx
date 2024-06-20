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
                <div className={`flex-grow bg-main bg-cover bg-no-repeat rounded-md flex flex-col`}>
                    <Navbar theme={theme} user={user} setShowThemeControl={setShowThemeControl} header={header} />

                    <main className='m-1 p-1 rounded-b-md flex-grow print:p-0 print:m-0 overflow-y-auto bg-gray-100 h-[calc(100vh-72px)]'>{children}</main>
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
