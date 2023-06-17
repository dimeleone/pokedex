import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import PokeCard from './PokeCard'

const PokeList = ({ pokemons }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={pokemons}
                renderItem={({ item }) => <PokeCard pokemon={item} />}
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
