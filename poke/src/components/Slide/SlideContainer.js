import { React, useContext, useState, useEffect } from 'react';
import Style from './SlideContainer.module.scss';
import { Global } from '../GlobalContext';
import SlideContainerItem from './SlideContainerItem';

function SlideContainer() {
    const context = useContext(Global);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (context.pokemons) {
            setData(context.pokemons);
        }
    }, [context]);


    return (
        <section className={Style.SlideContainer}>
            {
                data && data.map(pokemon => (
                    <SlideContainerItem src={pokemon.sprites.other["official-artwork"].front_default} key={pokemon.name} details={pokemon} />
                ))
            }
        </section>
    )
}

export default SlideContainer;
