import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import pokemonService from '../../services/pokemonService'
import DEFAULT_POKEMON from '../../assets/json/empty-pokemon.json'

const DetailScreen = ({ route }) => {
    const [pokemon, setPokemon] = useState(DEFAULT_POKEMON)

    useEffect(() => {
        pokemonService.getById(route.params.pokemon.id)
            .then((data) => {
                setPokemon(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log(pokemon.id)

    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default DetailScreen