import React from 'react'
import Style from "./SlideContainerItem.module.scss"
import SlideDetails from './SlideDetails'
import SlidePhoto from './SlidePhoto'

function SlideContainerItem({ src, details }) {
    return (
        <section className={`${Style.SlideContainerItem}`}>
            <SlidePhoto src={src} />
            <SlideDetails details={details} />
        </section>
    )
}


export default SlideContainerItem
