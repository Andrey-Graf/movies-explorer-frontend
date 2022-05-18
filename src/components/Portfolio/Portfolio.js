import React from 'react';
import Arrow from '../../images/portfolio-link.svg';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio__block">
                <h3 className="portfolio__title">Портфолио</h3>
                <ul className="portfolio__list">
                    <li className="portfolio__card">
                        <p className="portfolio__subtitle">Статичный сайт</p>
                        <a href="https://andrey-graf.github.io/how-to-learn/" className="portfolio__link" target="_blank" rel="noreferrer">
                            <img className="portfolio__img" src={Arrow} alt="Стрелка" />
                        </a>
                    </li>
                    <li className="portfolio__card">
                        <p className="portfolio__subtitle">Адаптивный сайт</p>
                        <a href="https://andrey-graf.github.io/russian-travel/" className="portfolio__link" target="_blank" rel="noreferrer">
                            <img className="portfolio__img" src={Arrow} alt="Стрелка" />
                        </a>
                    </li>
                    <li className="portfolio__card">
                        <p className="portfolio__subtitle">Одностраничное приложение</p>
                        <a href="https://domainname.andreylebedev.nomoredomains.xyz" className="portfolio__link" target="_blank" rel="noreferrer">
                            <img className="portfolio__img" src={Arrow} alt="Стрелка" />
                        </a>
                    </li>
                </ul>`
            </div>
        </div>
    )
};

export default Portfolio;