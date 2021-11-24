import React from 'react'
import Button from '../Helper/Button'
import Style from './SlideDetails.module.scss'

function SlideDetails({ details }) {
    return (
        <div className={Style.SlideDetails}>
            <div className={Style.Nome}>
                <p>Nome: {details.name}</p>
            </div>
            <div className={Style.Especie}>
                <p>Tipo: {details.types[0].type.name}</p>
            </div>

            <Button width={'150px'} height={'50px'}
                texto={'Ver Mais'} className={Style.Button} />
        </div>
    )
}

export default SlideDetails
