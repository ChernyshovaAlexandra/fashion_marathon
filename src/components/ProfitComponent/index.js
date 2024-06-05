import React from 'react'
import './index.css'
import RegisterButton from '../RegisterButton'
import Coat from '../../images/coat.png'
import Scarf from '../../images/scarf.png'
import Question from '../../images/question.png'
import './mobile.css'
import ScrollAnimation from 'react-animate-on-scroll';

export default class ProfitComponent extends React.Component {
    render() {
        return (
            <div className='section profit bluebg'>
                <div className="section__inner">
                    <h2>Что вы получите?</h2>
                    <div className="section-row flexing profit-points-content">
                        <div className="profit-point flexing">
                            <ScrollAnimation animateIn="fadeInLeft" delay={1000}> <img src={Coat} alt="img"  /></ScrollAnimation>
                            <p> <ScrollAnimation animateIn="fadeInLeft" delay={1000}> Научитесь разбираться в трендах сезона весна-лето 2020</ScrollAnimation></p>
                        </div>
                        <div className="profit-point flexing">
                        <ScrollAnimation animateIn="fadeInLeft" delay={500}> <img src={Scarf} alt="img"  /></ScrollAnimation>
                            <p><ScrollAnimation animateIn="fadeInLeft" delay={500}> Освоите крутые приемы по стилизации аксессуаров</ScrollAnimation></p>
                        </div>
                        <div className="profit-point flexing">
                        <ScrollAnimation animateIn="fadeInLeft" delay={0}> <img src={Question}  alt="img" /></ScrollAnimation>
                            <p><ScrollAnimation animateIn="fadeInLeft" delay={0}> Получите возможность задать вопрос нашим экспертам</ScrollAnimation></p>
                        </div>
                    </div>
                    <div className="centred">
                        <p><b className="adding">А также примете участие в розыгрыше крутых подарков от наших партнеров!</b></p>
                       <p className="centred"> <RegisterButton />
                       </p>
                       <p class="coast indent">Стоимость: <b><s><small>1500</small></s> 750</b>&nbsp;руб.&nbsp;</p>
                       {/* ,  С 1 мая <b>2000</b> руб. */}
                    </div>
                </div>
            </div >
        )
    }
}