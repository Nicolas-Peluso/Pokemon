export const API = {
    async GetPrinciapalsPokemons(urls) {
        let request = Promise.all(urls.map(async url => {
            let response = await fetch(url.url)
            return await response.json()
        }))
        return await request
    }
}