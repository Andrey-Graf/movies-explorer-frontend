import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound({ loggedIn }) {
    const history = useHistory();

    function handleClick() {
        if (loggedIn) {
            history.goBack();
        } else {
            history.push("/");
        }
    }
    return (
        <div className='not-found'>
            <h3 className='not-found note-found__title'>
                <span className='note-found__number'>404</span>
                Страница не найдена
            </h3>
            <button className='button button__back' onClick={handleClick}>
                Назад
            </button>
        </div>
    )
};

export default NotFound;