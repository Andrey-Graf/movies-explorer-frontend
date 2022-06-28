import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationMobil.css';
import Logo from '../Logo/Logo';
import Icon from '../../images/profile-icon.svg';

function NavigationMobil(props) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function handleMenu() {
        setIsMenuOpen(true);
    }

    function handleCloseMenu() {
        setIsMenuOpen(false);
    }

    const menuClassName = (`mobil__container ${isMenuOpen ? 'mobil__container_opened' : ''}`);
    return (
        <>
            {props.loggedIn && (
                <div className='mobil__menu'>
                    <Logo />
                    <button className='mobil__button-menu'
                        type="button"
                        aria-label="Меню"
                        onClick={handleMenu}
                    />
                    <div className={menuClassName}>
                        <button className='mobil__button-close'
                            type='button'
                            aria-label='Закрыть'
                            onClick={handleCloseMenu}
                        />
                        <div className='mobil__block'>
                            <NavLink className='link mobil__link' activeClassName='mobil__link-activ' exact to='/'>Главная</NavLink>
                            <NavLink className='link mobil__link' activeClassName='mobil__link-activ' to='/movies'>Фильмы</NavLink>
                            <NavLink className='link mobil__link' activeClassName='mobil__link-activ' to='/saved-movies'>Сохранённые фильмы</NavLink>
                            <div className='mobil__profile'>
                                <Link className='link link__profile' to='/profile'>
                                    <button className='link__button' type='button'>
                                        <p className='link__button-text'>Аккаунт</p>
                                        <img src={Icon} className='movies__profile-icon' alt='Иконка' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default NavigationMobil;