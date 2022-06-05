import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavigationMobil from '../NavigationMobil/NavigationMobil';
import './HeaderMovies.css';

function HeaderMovies({ loggedIn }) {
    return (
        <div className='movies__header'>
            <Navigation
                isLoggedIn={loggedIn}
            />
            <NavigationMobil
                loggedIn={loggedIn}
            />
        </div>
    )
}

export default HeaderMovies;