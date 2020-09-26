import React from 'react'

import "./Message.styles.scss"

export default function Message({ text }) {
    return (
        <div className="message bg-white">
            {text}
        </div>
    )
}
