import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedin }) {

    return (
        <header className="header">
            <div className="header__nav">
                <Logo />
                <Navigation
                    loggedin={loggedin}
                />
            </div>
        </header>
    );
}

export default Header;