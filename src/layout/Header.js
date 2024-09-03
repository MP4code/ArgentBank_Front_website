import React from 'react'
import NavigationMenu from "../navigate/NavigationMenu"
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <NavigationMenu />
        </header>
    )
}

export default Header