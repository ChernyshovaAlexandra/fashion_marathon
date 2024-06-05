import React from 'react'
import './index.css'
import RegisterButton from '../RegisterButton'
import Name from '../Name'
import './mobile.css'
import Oferta from '../../dogovor_oferty.pdf'

export default class FooterComponent extends React.Component {
    render() {
        return (
            <div className='section footer redbg'>
                <div className="section__inner welcomeTxt flexing">
                    <div className="section__row">
                        <p className="coast" style={{'position': 'relative'}}>Стоимость: <b><s><small>1500</small></s> 750</b>&nbsp;руб.&nbsp;
                        </p>
                        {/* <p className="coast">С 1 мая: <b>2000</b> руб.</p> */}
                        <RegisterButton />
                        <div className="agit">
                            <p>Быть стильной просто, запишись на марафон</p>
                        </div>
                    </div>
                    <div className="section__row">
                        <Name />
                    </div>

                </div>
                <div className="rekvisity">
                    <div className="section__inner">
                        <div className="section__row flexing indent">
                            <p className="coast"><b>реквизиты:</b></p>
                            <div className="footer-rekv-div">
                                <p> Общество с ограниченной ответственностью «УОРЛД ФЭШН ПРОДАКШН»</p>
                                <p> <b>ИНН</b>      7718310107</p>
                                <p> <b>ОГРН</b>    5147746407529</p>

                            </div>
                            <div className="footer-rekv-div">
                                <p> <b>123112, г. Москва, 1-й Красногвардейский проезд, д.15, 5 этаж</b></p>
                                <p> <b>Тел:</b><a href="tel:+79251400658">+7 925 140-0658</a></p>
                                <p> <b>E-mail:</b><a href="mailto:digital@wfc.tv">digital@wfc.tv</a></p>
                            </div>
                        </div>
                        <div className="section__row flexing links-to-al indent">
                            <p className="link-to"><a href={Oferta} target="_blank">Договор-оферта</a></p>
                            <p className="link-to"><a href="https://wfc.tv/ru/p/policy" target="_blank">Политика конфиденциальности</a></p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div >
        )
    }
}