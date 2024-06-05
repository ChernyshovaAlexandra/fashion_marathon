import React from 'react'
import $ from 'jquery'
import ym from 'react-yandex-metrika';


export default class RegisterButton extends React.Component {

    yandexTarget() {
        console.log(1)
        window.ym(33805384, 'reachGoal', 'buy_marafon')
        if ($(this).data('class') !== 'final') {
            $('.darkBg').addClass('active')
        }
    }
    render() {
        const { addClass } = this.props
        return (
            <button className="yellowBut" data-class={addClass} onClick={() => this.yandexTarget()}>Записаться</button>
        )
    }
}