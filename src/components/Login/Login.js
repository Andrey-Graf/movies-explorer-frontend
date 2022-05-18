import React from "react";
import LogoForm from "../LogoForm/LogoForm";
import { Link } from 'react-router-dom';
import './Login.css';


function Login(props) {

    const [isLoginData, setIsLoginData] = React.useState({
        password: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIsLoginData({
            ...isLoginData,
            [name]: value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        
        props.onLogin(isLoginData)
    }

    const link = (
        <p className="form__paragraph">
            Ещё не зарегистрированы? <Link className="form__link" to="/signup">Регистрация</Link>
        </p>
    )

    return (
        <LogoForm
            title="Рады видеть!"
            buttonText="Войти"
            onSubmit={handleSubmit}
            link={link}
        >
            <p className="form__input-title">E-mail</p>
            <input
                value={isLoginData.email || ''}
                onChange={handleChange}
                type="email"
                name="email"
                id="login-email"
                className="form__text form__text_theme_dark"
                maxLength="40"
                required
                autoComplete="off"
            />
            <span className="form__input-error" id="login-email-error"></span>
            <p className="form__input-title">Пароль</p>
            <input
                value={isLoginData.password || ''}
                onChange={handleChange}
                type="password"
                name="password"
                id="login-password"
                className="form__text form__text_theme_dark"
                minLength="8"
                maxLength="16"
                required
                autoComplete="off"
            />
            <span className="form__input-error" id="profile-password-error"></span>
        </LogoForm>
    )
}

export default Login;