import * as React from 'react';
import { useState, useEffect } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appearance, useColorScheme } from 'react-native';

// Screens
import ProfileNavigation from '../routes/ProfileNavigation';
//import ProfilePage from '../views/ProfilePage';
import HomePage from '../views/HomePage';
import MapPage from '../views/MapPage';

// Screen names
const homeName = 'Home';
const mapName = 'Mapa';
const profName = 'Perfil';

// DEFAULT LIGHT THEME
const LightTheme = {
  dark: false,
  colors: {
    notification: 'rgb(255, 59, 48)',
    primary: 'rgb(0, 122, 255)',
    aplicacion: 'rgb(94, 59, 59)',
    card: 'rgb(255, 255, 255)',
    background: 'rgb(250, 250, 250)',

    opuesto: '#000',
    borde: 'rgb(216, 216, 216)',
    text: 'rgb(28, 28, 30)',
    primero: '#d1d3d6',
    segundo: '#5f666f',
  },
};
// DEFAULT DARK THEME
const DarkTheme = {
  dark: true,
  colors: {
    notification: 'rgb(255, 59, 48)',
    primary: 'rgb(0, 122, 255)',
    aplicacion: 'rgb(94, 59, 59)',
    card: '#1b2431',
    background: '#323a46',

    opuesto: '#fff',
    borde: '#f7f1e3',
    text: 'rgb(229, 229, 231)',
    primero: '#49505a',
    segundo: '#bbbdc1',
  },
};

const Tab = createBottomTabNavigator();

function Navbar({scheme}) {
  // const tema = scheme;
  // const tema = useColorScheme();
  // useEffect(() => {
  //   console.log(tema);
  // }, [tema])
  const tema = 'light';
  return (
    <NavigationContainer
      independent={true}
      theme={tema === 'light' ? LightTheme : DarkTheme}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarActiveBackgroundColor: scheme === 'dark' ? '#49505a' : '#d1d3d6',
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
            return <Icon name={iconName} type="ionicon" size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name={homeName}
          component={HomePage}
          options={{
            headerStyle: { height: 70, elevation: 3 },
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Tab.Screen
          name={mapName}
          component={MapPage}
          options={{
            headerStyle: { height: 70, elevation: 3 },
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Tab.Screen
          name={profName}
          component={ProfileNavigation}
          options={{
            headerStyle: { height: 70, elevation: 3 },
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
