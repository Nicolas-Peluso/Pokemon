export const API = {
    async GetPrinciapalsPokemons(urls) {
        const arr = []
        await urls.map(async (url) => {
            fetch(`${url.url}`).then(response => response.json())
                .then(json => arr.push(json))
        })
        return arr
    }
}