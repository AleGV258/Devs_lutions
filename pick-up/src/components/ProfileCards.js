import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Pressable, useColorScheme } from 'react-native';
import { Icon } from 'react-native-elements';
import GlobalStyles from '../routes/GlobalStyles';

function ProfileCards({navigation}) {
  // const navigation = useNavigation(); 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [scheme, setScheme] = useState(useColorScheme());
  return (
    <View>
      <Pressable
        style={GlobalStyles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('UserPage')}>
        <Icon name="person" type="ionicon" color="#5E3B3B" />
        <Text style={GlobalStyles.texto}>Datos Generales</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={GlobalStyles.iconoFinal}
        />
      </Pressable>
      {/* <Pressable
        style={GlobalStyles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('PayMethodPage')}>
        <Icon name="card" type="ionicon" color="#5E3B3B" />
        <Text style={GlobalStyles.texto}>Métodos de Pago</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={GlobalStyles.iconoFinal}
        />
      </Pressable> */}
      <Pressable
        style={GlobalStyles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('ShoppingCartPage')}>
        <Icon name="cart" type="ionicon" color="#5E3B3B" />
        <Text style={GlobalStyles.texto}>Carrito</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={GlobalStyles.iconoFinal}
        />
      </Pressable>
      <Pressable
        style={GlobalStyles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('NotificationPage')}>
        <Icon name="notifications" type="ionicon" color="#5E3B3B" />
        <Text style={GlobalStyles.texto}>Notificaciones</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={GlobalStyles.iconoFinal}
        />
      </Pressable>
      <Pressable
        style={GlobalStyles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('OrderHistoryPage')}>
        <Icon name="ice-cream" type="ionicon" color="#5E3B3B" />
        <Text style={GlobalStyles.texto}>Historial de Pedidos</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={GlobalStyles.iconoFinal}
        />
      </Pressable> 
      <Pressable
        style={[GlobalStyles.option, {backgroundColor: '#5E3B3B', borderRadius: 15, marginHorizontal: 40, marginTop: 50}]}
        android_ripple={{ color: '#bdc3c7' }}

        onPress={() => navigation.navigate('LoginNavigation')}>
        <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
}

export default ProfileCards;
