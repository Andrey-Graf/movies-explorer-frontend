import React from "react";
import './MoviesCard.css';
import moviesImg from '../../images/movies-img.svg';

function MoviesCard(props) {
    
    return (
        <>
            <li className="movies-card__element">
                <figure className="movies-card__figure">
                    <img src={moviesImg} alt="фото" className="movies-card__image" />
                    <figcaption className="movies-card__group">
                        <h2 className="movies-card__caption">33 слова о дизайне</h2>
                        <div className="movies-card__like-group">
                            <button type="button" className={props.buttonClassName} onClick={props.onCardClick}></button>
                        </div>

                    </figcaption>
                    <p className="movies-card__time">1ч 47м</p>
                </figure>
            </li>
            <li className="movies-card__element">
                <figure className="movies-card__figure">
                    <img src={moviesImg} alt="фото" className="movies-card__image" />
                    <figcaption className="movies-card__group">
                        <h2 className="movies-card__caption">33 слова о дизайне</h2>
                        <div className="movies-card__like-group">
                            <button type="button" className={props.buttonClassName} onClick={props.onCardClick}></button>
                        </div>
                    </figcaption>
                    <p className="movies-card__time">1ч 47м</p>
                </figure>
            </li>
            <li className="movies-card__element">
                <figure className="movies-card__figure">
                    <img src={moviesImg} alt="фото" className="movies-card__image" />
                    <figcaption className="movies-card__group">
                        <h2 className="movies-card__caption">33 слова о дизайне</h2>
                        <div className="movies-card__like-group">
                            <button type="button" className={props.buttonClassName} onClick={props.onCardClick}></button>
                        </div>
                    </figcaption>
                    <p className="movies-card__time">1ч 47м</p>
                </figure>
            </li>
            <li className="movies-card__element">
                <figure className="movies-card__figure">
                    <img src={moviesImg} alt="фото" className="movies-card__image" />
                    <figcaption className="movies-card__group">
                        <h2 className="movies-card__caption">33 слова о дизайне</h2>
                        <div className="movies-card__like-group">
                            <button type="button" className={props.buttonClassName} onClick={props.onCardClick}></button>
                        </div>
                    </figcaption>
                    <p className="movies-card__time">1ч 47м</p>
                </figure>
            </li>
        </>
    );
}

export default MoviesCard;