import React from 'react';
import { Link } from 'react-router-dom';
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
            {props.loggedin && (
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
                            <Link className='link mobil__link' to='/'>Главная</Link>
                            <Link className='link mobil__link' to='/movies'>Филмы</Link>
                            <Link className='link mobil__link' to='/saved-movies'>Сохранённые фильмы</Link>
                            <div className='mobil__profile'>
                                <Link className='link mobil__profile-link' to='/profile'>Аккаунт</Link>
                                <img src={Icon} className='mobil__profile-icon' alt='Иконка' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default NavigationMobil;