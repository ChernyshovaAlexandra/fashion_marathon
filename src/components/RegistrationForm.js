import React from 'react'
import RegisterButton from './RegisterButton'
import $ from 'jquery'
import SuccesForm from './SuccesForm'
import Oferta from '../dogovor_oferty.pdf'

export default class RegistraionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            insta: '',
            success: false
        }
        console.log(window.location.href.toString().indexOf('?result=show'))
    }
    componentDidMount() {
        if (window.location.href.toString().indexOf('?result=show') !== -1) {
            this.setState({
                success: true
            })
            $('.darkBg').addClass('active');
            
        }
    }
    handleSubmit = () => {
        $('.darkBg').removeClass('active')
    }
    handleClick = () => {
        $('.darkBg').removeClass('active')
    }
    render() {
        return (
            <div className="darkBg">
                {!this.state.success &&
                    <form className="registerForm" action="https://wfc.tv/ru/transaction/make" method="post" onSubmit={this.handleSubmit}>
                        <div className="cancelBut" onClick={this.handleClick}></div>
                        <h2>Записаться на марафон</h2>
                        <input type="hidden" name="purpose" value="marathon0420"></input>
                        <div className="flexing form-components">
                            <div className="form-component">
                                <h4>Имя</h4>
                                <input type="text" name="name" placeholder="Имя" required />
                            </div>
                            <div className="form-component">
                                <h4>Фамилия</h4>
                                <input type="text" name="lastName" placeholder="Фамилия" required />
                            </div>
                            <div className="form-component">
                                <h4>E-mail</h4>
                                <input type="email" name="email" placeholder="E-mail" required />
                            </div>
                            <div className="form-component">
                                <h4>Инстаграм</h4>
                                <input type="text" name="insta" placeholder="Инстаграм" required />
                            </div>
                        </div>
                        <RegisterButton addClass="final" />
                        <div className="agreement">
                            <input type="checkbox" required /><p></p> <label>я согласен с <a  href="https://wfc.tv/ru/p/policy" target="_blank" >политикой конфиденциальности</a> и <a href={Oferta} target="_blank">обработкой данных</a></label>
                        </div>
                    </form>}
                {this.state.success &&
                    <form className="registerForm" action="https://wfc.tv/ru/transaction/make" method="post" onSubmit={this.handleSubmit}>
                        <div className="cancelBut" onClick={this.handleClick}></div>
                        <h2>Спасибо за оплату! </h2>
                        <SuccesForm />
                    </form>}
            </div>
        )
    }
}