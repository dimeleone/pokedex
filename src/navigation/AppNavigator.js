import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from '../components/screens/HomeScreen'
import DetailScreen from '../components/screens/DetailScreen'
import colorConstants from '../constants/colorConstants'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Pokedex',
                        headerTitleStyle: {
                            color: colorConstants.mediumGrey
                        },
                        headerRight: () => <MaterialCommunityIcons name="pokeball" style={styles.homeIcon}
                        />
                    }}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{
                        title: 'Detalhes',
                        headerTitleStyle: {
                            color: colorConstants.mediumGrey
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    homeIcon: {
        fontSize: 30,
        marginRight: 10,
        color: colorConstants.mediumGrey
    }
})

export default AppNavigator