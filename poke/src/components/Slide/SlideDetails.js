import React from 'react'
import Style from './SlideDetails.module.scss'

function SlideDetails({ details }) {
    React.useEffect(() => {
        console.log(details.name);
    }, [details]);
    return (
        <div className={Style.SlideDetails}>
            <div className={Style.Nome}>
                <p>{details.name}</p>
            </div>
            <div className={Style.Especie}>
                <p>{details.types[0].type.name}</p>
            </div>
        </div>
    )
}

export default SlideDetails
