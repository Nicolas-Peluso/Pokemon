import React from 'react'
import Button from '../Helper/Button'
import Style from './SlideDetails.module.scss'
import { } from 'react-icons'

function SlideDetails({ details }) {
    return (
        <section className={Style.SlideDetails}>
            <div className={Style.Nome}>
                <p>Nome: {details.name}</p>
            </div>
            <div className={Style.Especie}>
                <p>{details.types[0].type.name}</p>
            </div>

            <Button width={'150px'} height={'50px'}
                texto={'Ver Mais'} className={Style.Button} />
        </section>
    )
}

export default SlideDetails
