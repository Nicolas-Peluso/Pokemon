import { React, useContext, useState, useEffect, useRef } from 'react';
import Style from './SlideContainer.module.scss';
import { Global } from '../GlobalContext';
import SlideContainerItem from './SlideContainerItem';
import { CgPokemon } from 'react-icons/cg';

function SlideContainer() {
    const context = useContext(Global);
    const [data, setData] = useState(null);
    const [IsPress, setIsPress] = useState(false)
    const [translateX, setTranslateX] = useState(0)
    const [Estados, setEstados] = useState({ startX: 0, movement: 0, finalPosition: 0 })
    const Container = useRef(null);
    const Slide = useRef(null);

    useEffect(() => {
        if (context.pokemons) {
            setData(context.pokemons);
        }
    }, [context]);

    function MouseMove(evento) {
        let SubMoviment = (evento.clientX - Estados.startX) * 1.6;
        let MovimentFinal = SubMoviment - Estados.finalPosition;
        setEstados({ ...Estados, movement: -MovimentFinal })
        setTranslateX(-Estados.movement)


        console.log("eu parei em", Estados.startX)
        console.log("e meu valor atual é", -Estados.movement <= 0)
        console.log("e meu valor atual é", Estados.movement)
        console.log("width do container", Container.current.offsetWidth)
        console.log("width do Slide", Estados.movement < Slide.current.offsetWidth)
    }

    function mousePress(e) {
        e.preventDefault()
        setIsPress(true);
        setEstados({ ...Estados, startX: e.clientX })
    }

    function MouseLeave() {
        setIsPress(false)
        setEstados({ ...Estados, finalPosition: Estados.movement })
        Slide.current.removeEventListener('onMouseDown', mousePress);
        Slide.current.removeEventListener('onMouseMove', MouseMove);
        Slide.current.removeEventListener('onMouseUp', MouseLeave);
    }

    return (
        <section className={Style.Container} ref={Container}>
            <h1 className={Style.SlideTitle}>Slide<CgPokemon /> </h1>
            <section className={Style.SlideContainer}
                onMouseDown={mousePress}
                onMouseMove={IsPress ? MouseMove : null}
                onMouseUp={MouseLeave}
                style={{ transform: `translate3d(${translateX}px , 0 , 0)` }}
                ref={Slide}>
                {
                    data && data.map(pokemon => (
                        <SlideContainerItem src={pokemon.sprites.other.dream_world.front_default} key={pokemon.name} tipo={pokemon.types[0].type.name} nome={pokemon.name} />
                    ))
                }
            </section>
        </section>
    )
}

export default SlideContainer;
