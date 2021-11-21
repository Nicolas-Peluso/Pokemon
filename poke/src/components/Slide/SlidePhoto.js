import React from 'react'
import Style from './SlidePhoto.module.scss'


function SlidePhoto({ src }) {
    return (
        <div className={Style.SlidePhoto} key={src.length}>
            <img src={src} alt={src} key={src.length * 2} />
        </div>
    )
}

export default SlidePhoto
