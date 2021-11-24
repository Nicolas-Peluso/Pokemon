import React from 'react'
import Style from './SlidePhoto.module.scss'


function SlidePhoto({ src, className }) {
    return (
        <div className={Style.SlidePhoto} key={src.length}  >
            <img src={src} alt={src} key={src.length * 2} className={className} />
        </div>
    )
}

export default SlidePhoto
