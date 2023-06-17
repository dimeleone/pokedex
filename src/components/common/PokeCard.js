import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import helper from '../../utils/helper'
import colorConstants from '../../constants/colorConstants'

const PokeCard = ({ pokemon }) => {
    const pokemonColor = colorConstants.pokemonTypes[pokemon.types[0].type.name]

    return (
        <View style={{...styles.container, borderColor: pokemonColor }}>
            <Image style={styles.image} source={{ uri: pokemon.image }} />
            <Text style={{ ...styles.name, backgroundColor: pokemonColor }}>
                {helper.makeFirstLetterUpperCase(pokemon.name)}
            </Text>
        </View>
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