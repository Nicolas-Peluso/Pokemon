import { React, useContext, useEffect } from 'react'
import Style from './SlideConteiner.module.scss'
import { Global } from '../GlobalContext'

function SlideContainer() {
    const { nome } = useContext(Global);
    useEffect(() => {
        console.log(nome)
    }, [nome])
    return (
        <section className={Style.SlideContainer}>

        </section>
    )
}

export default SlideContainer
