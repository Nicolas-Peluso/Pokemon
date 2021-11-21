import { React, createContext, useState, useEffect } from 'react'
import { API } from '../Services/API';
export const Global = createContext()

function GlobalContext({ children }) {
    const [pokemons, setPokemons] = useState(null)

    useEffect(() => {
        async function GetPokemons(url) {
            let request = await fetch(url);
            let response = await request.json();
            return setPokemons(await API.GetPrinciapalsPokemons(response.results));
        }
        GetPokemons('https://pokeapi.co/api/v2/pokemon?limit=10&offset=200')
    }, [])


    return (
        <Global.Provider value={{ pokemons }}>
            {children}
        </Global.Provider>
    )
}

export default GlobalContext
