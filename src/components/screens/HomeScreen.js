import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import PokeList from '../common/PokeList'
import pokemonService from '../../services/pokemonService'

const HomeScreen = ({ navigation }) => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        pokemonService.getAll()
            .then((data) => {
                setPokemons(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    function handlePress(pokemon) {
        navigation.navigate('Detail', { pokemon })
    }

    return (
        <View style={styles.container}>
            <PokeList pokemons={pokemons} onPress={handlePress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default HomeScreen