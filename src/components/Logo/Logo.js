import React from 'react';
import { Link } from "react-router-dom";
import './Logo.css';
import LogoImg from '../../images/header-logo.svg';

function Logo() {
    return (
        <Link to='/'>
            <img className='logo__img' src={LogoImg} alt='Логотип' />
        </Link>
    )
}

export default Logo;