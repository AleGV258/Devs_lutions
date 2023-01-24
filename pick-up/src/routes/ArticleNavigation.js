import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

import DetailsFood from '../views/DetailsFood'
import HomePage from '../views/HomePage';
import ShoppingCartPage from '../views/ShoppingCartPage';
import NotificationPage from '../views/NotificationPage';
import PayPage from '../views/PayPage';
import DepositPage from '../views/DepositPage';

const StackArticle = createStackNavigator()

const ArticleNavigation = ({scheme}) => {
    const { colors } = useTheme();
    return(
        <NavigationContainer independent={true}>
            <StackArticle.Navigator initialRouteName="Menú">
                <StackArticle.Screen 
                    name="Menú"
                    component={HomePage}
                    options={{
                        headerStyle: { backgroundColor: colors.card, height: 70 },
                        headerTintColor: colors.text,
                        headerShown: false,
                        headerTitle: 'Página Principal',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontSize: 26 },
                    }}
                />
                <StackArticle.Screen
                    name="Artículo"
                    component={DetailsFood}
                    options={({ route }) => ({
                        headerStyle: { backgroundColor: colors.card, height: 70 },
                        headerTintColor: colors.text,
                        headerShown: false,
                        headerTitle: 'Artículo',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontSize: 26 },
                    })}
                />
                <StackArticle.Screen
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
                <StackArticle.Screen
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
                <StackArticle.Screen
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
                <StackArticle.Screen
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
            </StackArticle.Navigator>
        </NavigationContainer>
    )
}

export default ArticleNavigation;