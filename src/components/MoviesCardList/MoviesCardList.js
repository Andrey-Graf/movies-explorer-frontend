/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import {
    CARDS_MAX_WIN_SIZE,
    CARDS_MEDIUM_WIN_SIZE,
    CARDS_MIN_WIN_SIZE,
    ADD_CARDS_MAX_WIN_SIZE,
    ADD_CARDS_MEDIUM_WIN_SIZE
} from '../../utils/constants';

function MoviesCardList(props) {
    const movies = props.movies || [];
    const windowWidth = window.innerWidth;
    const [isCardsArray, setIsCardArray] = React.useState(0);

    const renderCards = React.useCallback(() => {
        if (windowWidth > 768) {
            setIsCardArray(CARDS_MAX_WIN_SIZE);
        } else if (windowWidth > 480 && windowWidth < 768) {
            setIsCardArray(CARDS_MEDIUM_WIN_SIZE);
        } else {
            setIsCardArray(CARDS_MIN_WIN_SIZE);
        }
    }, [windowWidth]);

    React.useEffect(() => renderCards(), [renderCards]);

    React.useEffect(() => {
        window.addEventListener("resize", renderCards);
        return () => {
            window.removeEventListener("resize", renderCards);
        };
    }, []);

    const handleAddClick = () => {
        if (windowWidth > 768) {
            setIsCardArray(isCardsArray + ADD_CARDS_MAX_WIN_SIZE)
        } else {
            setIsCardArray(isCardsArray + ADD_CARDS_MEDIUM_WIN_SIZE)
        }
    };

    return (
        <section className='movies-card__list'>
            {props.isLoading ? (
                <Preloader />
            ) : (
                <>
                    {props.message && <p className='movies__message'>{props.message}</p>}
                    <ul className='movies-card__elements'>
                        {movies &&
                            movies.slice(0, isCardsArray).map((movie) => {
                                if (props.savedMovies.find((e) => e.movieId === movie.id)) {
                                    return (
                                        <MoviesCard
                                            card={movie}
                                            key={movie.id}
                                            noChangeState={props.movieUnSave}
                                            movieSave={true}
                                        />
                                    );
                                } else {
                                    return (
                                        <MoviesCard
                                            card={movie}
                                            key={movie.id}
                                            noChangeState={props.movieSave}
                                            movieSave={false}
                                        />
                                    );
                                }
                            })
                        }
                    </ul>
                    {props.movies.length > isCardsArray && (
                        <button className='movies__btn-block movies-card__list-btn' onClick={handleAddClick} type='button'>
                            Ещё
                        </button>
                    )}
                </>
            )}
        </section>
    )
};

export default MoviesCardList;