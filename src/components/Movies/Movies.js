import React from 'react';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer";
import './Movies.css';

function Movies() {
    const [isLike, setIsLike] = React.useState(false);

    function handleLike() {
        setIsLike(!isLike);
    }

    const buttonLike = (`movies-card__like-button ${isLike ? 'movies-card__like-button_activ' : ''}`);
    return (
        <section className='movies'>
            <HeaderMovies />
            <SearchForm />
            <MoviesCardList
                buttonClassName={buttonLike}
                onCardClick={handleLike}
            />
            <div className='movies__btn-block'>
                <button className='movies-card__list-btn' type='button'>
                    Ещё
                </button>
            </div>
            <Footer />
        </section>
    )
}

export default Movies;