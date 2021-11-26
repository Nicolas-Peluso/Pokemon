import React from 'react'
import Button from '../Helper/Button'
import Style from './SlideDetails.module.scss'
import { } from 'react-icons'

function SlideDetails({ tipo, nome }) {
    return (
        <section className={Style.SlideDetails}>
            <div className={Style.Nome}>
                <p>Nome: {nome}</p>
            </div>
            <div className={Style.Especie}>
                <p>{tipo}</p>
            </div>

            <Button width={'150px'} height={'50px'}
                texto={'Ver Mais'} className={Style.Button} />
        </section>
    )
}

export default SlideDetails
