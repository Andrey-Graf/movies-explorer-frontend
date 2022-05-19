import React from 'react';
import studentImg from '../../images/student.svg';
import './AboutMe.css'

function AboutMe() {
    return (
        <section className="student">
            <div className="student__section">
                <h2 className="title student__title">Студент</h2>
                <div className="student__info">
                    <div className="student__card">
                        <p className="student__paragraph">Андрей</p>
                        <p className="student__subtitle">Фронтенд-разработчик, 34 года</p>
                        <p className="student__text">Я родился и живу в Калининграде. Окончил Балтийский Информационный
                            техникум в 2008 году. Окончил обучение в Яндекс Практикум - “Веб-разработчик” в 2022году. У
                            меня есть жена и двое детей. Занимаюсь спортом “воздушная акробатика”.</p>
                        <ul className="student__list">
                            <li><a className="student__link" href="/">Facebook</a></li>
                            <li><a className="student__link" href="https://github.com/Andrey-Graf">Github</a></li>
                        </ul>
                    </div>
                    <img src={studentImg} alt="Студент" className="student__img" />
                </div>
            </div>
        </section>
    )
};

export default AboutMe;