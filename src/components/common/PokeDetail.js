import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import pokemonService from '../../services/pokemonService'
import colorConstants from '../../constants/colorConstants'
import helper from '../../utils/helper'

const PokeDetail = ({ pokemon }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: pokemonService.getImage(pokemon.id) }} />
            <ScrollView style={styles.detailContainer}>
                <View style={styles.typesContainer}>
                    {pokemon.types.map((type) => (
                        <Text key={type.type.name} style={{ ...styles.typeLabel, backgroundColor: colorConstants.pokemonTypes[type.type.name] }}>
                            {helper.makeFirstLetterUpperCase(type.type.name)}
                        </Text>
                    ))}
                </View>
                <Text style={styles.description}>{pokemon.description}</Text>
                <View style={styles.statsContainer}>
                    {pokemon.stats.map((pokeStat) => (
                        <View key={pokeStat.stat.name} style={{ marginTop: 8 }}>
                            <Text style={styles.statName}>{helper.mapStatsTitle(pokeStat.stat.name)}</Text>
                            <ProgressBar
                                progress={pokeStat.base_stat / 100}
                                color={colorConstants.pokemonTypes[pokemon.types[0].type.name]}
                                style={styles.progressBar}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250,
        zIndex: 2
    },
    detailContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: colorConstants.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 16,
        marginTop: -100,
        paddingTop: 100,
        zIndex: 1
    },
    typesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8
    },
    typeLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 7,
        paddingHorizontal: 15,
        margin: 4,
        borderRadius: 50,
        color: colorConstants.white
    },
    description: {
        fontSize: 16,
        marginTop: 16,
        textAlign: 'center',
        color: colorConstants.mediumGrey,
    },
    statsContainer: {
        marginTop: 16
    },
    statName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colorConstants.mediumGrey
    },
    progressBar: {
        height: 9,
        borderRadius: 50
    }
})

export default PokeDetail