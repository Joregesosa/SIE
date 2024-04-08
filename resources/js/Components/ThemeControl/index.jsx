import { Sidebar } from 'primereact/sidebar'
import React from 'react'
import { PickTheme, SidebarStyle } from './PickTheme'

export const ThemeControl = ({ showThemeControl, setShowThemeControl }) => {
    return (
        <Sidebar visible={showThemeControl} position="right" onHide={() => setShowThemeControl(false)}>
            <SidebarStyle/>
            <PickTheme/>
        </Sidebar>
    )
}
