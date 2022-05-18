import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
    return (
        <section className='movies-card__list'>
            <ul className='movies-card__elements'>
                <MoviesCard
                    buttonClassName={props.buttonClassName}
                    onCardClick={props.onCardClick}
                />
            </ul>
        </section>
    )
};

export default MoviesCardList;