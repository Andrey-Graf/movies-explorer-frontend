import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className='filter'>
            <p className='title__checkbox'>Короткометражки</p>
            <label className='filter__label'>
                <input
                    className='filter__input'
                    type='checkbox'
                />
                <span className='filter-checkbox__slider' />
            </label>
        </div>
    )
}

export default FilterCheckbox;