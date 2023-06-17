import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import PokeDetail from '../common/PokeDetail'
import pokemonService from '../../services/pokemonService'
import colorConstants from '../../constants/colorConstants'
import helper from '../../utils/helper'
import DEFAULT_POKEMON from '../../assets/json/empty-pokemon.json'

const DetailScreen = ({ route, navigation }) => {
    const [pokemon, setPokemon] = useState(DEFAULT_POKEMON)
    const [pokemonDescription, setPokemonDescription] = useState('')

    useEffect(() => {
        const pokemonId = route.params.pokemon.id

        pokemonService.getById(pokemonId)
            .then((data) => {
                setPokemon(data)
            })
            .catch((error) => {
                console.log(error)
            })

        pokemonService.getPokemonFireredDescription(pokemonId)
            .then(pokeDescription => {
                setPokemonDescription(pokeDescription)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        navigation.setOptions({
            title: helper.makeFirstLetterUpperCase(pokemon.name),
            headerStyle: {
                backgroundColor: colorConstants.pokemonTypes[pokemon.types[0].type.name]
            },
            headerTitleStyle: {
                color: colorConstants.white
            },
            headerTintColor: colorConstants.white
        })
    }, [pokemon])

    return (
        <View testID='detail-screen' style={{ ...styles.container, backgroundColor: colorConstants.pokemonTypes[pokemon.types[0].type.name] }}>
            <PokeDetail pokemon={{ ...pokemon, description: pokemonDescription }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        alignItems: 'center'
    }
})

export default DetailScreen