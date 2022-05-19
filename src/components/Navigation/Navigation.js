import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Icon from '../../images/profile-icon.svg';
import './Navigation.css';

function Navigation(props) {
    return (
        <>
            {!props.loggedin && (
                <div className="header__menu">
                    <Link className="link header__link" to="/signup">Регистрация</Link>
                    <Link to="/signin">
                        <button className="header__button" type="submit">
                            Войти
                        </button>
                    </Link>
                </div>
            )}
            {props.loggedin && (
                <div className='movies__menu'>
                    <div className='movies__nav'>
                        <Logo />
                        <div className='movies__block'>
                            <Link className='link movies__link' to='/movies'>Фильмы</Link>
                            <Link className='link movies__link' to='/saved-movies'>Сохранённые фильмы</Link>
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