import React from 'react';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies() {
    const [isDelete, setIsDelete] = React.useState(false);

    function handleDelete() {
        setIsDelete(!isDelete);
    }

    const buttonLike = "movies-card__delete-button";
    return (
        <section className='saved-movies'>
            <HeaderMovies />
            <SearchForm />
            <MoviesCardList
                buttonClassName={buttonLike}
                onCardClick={handleDelete}
            />
            <Footer />
        </section>
    )
};

export default SavedMovies;