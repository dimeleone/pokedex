const BASE_URL = 'https://pokeapi.co/api/v2'
const BASE_IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'
const EMPTY_POKEMON_IMAGE_URL = 'https://github.com/dimeleone/pokedex/blob/master/src/assets/poke-empty.png?raw=true'

async function expandPokemons(pokemons) {
    const promises = pokemons.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        return response.json()
    })
    const results = await Promise.all(promises)
    return results
}

const getAll = async () => {
    const response = await fetch(`${BASE_URL}/pokemon?limit=151`)
    const data = await response.json()
    const pokemons = await expandPokemons(data.results)
    return pokemons
}

const getById = async (pokemonId) => {
    const response = await fetch(`${BASE_URL}/pokemon/${pokemonId}`)
    const data = await response.json()
    return data
}

const getImage = (pokemonId) => {
    return !pokemonId.toString().includes('default') ? `${BASE_IMAGE_URL}/${pokemonId}.png` : EMPTY_POKEMON_IMAGE_URL
}

export default {
    getAll,
    getImage,
    getById
}