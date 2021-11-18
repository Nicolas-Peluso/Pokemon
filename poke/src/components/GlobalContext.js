import { React, createContext } from 'react'
export const Global = createContext()

function GlobalContext({ children }) {
    const pokemons = { nome: "charmander", idade: 44 }
    return (
        <Global.Provider value={pokemons}>
            {children}
        </Global.Provider>
    )
}

export default GlobalContext
