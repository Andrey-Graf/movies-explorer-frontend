/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import SavedCard from '../SavedCard/SavedCard';
import './SavedCardList.css';
import Preloader from '../Preloader/Preloader';
import {
    CARDS_MAX_WIN_SIZE,
    CARDS_MEDIUM_WIN_SIZE,
    CARDS_MIN_WIN_SIZE
} from '../../utils/constants';

function SavedCardList(props) {
    const savedMovies = props.savedMovies || [];
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

    return (
        <section className='saved-card__list'>
            {props.isLoading ? (
                <Preloader />
            ) : (
                <>
                    {props.message && <p className='saved__message'>{props.message}</p>}
                    <ul className='saved-card__elements'>
                            {savedMovies.slice(0, isCardsArray).map((savedMovie) => {
                                    return (
                                        <SavedCard
                                            card={savedMovie}
                                            key={savedMovie._id}
                                            noChangeState={props.movieUnSave}
                                        />
                                    );
                            })
                        }
                    </ul>
                </>
            )}
        </section>
    )
};

export default SavedCardList;