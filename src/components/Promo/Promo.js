import React from "react";
import './Promo.css';
import img from '../../images/header__image.svg';

function Promo() {
    return (
        <div className="promo">
            <div className="promo__title">
                <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
                <img src={img} alt="Изображение" className="promo__image" />
            </div>
        </div>
    )
};

export default Promo;