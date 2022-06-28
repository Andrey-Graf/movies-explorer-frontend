import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Icon from '../../images/profile-icon.svg';
import './Navigation.css';

function Navigation({ isLoggedIn }) {
    return (
        <>
            {!isLoggedIn && (
                <div className="header__menu">
                    <Logo />
                    <div className='header__block'>
                        <Link className="link header__link" to="/signup">Регистрация</Link>
                        <Link to="/signin">
                            <button className="header__button" type="submit">
                                Войти
                            </button>
                        </Link>
                    </div>
                </div>
            )}
            {isLoggedIn && (
                <div className='movies__menu'>
                    <div className='movies__nav'>
                        <Logo />
                        <div className='movies__block'>
                            <NavLink className='link movies__link' activeClassName='movies__link_activ' to='/movies'>Фильмы</NavLink>
                            <NavLink className='link movies__link' activeClassName='movies__link_activ' to='/saved-movies'>Сохранённые фильмы</NavLink>
                        </div>
                    </div>
                    <div className='movies__profile'>
                        <Link className='link link__profile' to='/profile'>
                            <button className='link__button' type='button'>
                                <p className='link__button-text'>Аккаунт</p>
                                <img src={Icon} className='movies__profile-icon' alt='Иконка' />
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navigation;