import React from 'react'
import './index.css'
import Wfc from '../../images/wfc.png'





export default class OrganizationComponent extends React.Component {
    render() {
        return (
            <section className="section organiz mechanics">
                <div className="section__inner">
                    <div className="row section-row">
                        <div className="col">
                            <p>Организатор <b>первого Fashion-марафона</b> – международный телеканал о современных тенденциях в индустрии моды <b>World Fashion Channel</b>.
                            Мы работаем с 2003 года и из первых уст рассказываем о том, что происходит в мире моды и за его кулисами.
                            Репортажи с закрытых мероприятий, модных показов Милана и Парижа, интервью с ведущими дизайнерами,
                            собственные реалити-шоу с моделями, съемки с ведущими фотографами и моделями… – рассказываем и показываем
                            об этом и о многом другом на английском и русском языках в формате 24/7.</p>
                            <p>Аудитория канала World Fashion Channel и сайта WFC.tv насчитывает <b>5&#160;миллионов телезрителей и читателей</b> из России,
                             стран СНГ, Европы, Среднего Востока, Америки и Северной Африки, а также более 1&#160;млн подписчиков в социальных сетях по всему миру.</p>
                            <p>Мы двигаемся вперед, и настало время поделиться своим опытом и накопленными знаниями с людьми, которые хотят быть ближе к
                            модной индустрии. Наши приглашенные эксперты из индустрии моды вместе с редакцией телеканала уже в мае проведут первый Fashion-марафон.
                        Именно вы можете стать его участником – достаточно <b>заполнить заявку на сайте</b>. Идем к успеху вместе!</p>
                        </div>
                        <div className="col">
                            <img src={Wfc} alt="logo Wfc" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}