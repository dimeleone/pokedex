import { render } from "@testing-library/react-native"
import helper from "../../../src/utils/helper"
import colorConstants from "../../../src/constants/colorConstants"
import PokeCard from '../../../src/components/common/PokeCard'

import pokemon from '../../assets/mock/pokemon.json'

describe('Teste do componente PokeCard', () => {
    it('Deve exibir a imagem do pokemon', () => {
        const { getByTestId } = render(<PokeCard pokemon={pokemon} />)
        const pokeImage = getByTestId('poke-image')
        expect(pokeImage.props.source.uri).toBe(pokemon.image)
    })

    it('Deve exibir o nome do pokemon com a primeira letra maiúscula', () => {
        const { getByTestId } = render(<PokeCard pokemon={pokemon} />)
        const pokeName = getByTestId('poke-name')
        expect(pokeName.children[0]).toBe(helper.makeFirstLetterUpperCase(pokemon.name))
    })

    it('Deve exibir o nome do pokemon com a cor de fundo de acordo com o tipo', () => {
        const { getByTestId } = render(<PokeCard pokemon={pokemon} />)
        const pokeName = getByTestId('poke-name')
        expect(pokeName.props.style.backgroundColor).toBe(colorConstants.pokemonTypes[pokemon.types[0].type.name])
    })

    it('Deve exibir o nome do pokemon com a cor de fundo padrão quando o tipo não estiver mapeado', () => {
        const { getByTestId } = render(<PokeCard pokemon={{ ...pokemon, types: [{ type: { name: 'teste' } }] }} />)
        const pokeName = getByTestId('poke-name')
        expect(pokeName.props.style.backgroundColor).toBe(colorConstants.pokemonTypes['default'])
    })

    it('Deve preencher a borda do card com a cor de fundo de acordo com o tipo', () => {
        const { getByTestId } = render(<PokeCard pokemon={pokemon} />)
        const pokeCard = getByTestId('poke-card')
        expect(pokeCard.props.style.borderColor).toBe(colorConstants.pokemonTypes[pokemon.types[0].type.name])
    })

    it('Deve preencher a borda do card com a cor de fundo padrão quando o tipo não estiver mapeado', () => {
        const { getByTestId } = render(<PokeCard pokemon={{ ...pokemon, types: [{ type: { name: 'teste' } }] }} />)
        const pokeCard = getByTestId('poke-card')
        expect(pokeCard.props.style.borderColor).toBe(colorConstants.pokemonTypes['default'])
    })

    it('Não deve exibir o card quando o pokemon for nulo', () => {
        const { queryByTestId } = render(<PokeCard pokemon={null} />)
        const pokeCard = queryByTestId('poke-card')
        expect(pokeCard).toBeNull()
    })
})