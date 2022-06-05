import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavigationMobil from '../NavigationMobil/NavigationMobil';
import './Header.css';

function Header({ isLoggedIn }) {

    return (
        <header className="header">
            <div className="header__nav">
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