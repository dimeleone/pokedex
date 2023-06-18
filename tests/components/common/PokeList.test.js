import { render } from "@testing-library/react-native"
import { TouchableOpacity } from 'react-native'
import PokeList from '../../../src/components/common/PokeList'

import pokemons from '../../assets/mock/pokemons.json'

describe('Teste do componente PokeList', () => {
    it('Deve exibir a lista de pokemons quando houver pokemons', () => {
        const { getAllByTestId } = render(<PokeList pokemons={pokemons} />)
        const pokeList = getAllByTestId('poke-card')
        expect(pokeList.length).toBe(3)
    })

    it('Deve exibir a lista vazia quando não houver pokemons', () => {
        const { getByTestId  } = render(<PokeList pokemons={[]} />)
        const pokeList = getByTestId ('poke-list')
        expect(pokeList.props.data.length).toBe(0)
    })

    it('Deve exibir a lista vazia quando a lista de pokemons for nula', () => {
        const { getByTestId  } = render(<PokeList pokemons={[]} />)
        const pokeList = getByTestId ('poke-list')
        expect(pokeList.props.data.length).toBe(0)
    })

    it('Deve retornar o pokemon selecionado quando o usuário clicar em um pokemon', () => {
        let selectedPokemon = null

        const pokeList = render(<PokeList pokemons={pokemons} onPress={(pokemon) => (selectedPokemon = pokemon)} />)
        const touchableOpacity = pokeList.root.findAllByType(TouchableOpacity)[1]
        touchableOpacity.props.onPress()

        expect(selectedPokemon).toEqual(pokemons[1])
    })
})