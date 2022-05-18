import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavigationMobil from '../NavigationMobil/NavigationMobil';
import './HeaderMovies.css';

function HeaderMovies({ loggedin }) {
    return (
        <div className='movies__header'>
            <Navigation
                loggedin={!loggedin}
            />
            <NavigationMobil
                loggedin={!loggedin}
            />
        </div>
    )
}

export default HeaderMovies;