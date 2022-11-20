import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
//import { HomeScreenNavigation } from './CustomNavigation';
import HomePage from './HomePage';
import Pagina1 from './pagina1';
import Pagina2 from './pagina2';

//Screen names
const homeName = "Home";
const pag1Name = "Page1";
const pag2Name = "Page2";

const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName={ homeName }
        screenOptions={({ route }) => ({
          tabBarInactiveBackgroundColor: '#f5f6fa',
          tabBarActiveBackgroundColor: '#bdc3c7',
          tabBarInactiveTintColor: '#000',
          tabBarActiveTintColor: '#5E3B3B',
          tabBarIconStyle: {marginTop: 7},
          tabBarLabelStyle: {fontSize: 13, color: '#5E3B3B', paddingBottom: 7},
          tabBarStyle: {elevation: 100, height: 60, position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, borderTopWidth: 0},
          style: {borderColor: '#011f3b'},
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            color = '#5E3B3B';

            if (rn === homeName) {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (rn === pag1Name) {
              iconName = focused ? 'compass' : 'compass-outline';
            } else if (rn === pag2Name) {
              iconName = focused ? 'people' : 'people-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}>

        <Tab.Screen name={homeName} component={HomePage} />
        <Tab.Screen name={pag1Name} component={Pagina1} options={{title: "Pagina1", headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#5E3B3B', headerTitleAlign: "center", headerTitleStyle: {fontSize: 26}}} />
        <Tab.Screen name={pag2Name} component={Pagina2} options={{title: "Pagina2", headerStyle: { backgroundColor: '#05C46B',}, headerTintColor: '#5E3B3B', headerTitleAlign: "center", headerTitleStyle: {fontSize: 26}}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;
