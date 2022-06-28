/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SearchFormSaved from '../SearchFormSaved/SearchFormSaved';
import SavedCardList from '../SavedCardList/SavedCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({
    loggedIn,
    isLoading,
    message,
    savedMovies,
    movieUnSave,
    searchSavedMovie,
    foundSavedMovies,
    sortShortMovies,
}) {
    const [shortMovies, setShortMovies] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState(false);
    
    let movies = foundSavedMovies.length > 0 ? foundSavedMovies : savedMovies;
    if (message) {
        movies = [];
    }

    React.useEffect(() => {
        if (isChecked && !message) {
            setShortMovies(sortShortMovies(movies));
        }
    }, [isChecked, movies]);

    return (
        <section className='saved-movies'>
            <HeaderMovies loggedIn={loggedIn} />
            <SearchFormSaved
                searchMovie={searchSavedMovie}
                setIsChecked={setIsChecked}
            />
            <SavedCardList
                isLoading={isLoading}
                savedMovies={isChecked ? shortMovies : movies}
                message={message}
                movieUnSave={movieUnSave}
            />
            <Footer />
        </section>
    )
};

export default SavedMovies;