import { React, createContext, useState, useEffect } from 'react'
import { API } from '../Services/API';
export const Global = createContext()

function GlobalContext({ children }) {
    const [pokemons, setPokemons] = useState(null)
    const [error, setErro] = useState(null)

    useEffect(() => {
        async function GetPokemons(url) {
            try {
                let request = await fetch(url);
                let response = await request.json();
                if (!!request.ok === false) throw new Error(request.text());
                setPokemons(await (API.GetPrinciapalsPokemons(response.results)));
            }
            catch (erro) {
                setErro(erro)
            }
        }
        GetPokemons('https://pokeapi.co/api/v2/pokemon?limit=10&offset=200')
    }, [])

    return (
        <Global.Provider value={{ pokemons, error }}>
            {children}
        </Global.Provider>
    )
}

export default GlobalContext
