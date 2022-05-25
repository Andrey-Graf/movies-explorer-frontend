import React from "react";
import { Link } from "react-router-dom";
import LogoForm from "../LogoForm/LogoForm";
import './Register.css';
import { useFormWithValidation } from '../../utils/Validation';
import Preloader from "../Preloader/Preloader";

function Register(props) {
    const {values, handleChange, errors, isValid} = useFormWithValidation();

    // const [registerData, setRegisterData] = React.useState({
    //     name: '',
    //     password: '',
    //     email: '',
    // })

    // const [error, setError] = React.useState({});

    // const handleChange = (e) => {
    //     const input = e.target;
    //     const { name, value } = input;
    //     setRegisterData({
    //         ...registerData,
    //         [name]: value,
    //     });
    //     setError({
    //         ...error,
    //         [name]: input.validationMessage
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // props.onRegister({
        //     name: registerData.name,
        //     password: registerData.password,
        //     email: registerData.email,
        // });
        props.onRegister(values);
    }

    const link = (
        <p className="form__paragraph">
            Уже зарегистрированы? <Link className="form__link" to="/signin">Войти</Link>
        </p>
    )

    return (
        <>
            {props.isLoading ? <Preloader /> :
                <LogoForm
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                onSubmit={handleSubmit}
                isValid={isValid}
                link={link}
            >
                <p className="form__input-title">Имя</p>
                <input
                    value={values.name || ''}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="login-name"
                    className="form__text form__text_theme_dark"
                    minLength="2"
                    maxLength="30"
                    autoComplete="off"
                    required
                />
                <span className="form__input-error" id="login-name-error">{errors.name}</span>
                <p className="form__input-title">E-mail</p>
                <input
                    value={values.email || ''}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="login-email"
                    className="form__text form__text_theme_dark"
                    autoComplete="off"
                    required
                />
                <span className="form__input-error" id="login-email-error">{errors.email}</span>
                <p className="form__input-title">Пароль</p>
                <input
                    value={values.password || ''}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="login-password"
                    className="form__text form__text_theme_dark"
                    minLength="8"
                    autoComplete="off"
                    required
                />
                <span className="form__input-error" id="profile-password-error">{errors.password}</span>
                <span className="form__input-error">{props.message}</span>
            </LogoForm>
            }
        </>
    )
}

export default Register;