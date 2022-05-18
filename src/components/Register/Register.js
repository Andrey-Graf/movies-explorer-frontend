import React from "react";
import { Link } from "react-router-dom";
import LogoForm from "../LogoForm/LogoForm";
import './Register.css'

function Register() {

    const [registerData, setRegisterData] = React.useState({
        name: '',
        password: '',
        email: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // props.onRegister({
        //     name: registerData.name,
        //     password: registerData.password,
        //     email: registerData.email,
        // });
    }

    const link = (
        <p className="form__paragraph">
            Уже зарегистрированы? <Link className="form__link" to="/signin">Войти</Link>
        </p>
    )

    return (
        <LogoForm
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            onSubmit={handleSubmit}
            link={link}
        >
            <p className="form__input-title">Имя</p>
            <input value={registerData.name || ''} onChange={handleChange} type="name" name="name" id="login-name" className="form__text form__text_theme_dark" maxLength="15" required />
            <span className="form__input-error" id="login-name-error"></span>
            <p className="form__input-title">E-mail</p>
            <input value={registerData.email || ''} onChange={handleChange} type="email" name="email" id="login-email" className="form__text form__text_theme_dark" maxLength="40" required />
            <span className="form__input-error" id="login-email-error"></span>
            <p className="form__input-title">Пароль</p>
            <input value={registerData.password || ''} onChange={handleChange} type="password" name="password" id="login-password" className="form__text form__text_theme_dark" minLength="8" maxLength="16" required />
            <span className="form__input-error" id="profile-password-error"></span>
        </LogoForm>
    )
}

export default Register;