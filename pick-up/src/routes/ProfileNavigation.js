import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

import ProfilePage from '../views/ProfilePage';
import UserPage from '../views/UserPage';
import PayMethodPage from '../views/PayMethodPage';
import ShoppingCartPage from '../views/ShoppingCartPage';
import OrderHistoryPage from '../views/OrderHistoryPage';
import NotificationPage from '../views/NotificationPage';

const Stack = createStackNavigator();

var usuario = 'Usuario';

const ProfileNavigation = ({scheme}) => {
  const { colors } = useTheme();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ProfilePage">
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerTitle: 'Hola ' + usuario,
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="UserPage"
          component={UserPage}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerTitle: usuario,
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="PayMethodPage"
          component={PayMethodPage}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerTitle: 'Método de Pago',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="ShoppingCartPage"
          component={ShoppingCartPage}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerTitle: 'Carrito',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="NotificationPage"
          component={NotificationPage}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerTitle: 'Notificaciones',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="OrderHistoryPage"
          component={OrderHistoryPage}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerTitle: 'Historial de Ordenes',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileNavigation;
