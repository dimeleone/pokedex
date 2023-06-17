import { render } from "@testing-library/react-native"
import helper from "../../../src/utils/helper"
import colorConstants from "../../../src/constants/colorConstants"
import PokeDetail from '../../../src/components/common/PokeDetail'

import pokemon from '../../assets/mock/pokemon.json'

describe('Teste do componente PokeDetail', () => {
    it('Deve exibir a imagem do pokemon', () => {
        const { getByTestId } = render(<PokeDetail pokemon={pokemon} />)
        const pokeImage = getByTestId('poke-image')
        expect(pokeImage.props.source.uri).toBe(pokemon.image)
    })

    it('Deve exibir os tipos do pokemon com as cores apropriadas', () => {
        const { getByTestId } = render(<PokeDetail pokemon={pokemon} />)
        const pokeTypes = getByTestId('poke-types')
        expect(pokeTypes.children.length).toBe(pokemon.types.length)
        expect(pokeTypes.children[0].props.children).toBe(helper.makeFirstLetterUpperCase(pokemon.types[0].type.name))
        expect(pokeTypes.children[1].props.children).toBe(helper.makeFirstLetterUpperCase(pokemon.types[1].type.name))
        expect(pokeTypes.children[0].props.style.backgroundColor).toBe(colorConstants.pokemonTypes[pokemon.types[0].type.name])
        expect(pokeTypes.children[1].props.style.backgroundColor).toBe(colorConstants.pokemonTypes[pokemon.types[1].type.name])
    })

    it('Deve exibit a descrição do pokemon', () => {
        const { getByTestId } = render(<PokeDetail pokemon={pokemon} />)
        const pokeDescription = getByTestId('poke-description')
        expect(pokeDescription.props.children).toBe(pokemon.description)
    })

    it('Deve exibir as estatísticas do pokemon com as cores apropriadas', () => {
        const { getByTestId } = render(<PokeDetail pokemon={pokemon} />)
        const pokeStats = getByTestId('poke-stats')

        expect(pokeStats.children.length).toBe(pokemon.stats.length)

        expect(pokeStats.children[0].props.children[0].props.children).toBe(helper.mapStatsTitle(pokemon.stats[0].stat.name))
        expect(pokeStats.children[0].props.children[1].props.progress).toBe(pokemon.stats[0].base_stat / 100)
        expect(pokeStats.children[0].props.children[1].props.color).toBe(colorConstants.pokemonTypes[pokemon.types[0].type.name])

        expect(pokeStats.children[1].props.children[0].props.children).toBe(helper.mapStatsTitle(pokemon.stats[1].stat.name))
        expect(pokeStats.children[1].props.children[1].props.progress).toBe(pokemon.stats[1].base_stat / 100)
        expect(pokeStats.children[1].props.children[1].props.color).toBe(colorConstants.pokemonTypes[pokemon.types[0].type.name])

        expect(pokeStats.children[2].props.children[0].props.children).toBe(helper.mapStatsTitle(pokemon.stats[2].stat.name))
        expect(pokeStats.children[2].props.children[1].props.progress).toBe(pokemon.stats[2].base_stat / 100)
        expect(pokeStats.children[2].props.children[1].props.color).toBe(colorConstants.pokemonTypes[pokemon.types[0].type.name])

        expect(pokeStats.children[3].props.children[0].props.children).toBe(helper.mapStatsTitle(pokemon.stats[3].stat.name))
        expect(pokeStats.children[3].props.children[1].props.progress).toBe(pokemon.stats[3].base_stat / 100)
        expect(pokeStats.children[3].props.children[1].props.color).toBe(colorConstants.pokemonTypes[pokemon.types[0].type.name])

        expect(pokeStats.children[4].props.children[0].props.children).toBe(helper.mapStatsTitle(pokemon.stats[4].stat.name))
        expect(pokeStats.children[4].props.children[1].props.progress).toBe(pokemon.stats[4].base_stat / 100)
        expect(pokeStats.children[4].props.children[1].props.color).toBe(colorConstants.pokemonTypes[pokemon.types[0].type.name])

        expect(pokeStats.children[5].props.children[0].props.children).toBe(helper.mapStatsTitle(pokemon.stats[5].stat.name))
        expect(pokeStats.children[5].props.children[1].props.progress).toBe(pokemon.stats[5].base_stat / 100)
        expect(pokeStats.children[5].props.children[1].props.color).toBe(colorConstants.pokemonTypes[pokemon.types[0].type.name])
    })

    it('Deve retornar null caso o pokemon não seja informado', () => {
        const { queryByTestId } = render(<PokeDetail />)
        const pokeImage = queryByTestId('poke-image')
        const pokeTypes = queryByTestId('poke-types')
        const pokeDescription = queryByTestId('poke-description')
        const pokeStats = queryByTestId('poke-stats')

        expect(pokeImage).toBeNull()
        expect(pokeTypes).toBeNull()
        expect(pokeDescription).toBeNull()
        expect(pokeStats).toBeNull()
    })
})