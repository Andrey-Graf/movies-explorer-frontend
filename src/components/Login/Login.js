/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import LogoForm from "../LogoForm/LogoForm";
import { Link } from 'react-router-dom';
import './Login.css';
import { useFormWithValidation } from '../../utils/Validation';
import Preloader from "../Preloader/Preloader";

function Login(props) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    React.useEffect(() => {
        resetForm({});
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = values;
        props.onLogin({ email, password });
    }

    const link = (
        <p className="form__paragraph">
            Ещё не зарегистрированы? <Link className="form__link" to="/signup">Регистрация</Link>
        </p>
    )

    return (
        <>
            {props.isLoading ? <Preloader /> :
                <LogoForm
                    title="Рады видеть!"
                    buttonText="Войти"
                    onSubmit={handleSubmit}
                    isLoading={props.isLoading}
                    isValid={isValid}
                    link={link}
                >
                    <p className="form__input-title">E-mail</p>
                    <input
                        value={values.email || ''}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        className="form__text form__text_theme_dark"
                        required
                        autoComplete="off"
                    />
                    <span className="form__input-error">{errors.email}</span>
                    <p className="form__input-title">Пароль</p>
                    <input
                        value={values.password || ''}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        className="form__text form__text_theme_dark"
                        minLength="8"
                        required
                        autoComplete="off"
                    />
                    <span className="form__input-error">{errors.password}</span>
                </LogoForm>
            }
        </>
    )
}

export default Login;