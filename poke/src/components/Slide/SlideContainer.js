import { React, useContext, useState, useEffect } from 'react';
import Style from './SlideContainer.module.scss';
import { Global } from '../GlobalContext';
import SlideContainerItem from './SlideContainerItem';
import { CgPokemon } from 'react-icons/cg';

function SlideContainer() {
    const context = useContext(Global);
    const [data, setData] = useState(null);
    const [IsPress, setIsPress] = useState(false)
    const [translateX, setTranslateX] = useState(0)
    const [Estados, setEstados] = useState({
        startX: 0,
        movement: 0,
        finalPosition: 0
    })

    useEffect(() => {
        if (context.pokemons) {
            setData(context.pokemons);
        }
    }, [context]);

    function MouseMove(evento) {
        //console.log("mouse Move", evento.clientX)
        setEstados({
            ...Estados,
            movement: -(evento.clientX - Estados.startX) - Estados.finalPosition
        })
        console.log("eu parei em", Estados.startX)
        console.log("e meu valor atual é", Estados.movement)
        setTranslateX(Estados.movement)
    }

    function mousePress(e) {
        e.preventDefault()
        setEstados({ ...Estados, startX: e.clientX })
        setIsPress(true);
    }

    function MouseLeave(e) {
        setIsPress(false)
        setEstados({
            ...Estados,
            finalPosition: Estados.movement
        })
    }

    return (
        <section className={Style.Container}>
            <h1 className={Style.SlideTitle}>Slide<CgPokemon /> </h1>
            <section className={Style.SlideContainer}
                onMouseDown={mousePress}
                onMouseMove={IsPress ? MouseMove : null}
                onMouseUp={MouseLeave}
                style={{
                    transform: `translate3d(${translateX}px , 0 , 0)`
                }}
            >
                {
                    data && data.map(pokemon => (
                        <SlideContainerItem src={pokemon.sprites.other.dream_world.front_default} key={pokemon.name} details={pokemon} />
                    ))
                }
            </section>
        </section>
    )
}

export default SlideContainer;
