import React from "react";
import { Link } from "react-router-dom"; 
import './Profile.css'
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/Validation";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [formDisable, setformDisable] = React.useState(true);
    const { values, handleChange, errors, setValues, setIsValid } = useFormWithValidation();

    // const [isLoginData, setIsLoginData] = React.useState({
    //     name: currentUser.name,
    //     email: currentUser.email,
    // });

    // React.useEffect(() => {
    //     if (currentUser) {
    //         resetForm(currentUser, {}, true);
    //     }
    // }, [currentUser, resetForm]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setIsLoginData({
    //         ...isLoginData,
    //         [name]: value,
    //     });
    // };

    function disableBtn(e) {
        e.preventDefault();
        setformDisable(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onEditProfile(values.name, values.email);
    }

    React.useEffect(() => {
        setValues(currentUser);
    }, [currentUser, setValues]);

    React.useEffect(() => {
        if (props.isLoading) {
            setformDisable(true);
        }
    }, [props.isLoading]);

    React.useEffect(() => {
        setformDisable(props.isSuccess);
    }, [props.isSuccess, props.userInfo]);

    React.useEffect(() => {
        if (values.name === currentUser.name && values.email === currentUser.email) {
            setIsValid(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    const profileMessageClassName = (`profile__message ${props.isSuccess ? 'profile__message-success' : 'profile__message-error'}`)

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
                                disabled={formDisable}
                                type="name"
                                name="name"
                                id="profile-name"
                                className="input__text form__input_theme_dark"
                                minLength="2"
                                maxLength="30"
                                required
                                autoComplete="off" />
                        </div>
                        <span className="form__input-error" id="login-name-error">{errors.name}</span>
                        <div className="input__block">
                            <p className="profile__input-title">Почта</p>
                            <input
                                value={values.email || ''}
                                onChange={handleChange}
                                disabled={formDisable}
                                type="email"
                                name="email"
                                id="profile-email"
                                className="input__text form__input_theme_dark"
                                required
                                autoComplete="off" />
                        </div>
                        <span className="form__input-error" id="profile-email-error">{errors.email}</span>
                        <span className={profileMessageClassName}>{props.message}</span>
                    </div>
                    <button className="profile__button" type="submit" onClick={disableBtn}>
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