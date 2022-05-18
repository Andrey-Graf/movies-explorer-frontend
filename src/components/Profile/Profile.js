import React from "react";
import { Link } from "react-router-dom"; 
import './Profile.css'
import HeaderMovies from "../HeaderMovies/HeaderMovies";

function Profile(props) {
    const [isLoginData, setIsLoginData] = React.useState({
        name: '',
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
    return (
        <section className="profile">
            <HeaderMovies />
            <div className="profile__content">
                <h2 className="profile__title">Привет, "Имя"!</h2>
                <form className="form__profile" onSubmit={handleSubmit}>
                    <div className="form__profile-input">
                        <div className="input__block">
                            <p className="profile__input-title">Имя</p>
                            <input
                                value={isLoginData.name || ''}
                                onChange={handleChange}
                                type="name"
                                name="name"
                                id="profile-name"
                                className="input__text form__input_theme_dark"
                                maxLength="40" //посмотреть длину в API
                                required
                                autoComplete="off" />
                        </div>
                        <span className="form__input-error" id="login-name-error"></span>
                        <div className="input__block">
                            <p className="profile__input-title">Пароль</p>
                            <input
                                value={isLoginData.email || ''}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                id="profile-email"
                                className="input__text form__input_theme_dark"
                                maxLength="40"
                                required
                                autoComplete="off" />
                        </div>
                        <span className="form__input-error" id="profile-email-error"></span>
                    </div>
                    <button className="profile__button" type="submit">
                        Редактировать
                    </button>
                    <Link to="/" className="profile__btn-link">
                        <button className="profile__button  profile_button-exit" type="button">
                            Выйти из аккаунта
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    )
}

export default Profile;