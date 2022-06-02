import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onCheckbox }) {
    const [isChecked, setIsChecked] = React.useState(false);

    function onChange(ev) {
        onCheckbox(!isChecked);
        setIsChecked(ev.target.checked);
    }
    return (
        <div className='filter'>
            <p className='title__checkbox'>Короткометражки</p>
            <label className='filter__label'>
                <input
                    className='filter__input'
                    type='checkbox'
                    checked={isChecked}
                    onChange={onChange}
                />
                <span className='filter-checkbox__slider' />
            </label>
        </div>
    )
}

export default FilterCheckbox;