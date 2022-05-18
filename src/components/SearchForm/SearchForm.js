import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import IconSearch from '../../images/button-search.svg'
import './SearchForm.css';

function SearchForm() {
    return (
        <section className='search'>
            <div className='search__conteiner'>
                <form className='search__form'>
                    <div className='search__input-block'>
                        <input
                            className='search__input'
                            type="text"
                            name="movi"
                            id="search-movi"
                            placeholder="Фильм"
                            autoComplete="off"
                            minLength="2"
                            maxLength="200"
                        />
                        <span className="form__input-error" id="profile-movi-error"></span>
                        <button className='search__button' type='submit'><img className='search__icon' src={IconSearch} alt='поиск' /></button>
                    </div>
                    <FilterCheckbox />
                </form>
            </div>
        </section>
    )
}

export default SearchForm;