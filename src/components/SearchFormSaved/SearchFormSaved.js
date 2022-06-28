/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import IconSearch from '../../images/button-search.svg';
import './SearchFormSaved.css';


function SearchFormSaved({ searchMovie, setIsChecked }) {
    const [searchText, setSearchText] = React.useState('');
    const [shortMovies, setShortMovies] = React.useState(false);
    const [error, setError] = React.useState('');
    

    React.useEffect(() => {
        setError('');
    }, [searchText]);

    function onCheckbox(checked) {
        setShortMovies(checked);
        setIsChecked(!shortMovies);
    }

    function onChange(e) {
        setSearchText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (searchText.length === 0) {
            setError('Нужно ввести ключевое слово');
            return;
        } else {
            searchMovie(searchText);
        }
        
    }

    React.useEffect(() => {
        searchMovie(searchText);
    }, [])

    return (
        <section className='search'>
            <div className='search__conteiner'>
                <form className='search__form' onSubmit={handleSubmit}>
                    <div className='search__input-block'>
                        <input
                            className='search__input'
                            value={searchText || ''}
                            onChange={onChange}
                            type="text"
                            name="text"
                            placeholder="Фильм"
                            autoComplete="off"
                            maxLength="200"
                            required
                        />
                        <span className="form__input-error">{error}</span>
                        <button className='search__button' type='submit'><img className='search__icon' src={IconSearch} alt='поиск' /></button>
                    </div>
                    <FilterCheckbox onCheckbox={onCheckbox}/>
                </form>
            </div>
        </section>
    )
}

export default SearchFormSaved;