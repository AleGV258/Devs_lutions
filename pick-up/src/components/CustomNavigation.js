import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomePage'
import MapPage from './MapPage'
import ProfilePage from './ProfilePage'

const Stack = createStackNavigator()

const HomeScreenNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#fff', headerTitleAlign: "center", headerTitleStyle: {fontSize: 26}}}
            />
            <Stack.Screen 
                name="EmergencyScreen"
                component={MapPage}
                options={({ route }) => ({ title: ("     " + route.params.nombre), headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#fff', headerTitleAlign: "center", headerTitleStyle: {fontSize: 18}})}
            />
        </Stack.Navigator>
    )
}

export { HomeScreenNavigation }


