import React from 'react';
import Logo from '../Logo/Logo';
import './LogoForm.css'

function LogoForm(props) {
    return (
        <div className='logo__block'>
            <form className='form form_theme_dark' onSubmit={props.onSubmit}>
                <div className='form__header'>
                    <Logo />
                    <h2 className='form__title'>{props.title}</h2>
                </div>
                {props.children}
                <button className='form__button-save'>{props.buttonText}</button>
                {props.link}
            </form>
        </div>
    )
}

export default LogoForm;