import React, { Component } from 'react'
import Message from '../components/Message.component'

import "./Welcome.styles.scss"

const msg = `Привет! Я так рад видеть тебя! Давай дружить, я покажу самые крутые развлечения?
Мы весело проведем этот день!`

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome-page">
                <Message text={msg}/>
            </div>
        )
    }
}
