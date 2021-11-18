import React from 'react'
import Style from './header.module.scss'
function header({ b }) {

    return (
        <header className={Style.header}>
            <h1>{b}</h1>
        </header>
    )
}

export default header
