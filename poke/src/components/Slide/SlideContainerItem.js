import React from 'react'
import Style from "./SlideContainerItem.module.scss"
import SlideDetails from './SlideDetails'
import SlidePhoto from './SlidePhoto'

function SlideContainerItem({ src, details }) {
    return (
        <div className={Style.SlideContainerItem}>
            <SlidePhoto src={src} />
            <SlideDetails details={details}/>
        </div>
    )
}


export default SlideContainerItem
