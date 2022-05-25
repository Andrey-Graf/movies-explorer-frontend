import React from "react";
import './MoviesCard.css';
import { MOVIES_IMAGE_URL } from '../../utils/constants';

function MoviesCard(props) {
    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        if (mins >= 60) {
            return hours + "ч " + minutes + "м";
        } else {
            return minutes + "м";
        }
    }

    function handleButtonClick() {
        return props.noChangeState(props.card)
    }

    const buttonClassName = (`movies-card__like-button ${props.movieSave ? "movies-card__like-button_activ" : "movies-card__like-button"}`);

    return (
        <>
            <li className="movies-card__element">
                <figure className="movies-card__figure">
                    <a className="movies__link" href={props.card.trailerLink} target="_blank" rel="noreferrer">
                        <img src={`${MOVIES_IMAGE_URL}${props.card.image.url}`} alt="фото" className="movies-card__image" />
                    </a>
                    <figcaption className="movies-card__group">
                        <h2 className="movies-card__caption">{props.card.nameRU}</h2>
                        <div className="movies-card__like-group">
                            <button type="button" className={buttonClassName} onClick={handleButtonClick}></button>
                        </div>
                    </figcaption>
                    <p className="movies-card__time">{getTimeFromMins(props.card.duration)}</p>
                </figure>
            </li>
        </>
    );
}

export default MoviesCard;