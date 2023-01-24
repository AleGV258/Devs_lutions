import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

import Login from '../views/Login';
import SignIn from '../views/SignIn';
import Navbar from '../components/Navbar';

const StackLogin = createStackNavigator();

const LoginNavigation = ({scheme}) => {
  const { colors } = useTheme();
  return (
    <NavigationContainer independent={true}>
      <StackLogin.Navigator initialRouteName="Login">
        <StackLogin.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerShown: false,
            headerTitle: 'Inicia Sesión',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <StackLogin.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerShown: false,
            headerTitle: 'Registro',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <StackLogin.Screen
          name="Navbar"
          component={Navbar}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerShown: false,
            headerTitle: 'Navbar',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
      </StackLogin.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigation;
