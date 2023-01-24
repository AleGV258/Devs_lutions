import * as React from 'react';
import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useColorScheme, Appearance } from 'react-native';

// Screens
import ProfileNavigation from '../routes/ProfileNavigation';
import ArticleNavigation from '../routes/ArticleNavigation';
//import ProfilePage from '../views/ProfilePage';
import MapPage from '../views/MapPage';

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

function Navbar({navigation}) {
  // const scheme = useColorScheme();
  const scheme = 'light';
  // const tema = scheme;

  // useEffect(() => {
  //   console.log(tema);
  // }, [tema])
  // const tema = 'light';
  return (
    <NavigationContainer
      independent={true}
      theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Tab.Navigator
        initialRouteName="Menú"
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

            if (rn === "Menú") {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (rn === "Mapa") {
              iconName = focused ? 'compass' : 'compass-outline';
            } else if (rn === "Perfil") {
              iconName = focused ? 'people' : 'people-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} type="ionicon" size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Menú"
          component={ArticleNavigation}
          options={{
            headerStyle: { height: 70, elevation: 3 },
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Tab.Screen
          name="Mapa"
          component={MapPage}
          options={{
            headerStyle: { height: 70, elevation: 3 },
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileNavigation}
          options={{
            headerStyle: { height: 70, elevation: 3 },
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
