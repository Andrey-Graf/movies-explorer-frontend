import React from "react";
import './SavedCard.css';


function SavedCard(props) {
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
        return props.noChangeState({id: props.card.movieId})
    }

    return (
        <>
            <li className="saved-card__element">
                <figure className="saved-card__figure">
                    <a className="saved__link" href={props.card.trailerLink} target="_blank" rel="noreferrer">
                        <img src={props.card.thumbnail} alt="фото" className="saved-card__image" />
                    </a>
                    <figcaption className="saved-card__group">
                        <h2 className="saved-card__caption">{props.card.nameRU}</h2>
                        <div className="saved-card__like-group">
                            <button type="button" className="saved-card__delete-button" onClick={handleButtonClick}></button>
                        </div>
                    </figcaption>
                    <p className="saved-card__time">{getTimeFromMins(props.card.duration)}</p>
                </figure>
            </li>
        </>
    );
}

export default SavedCard;