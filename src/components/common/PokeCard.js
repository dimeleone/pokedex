import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import helper from '../../utils/helper'
import pokemonService from '../../services/pokemonService'
import colorConstants from '../../constants/colorConstants'

const PokeCard = ({ pokemon, onPress }) => {
    if (!pokemon) {
        return <View />
    }

    const pokemonColor = colorConstants.pokemonTypes[pokemon.types[0].type.name] || colorConstants.pokemonTypes['default']

    return (
        <TouchableOpacity
            testID='poke-card'
            style={{ ...styles.container, borderColor: pokemonColor }}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image testID='poke-image' style={styles.image} source={{ uri: pokemonService.getImage(pokemon.id) }} />
            <Text testID='poke-name' style={{ ...styles.name, backgroundColor: pokemonColor }}>
                {helper.makeFirstLetterUpperCase(pokemon.name)}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorConstants.white,
        elevation: 8,
        borderWidth: 1
    },
    image: {
        width: 150,
        height: 150
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        width: '100%',
        padding: 8,
        textAlign: 'center',
        color: colorConstants.white
    }
})

export default PokeCard