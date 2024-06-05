import React from 'react'
import './index.css'
import './mobile.css'
import ScrollAnimation from 'react-animate-on-scroll';




export default class MechanicsComponent extends React.Component {
    render() {
        return (
            <div className='section mechanics'>
                <div className="section__inner">
                    <div className="section-row flexing modaAbout">
                    <h2>О трендах и модных лайфхаках</h2>
                        <div className="modaPics">
                            <div className="modaPic">
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="pic-1"></div>
                                    <ScrollAnimation animateIn="trendyLeafYellow" duration={1.5} delay={1450}><div className="modaPic-leaf-yellow"></div></ScrollAnimation>
                                    <ScrollAnimation animateIn="trendyLeaf" duration={1.5} delay={1200}><div className="modaPic-leaf"></div></ScrollAnimation>
                                    <div className="trendyBgContainer main"></div>
                                    <ScrollAnimation animateIn="trendyBg" animateOut="beforeTrendyBg" duration={1.5} delay={500}><div className="trendyBgContainer bg-1"></div></ScrollAnimation>
                                    <ScrollAnimation animateIn="trendyBg" animateOut="beforeTrendyBg" duration={1.5} delay={700}><div className="trendyBgContainer bg-2"></div></ScrollAnimation>
                                    <ScrollAnimation animateIn="trendyBg" animateOut="beforeTrendyBg" duration={1.5} delay={900}><div className="trendyBgContainer bg-3"></div></ScrollAnimation>

                                </ScrollAnimation>
                            </div>
                            <div className="modaPic">
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="pic-2"></div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="modaAboutTxt">
                            <h2>О трендах и модных лайфхаках</h2>

                            <p>World Fashion Channel знает всё о моде и поэтому мы решили поделиться с вами знаниями
                            и модными лайфхаками, которые можно применить на практике прямо сейчас. Мы запускаем
                                     наш первый онлайн-марафон «Fashion марафон».</p>
                        </div>
                    </div>
                    <div className="section-row stepsModa">
                        <h2>Вам важно участвовать, если:</h2>
                        <div className="section__inner-row flexing allSteps">
                        
                            <div className="step">
                                <table>
                                    <tbody>
                                        <tr>
                                        <ScrollAnimation animateIn="fadeInUp"  delay={500}><td className="red number-step" data-number="1">1</td></ScrollAnimation>
                                        <td><ScrollAnimation animateIn="fadeInUp"  delay={500}>  У вас много вещей, но всегда <b>нечего надеть</b></ScrollAnimation></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="step">
                                <table>
                                    <tbody>
                                        <tr>
                                        <ScrollAnimation animateIn="fadeInUp" delay={1000}><td className="red number-step" data-number="2">2</td></ScrollAnimation>
                                        <td><ScrollAnimation animateIn="fadeInUp"delay={1000}>  Давно <b>не обновляли гардероб</b> и не знаете, с чего начать</ScrollAnimation></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="step">
                                <table>
                                    <tbody>
                                        <tr>
                                        <ScrollAnimation animateIn="fadeInUp" delay={1500}><td className="red number-step" data-number="3">3</td></ScrollAnimation>
                                        <td><ScrollAnimation animateIn="fadeInUp" delay={1500}>  Чувствуете, что <b>не хватает знаний</b> в области трендов</ScrollAnimation></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="step">
                                <table>
                                    <tbody>
                                        <tr>
                                        <ScrollAnimation animateIn="fadeInUp" delay={2000}><td className="red number-step" data-number="4">4</td></ScrollAnimation>
                                        <td><ScrollAnimation animateIn="fadeInUp" delay={2000}>  Хотите <b>повысить свой статус и экспертность</b> с помощью одежды</ScrollAnimation></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}