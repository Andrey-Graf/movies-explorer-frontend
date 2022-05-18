import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <nav className="footer__nav">
                <p className="footer__yers">&copy; 2022</p>
                <ul className="footer__links">
                    <li><a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a></li>
                    <li><a href="/" className="footer__link">Github</a></li>
                    <li><a href="/" className="footer__link">Facebook</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;