import React from 'react';
// import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationMobil from '../NavigationMobil/NavigationMobil';
import './Header.css';

function Header({ isLoggedIn }) {

    return (
        <header className="header">
            <div className="header__nav">
                {/* <Logo /> */}
                <Navigation
                    isLoggedIn={isLoggedIn}
                />
                <NavigationMobil
                    loggedIn={isLoggedIn}
                />
            </div>
        </header>
    );
}

export default Header;