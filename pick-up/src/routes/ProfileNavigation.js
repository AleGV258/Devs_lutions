import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

import ProfilePage from '../views/ProfilePage';
import UserPage from '../views/UserPage';
import ModifyUserPage from '../views/ModifyUserPage';
import ShoppingCartPage from '../views/ShoppingCartPage';
import OrderHistoryPage from '../views/OrderHistoryPage';
import NotificationPage from '../views/NotificationPage';
import LoginNavigation from '../routes/LoginNavigation';
import PayPage from '../views/PayPage';
import DepositPage from '../views/DepositPage';

const StackProfile = createStackNavigator();

const usuario = require('../routes/user.json');

const ProfileNavigation = ({scheme}) => {
  const { colors } = useTheme();
  return (
    <NavigationContainer independent={true}>
      <StackProfile.Navigator initialRouteName="ProfilePage">
        <StackProfile.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerTitle: 'Hola ' + usuario[0].Nombre,
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <StackProfile.Screen
          name="UserPage"
          component={UserPage}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerTitle: "Perfil",
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
          }}
        />
        <StackProfile.Screen
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
        <StackProfile.Screen
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
        <StackProfile.Screen
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
        <StackProfile.Screen
          name="LoginNavigation"
          component={LoginNavigation}
          options={{
            headerStyle: { backgroundColor: colors.card, height: 70 },
            headerTintColor: colors.text,
            headerTitle: 'Login',
            headerShown: false,
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 26 },
            
          }}
        />
        <StackProfile.Screen
          name="PayPage"
          component={PayPage}
          options={{
              headerStyle: { backgroundColor: colors.card, height: 70 },
              headerTintColor: colors.text,
              headerTitle: 'Pagar',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 26 },
          }}
        />
        <StackProfile.Screen
          name="DepositPage"
          component={DepositPage}
          options={{
              headerStyle: { backgroundColor: colors.card, height: 70 },
              headerTintColor: colors.text,
              headerTitle: 'Pagar',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 26 },
          }}
        />
        <StackProfile.Screen
          name="ModifyUserPage"
          component={ModifyUserPage}
          options={{
              headerStyle: { backgroundColor: colors.card, height: 70 },
              headerTintColor: colors.text,
              headerTitle: 'Modificar Usuario',
              headerTitleAlign: 'center',
              headerTitleStyle: { fontSize: 26 },
          }}
        />
      </StackProfile.Navigator>
    </NavigationContainer>
  );
};

export default ProfileNavigation;
