import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import ProfileNavigation from '../routes/ProfileNavigation';
import ProfilePage from '../views/ProfilePage';
import HomePage from '../views/HomePage';
import MapPage from '../views/MapPage';

//Screen names
const homeName = 'Home';
const mapName = 'Mapa';
const profName = 'Perfil';

const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarInactiveBackgroundColor: '#f1f2f6',
          tabBarActiveBackgroundColor: '#bdc3c7',
          tabBarInactiveTintColor: '#000',
          tabBarActiveTintColor: '#5E3B3B',
          tabBarIconStyle: { marginTop: 7 },
          tabBarLabelStyle: {
            fontSize: 13,
            color: '#5E3B3B',
            paddingBottom: 7,
          },
          tabBarStyle: {
            elevation: 100,
            height: 60,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 4,
            borderTopWidth: 0,
          },
          style: { borderColor: '#011f3b' },
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackButtonShown: true,
          headerTitleAllowFontScaling: true,
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            color = '#5E3B3B';

            if (rn === homeName) {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (rn === mapName) {
              iconName = focused ? 'compass' : 'compass-outline';
            } else if (rn === profName) {
              iconName = focused ? 'people' : 'people-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={homeName} component={HomePage} />
        <Tab.Screen
          name={mapName}
          component={MapPage}
          options={{
            title: 'Mapa',
            headerStyle: { backgroundColor: '#5E3B3B', height: 80 },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Tab.Screen
          name={profName}
          component={ProfileNavigation}
          options={{
            title: 'Perfil',
            headerStyle: { backgroundColor: '#5E3B3B', height: 80 },
            headerTintColor: '#fff',
            headerTitle: 'Hola ...',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;
