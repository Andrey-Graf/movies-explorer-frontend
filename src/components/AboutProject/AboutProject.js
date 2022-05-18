import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about">
                <h2 className="title about__title">О проекте</h2>
                <div className="text-grid">
                    <div className="text-grid__block">
                        <p className="text-grid__title">Дипломный проект включал 5 этапов</p>
                        <p className="text-grid__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и финальные доработки.</p>
                    </div>
                    <div className="text-grid__block">
                        <p className="text-grid__title">На выполнение диплома ушло 5 недель</p>
                        <p className="text-grid__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                            соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about__block">
                    <div className="about__back-end">
                        <p className="text">1 неделя</p>
                    </div>
                    <div className="about__front-end">
                        <p className="text text__white">4 недели</p>
                    </div>
                    <p className="text text__grey">Back-end</p>
                    <p className="text text__grey">Front-end</p>
                </div>
            </section>
    )
};

export default AboutProject;