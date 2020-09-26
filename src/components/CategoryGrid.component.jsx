import React from 'react'
import Category from './Category.component'

export default function CategoryGrid() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Category type="attractions"/>
            <Category type="interests"/>
            <Category type="personalCollections"/>
            <Category type="foodcorts"/>
            <Category type="souvenirs"/>
            <Category type="bonuses"/>
            <Category type="replyUs"/>
        </div>
    )
}
