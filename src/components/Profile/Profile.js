import React from "react";
import { Link } from "react-router-dom"; 
import './Profile.css'
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/Validation";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const { values, handleChange, errors, setValues, isValid, setIsValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        const { name, email } = values
        props.onEditProfile({ name, email });
    }

    React.useEffect(() => {
        setValues(currentUser);
        setIsValid(true);
    }, [currentUser, setValues, setIsValid]);

    React.useEffect(() => {
        if (values.name === currentUser.name && values.email === currentUser.email) {
            setIsValid(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    const buttonClassName = ((isValid && (values.name !== currentUser.name || values.email !== currentUser.email)) ? 'profile__button profile__button_activ' : 'profile__button')
    const buttonDisable = ((values.name === currentUser.name && values.email === currentUser.email) || !isValid);
    
    return (
        <section className="profile">
            <HeaderMovies loggedIn={props.loggedIn}/>
            <div className="profile__content">
                <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
                <form className="form__profile" onSubmit={handleSubmit}>
                    <div className="form__profile-input">
                        <div className="input__block">
                            <p className="profile__input-title">Имя</p>
                            <input
                                value={values.name || ''}
                                onChange={handleChange}
                                type="name"
                                name="name"
                                className="input__text form__input_theme_dark"
                                minLength="2"
                                maxLength="30"
                                required
                                autoComplete="off" />
                        </div>
                        <span className="form__input-error">{errors.name}</span>
                        <div className="input__block">
                            <p className="profile__input-title">Почта</p>
                            <input
                                value={values.email || ''}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                className="input__text form__input_theme_dark"
                                required
                                autoComplete="off" />
                        </div>
                        <span className="form__input-error">{errors.email}</span>
                        <span className='profile__message'>{props.message}</span>
                    </div>
                    <button className={buttonClassName} type="submit" disabled={buttonDisable}>
                        Редактировать
                    </button>
                    <Link to="/" className="profile__btn-link">
                        <button className="profile__button  profile_button-exit" type="button" onClick={props.onSignOut}>
                            Выйти из аккаунта
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    )
}

export default Profile;