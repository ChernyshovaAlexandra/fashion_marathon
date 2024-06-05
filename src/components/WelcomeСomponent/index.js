import React from 'react'
import './index.css'
import './mobile.css'
import RegisterButton from '../RegisterButton'
import logo from '../../images/wfc_gorizont-white.svg'
import Name from '../Name'
import RegistraionForm from '../RegistrationForm'


export default class WelcomeComponent extends React.Component {
    
    render() {
        return (
            <div className='section welcome redbg'>
                <div className="section__inner">
                    <div className="content startw flexing">
                        <div className="welcomeTxt">
                            <a href="/"><img src={logo} alt="img" /></a>
                            <Name />
                            <RegisterButton />
                            
                <p className="coast">Стоимость: <b><s><small>1500</small></s> 750</b>&nbsp;руб.&nbsp;</p>
                {/* ,  С 1 мая <b>2000</b> руб.</p> */}
                        </div>
                        <div className="ladyBlock">
                            <div className="ladyContentbg"></div>
                            <div className="leaf-wind">
                                <div className="leaf-from-3-1"></div>
                                <div className="leaf-from-3-2"></div>
                                <div className="leaf-from-3-3"></div>
                            </div>
                            <div className="violetLeaf"></div>
                            <div className="yellowLeaf2"></div>
                            <div className="redLeaf"></div>
                            <div className="yellowLeaf"></div>
                            <div className="ladyContentbg">
                            </div>
                            <div className="cloud"></div>
                            <div className="lady"></div>
                            <div className="cloud-2"></div>
                        </div>
                    </div>
                </div >
                <RegistraionForm/>
            </div >
        )
    }
}