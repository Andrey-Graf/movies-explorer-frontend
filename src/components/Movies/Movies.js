/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer";
import './Movies.css';

function Movies({
    loggedIn,
    message,
    movies,
    isLoading,
    searchMovie,
    savedMovies,
    movieUnSave,
    movieSave,
    sortShortMovies,
}) {

    const [shortMovies, setShortMovies] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState(false);

    React.useEffect(() => {
        if (isChecked) {
            setShortMovies(sortShortMovies(movies));
        }
    }, [isChecked]);

    return (
        <section className='movies'>
            <HeaderMovies loggedIn={loggedIn} />
            <SearchForm
                searchMovie={searchMovie}
                setIsChecked={setIsChecked}
            />
            <MoviesCardList
                isLoading={isLoading}
                message={message}
                movies={isChecked ? shortMovies : movies}
                savedMovies={savedMovies}
                movieUnSave={movieUnSave}
                movieSave={movieSave}
            />
            <Footer />
        </section>
    )
}

export default Movies;