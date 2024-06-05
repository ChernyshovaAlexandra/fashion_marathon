import React from 'react'
import './index.css'
import { experty } from '../../constants/experty.js'
import ScrollAnimation from 'react-animate-on-scroll';
import './mobile.css'
class Expert extends React.Component {

    render() {
        const { txt, name, img, delay, link } = this.props;
        return (
            <div className="expert centred">
                <ScrollAnimation animateIn="fadeIn" delay={delay} >
                    <div className="expert-photo">
                        <a className="expert-photo-inner" href={link} target="_blank">
                            <img src={img} alt="img" />
                        </a>
                    </div>
                    <div className="expertName red"><h4>{name}</h4></div>
                    <p className="aboutExpert">{txt}</p>
                </ScrollAnimation>
            </div>
        )
    }
}

export default class ExpertsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            experts: experty
        }
    }
    render() {
        const { experts } = this.state
        const Experts = experts
        return (
            <div className='section experts graybg'>
                <div className="section__inner">
                    <h2>Наши эксперты</h2>
                    <div className="flexing experts-container">
                        {Experts.map((item, index) => (
                            <Expert txt={item.txt} name={item.name} img={item.img} key={index} delay={500 * index} link={item.link}/>
                        ))}
                    </div>
                </div>
            </div >
        )
    }
}