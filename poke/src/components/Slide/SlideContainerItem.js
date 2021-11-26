import React from 'react'
import Style from "./SlideContainerItem.module.scss"
import SlideDetails from './SlideDetails'
import SlidePhoto from './SlidePhoto'

function SlideContainerItem({ src, tipo, nome }) {
    return (
        <section className={`${Style.SlideContainerItem}`}>
            <SlidePhoto src={src} />
            <SlideDetails tipo={tipo} nome={nome} />
        </section>
    )
}


export default SlideContainerItem
