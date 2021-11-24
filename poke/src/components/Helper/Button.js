import React from 'react'
import Style from './Button.module.scss'
function Button({ texto, width, height }) {
    return (
        <button className={Style.Button}
            style={{
                width: width,
                height: height
            }}>
            {texto}
        </button>

    )
}

export default Button
