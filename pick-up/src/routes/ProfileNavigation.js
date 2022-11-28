import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProfilePage from '../views/ProfilePage';
import UserPage from '../views/UserPage';
import PayMethodPage from '../views/PayMethodPage';
import ShoppingCartPage from '../views/ShoppingCartPage';
import OrderHistoryPage from '../views/OrderHistoryPage';
import NotificationPage from '../views/NotificationPage';

const Stack = createStackNavigator();

var usuario = 'Usuario';

const ProfileNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ProfilePage">
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            headerStyle: { backgroundColor: '#5E3B3B', height: 80 },
            headerTintColor: '#fff',
            headerTitle: 'Hola ' + usuario,
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="UserPage"
          component={UserPage}
          options={{
            headerStyle: { backgroundColor: '#5E3B3B', height: 80 },
            headerTintColor: '#fff',
            headerTitle: usuario,
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="PayMethodPage"
          component={PayMethodPage}
          options={{
            headerStyle: { backgroundColor: '#5E3B3B', height: 80 },
            headerTintColor: '#fff',
            headerTitle: 'Método de Pago',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="ShoppingCartPage"
          component={ShoppingCartPage}
          options={{
            headerStyle: { backgroundColor: '#5E3B3B', height: 80 },
            headerTintColor: '#fff',
            headerTitle: 'Carrito',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="NotificationPage"
          component={NotificationPage}
          options={{
            headerStyle: { backgroundColor: '#5E3B3B', height: 80 },
            headerTintColor: '#fff',
            headerTitle: 'Notificaciones',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <Stack.Screen
          name="OrderHistoryPage"
          component={OrderHistoryPage}
          options={{
            headerStyle: { backgroundColor: '#5E3B3B', height: 80 },
            headerTintColor: '#fff',
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
