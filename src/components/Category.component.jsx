import React from 'react'
import attractions from "../assets/icons/attractions.png"
import interests from "../assets/icons/interests.png"
import map from "../assets/icons/map.png"
import personalCollections from "../assets/icons/personalCollections.png"
import foodcorts from "../assets/icons/foodcorts.png"
import souvenirs from "../assets/icons/souvenirs.png"
import bonuses from "../assets/icons/bonuses.png"
import replyUs from "../assets/icons/replyUs.png"

export default function Category({ type }) {
    let src = null
    switch(type) {
        case "attractions":
            src = attractions
            break;
        case "interests":
            src = interests
            break
        case "map":
            src = map
            break;
        case "personalCollections":
            src = personalCollections
            break
        case "foodcorts":
            src = foodcorts
            break
        case "souvenirs":
            src = souvenirs
            break
        case "bonuses":
            src = bonuses
            break
        case "replyUs":
            src = replyUs
            break
    }
    return (
        <div className="w-50 p-2">
            <img src={src} className="w-100"/>
        </div>
    )
}
