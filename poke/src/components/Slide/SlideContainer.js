import { React, useContext, useState, useEffect } from 'react'
import Style from './SlideConteiner.module.scss'
import { Global } from '../GlobalContext'
import SlidePhoto from './SlidePhoto';

function SlideContainer() {
    const context = useContext(Global);
    const [data, setData] = useState(() => context.pokemons)

    return (
        <section className={Style.SlideContainer}>
            {
                !!data && data.map(pokemon => (
                    <SlidePhoto src={pokemon.sprites.other["official-artwork"].front_default} />
                ))
            }
        </section>
    )
}

export default SlideContainer
