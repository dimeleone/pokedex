import React from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import PokeCard from './PokeCard'

const PokeList = ({ pokemons, onPress }) => {
    return (
        <View style={styles.container}>
            <FlatList
                testID='poke-list'
                data={pokemons}
                renderItem={({ item }) => <PokeCard pokemon={item} onPress={() => onPress(item)} />}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    }
})

export default PokeList
