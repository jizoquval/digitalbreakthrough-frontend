import React from 'react'

import "./Message.styles.scss"

export default function Message({ text, rectanglePosition }) {
    return (
        <div className="message bg-white" style={{whiteSpace: "pre-wrap"}}>
            {text}
            <div className="rectangle" style={{
                left: rectanglePosition === "left"
                    ?   "15px" 
                    : rectanglePosition === "right"
                        ? `calc(100% - 45px)`
                        : `calc(50% - 15px)` 
            }}/>
        </div>
    )
}
