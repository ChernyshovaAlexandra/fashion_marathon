import React from 'react'
import './index.css'
import './mobile.css'



export default class AboutComponent extends React.Component {
    componentDidMount() {
        const max = 20080;
        const spanHeart = document.querySelector('#instagram-heart');
        const spanCount = document.querySelector('#instagram-like-count');

        let count = 0;
        let timer = setInterval(() => {
            if (count > max) {
                clearInterval(timer);
                count = 0;
            }
            else {
                spanHeart.classList.add('animate-beat');
                spanCount.textContent = ++count;

                spanCount.classList.add('animate-count');

                setTimeout(() => {
                    spanCount.classList.remove('animate-count');
                    spanHeart.classList.remove('animate-beat');
                }, 500000);
            }
        }, 6);
    }
    render() {
        return (
            <div className='section about'>
                <div className="section__inner">
                    <h2>Как будет проходить марафон</h2>
                    <p className="centred"><b>Вас ждет теория и практика – скучать не придется!<br />3 дня – 3 прямых эфира с гуру индустрии моды</b></p>
                    <div className="section-row flexing informationData">
                        <div className="card">
                            <div className="date-point">
                                <h4 className="date red">19 мая</h4>
                                <p><b>«Главные тренды сезона весна-лето 2020»</b></p>
                                <p className="gray">Спикер - Анна Лебсак-Клейманс</p>
                            </div>
                            <div className="date-point">
                                <h4 className="date red">20 мая</h4>
                                <p><b>«Как подиумные образы адаптировать к своему гардеробу»</b></p>
                                <p className="gray">Спикер - Надия Даниличева</p>
                            </div>
                            <div className="date-point">
                                <h4 className="date red">24 мая</h4>
                                <p><b>«Акцент на детали: как красиво завязать платок»</b></p>
                                <p className="gray">Спикер - Александра Калошина</p>
                            </div>
                        </div>
                        <div className="additional-content">
                            <div className="additional">
                                <p>Встречи будут проходить в режиме онлайн в закрытом Instagram-аккаунте марафона. После завершения марафона у вас будет доступ к записям уроков и возможность пересматривать их в любое удобное время.</p>
                                <div className="instaCounter">
                                    <span className="instagram-like">
                                        <span id="instagram-heart">&hearts;</span>
                                        <span id="instagram-like-count">&nbsp;&nbsp;</span>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div>
        )
    }
}