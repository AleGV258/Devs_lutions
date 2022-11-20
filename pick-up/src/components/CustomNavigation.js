import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomePage'
import Pagina1 from './pagina1'
import Pagina2 from './pagina2'

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
                component={Pagina1}
                options={({ route }) => ({ title: ("     " + route.params.nombre), headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#fff', headerTitleAlign: "center", headerTitleStyle: {fontSize: 18}})}
            />
        </Stack.Navigator>
    )
}

export { HomeScreenNavigation }
