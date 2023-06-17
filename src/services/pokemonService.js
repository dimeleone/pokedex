import EMPTY_POKEMON from '../assets/poke-empty.png'

const BASE_URL = 'https://pokeapi.co/api/v2'
const BASE_IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

async function expandPokemons(pokemons) {
    const promises = pokemons.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        return response.json()
    })
    const results = await Promise.all(promises)
    return results
}

function setPokemonImage(pokemons) {
    pokemons.forEach((pokemon) => {
        pokemon.image = `${BASE_IMAGE_URL}/${pokemon.id}.png`
    })
}

const getAll = async () => {
    const response = await fetch(`${BASE_URL}/pokemon?limit=151`)
    const data = await response.json()
    const pokemons = await expandPokemons(data.results)
    setPokemonImage(pokemons)
    return pokemons
}

const getImage = (pokemonId) => {
    return !pokemonId.toString().includes('default') ? `${BASE_IMAGE_URL}/${id}.png` : EMPTY_POKEMON
}

export default {
    getAll,
    getImage
}