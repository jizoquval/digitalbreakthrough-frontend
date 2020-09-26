import React from 'react'
import { useHistory } from 'react-router-dom'
import Category from './Category.component'

export default function CategoryGrid() {
    const history = useHistory()
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Category type="attractions" onClick={() => {window.AndroidFunction && window.AndroidFunction.openAtractionsPage()}}/>
            <Category type="interests"/>
            <Category type="personalCollections"/>
            <Category type="foodcorts"/>
            <Category type="souvenirs"/>
            <Category type="bonuses" onClick={() => history.push("/digitalbreakthrough-frontend/mascot")}/>
            <Category type="replyUs"/>
        </div>
    )
}
