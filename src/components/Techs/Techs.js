import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className="tech">
            <div className="tech__section">
                <h2 className="title tech__title">Технологии</h2>
                <p className="tech__paragraph">7 технологий</p>
                <p className="tech__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                    проекте.</p>
                <ul className="tech__grid">
                    <li className="tech__icon">
                        <p className="text text__icon">НTML</p>
                    </li>
                    <li className="tech__icon">
                        <p className="text text__icon">CSS</p>
                    </li>
                    <li className="tech__icon">
                        <p className="text text__icon">JS</p>
                    </li>
                    <li className="tech__icon">
                        <p className="text text__icon">React</p>
                    </li>
                    <li className="tech__icon">
                        <p className="text text__icon">Git</p>
                    </li>
                    <li className="tech__icon">
                        <p className="text text__icon">Expressjs</p>
                    </li>
                    <li className="tech__icon">
                        <p className="text text__icon">mongoDB</p>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Techs;