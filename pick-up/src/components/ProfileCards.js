import * as React from 'react';
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Pressable, Switch, useColorScheme } from 'react-native';
import { Icon } from 'react-native-elements';

function ProfileCards() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [scheme, setScheme] = useState(useColorScheme());
  return (
    <View style={styles.container}>
      <Switch
        value={isEnabled}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        onChange={() => setScheme(scheme === 'light' ? 'dark' : 'light')}
      />
      <Pressable
        style={styles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('UserPage')}>
        <Icon
          name="person"
          type="ionicon"
          color="#5E3B3B"
          style={styles.icono}
        />
        <Text style={styles.texto}>Datos Generales</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={styles.iconoFinal}
        />
      </Pressable>
      <Pressable
        style={styles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('PayMethodPage')}>
        <Icon name="card" type="ionicon" color="#5E3B3B" style={styles.icono} />
        <Text style={styles.texto}>Métodos de Pago</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={styles.iconoFinal}
        />
      </Pressable>
      <Pressable
        style={styles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('ShoppingCartPage')}>
        <Icon name="cart" type="ionicon" color="#5E3B3B" style={styles.icono} />
        <Text style={styles.texto}>Carrito</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={styles.iconoFinal}
        />
      </Pressable>
      <Pressable
        style={styles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('NotificationPage')}>
        <Icon
          name="notifications"
          type="ionicon"
          color="#5E3B3B"
          style={styles.icono}
        />
        <Text style={styles.texto}>Notificaciones</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={styles.iconoFinal}
        />
      </Pressable>
      <Pressable
        style={styles.option}
        android_ripple={{ color: '#bdc3c7' }}
        onPress={() => navigation.navigate('OrderHistoryPage')}>
        <Icon
          name="ice-cream"
          type="ionicon"
          color="#5E3B3B"
          style={styles.icono}
        />
        <Text style={styles.texto}>Historial de Pedidos</Text>
        <Icon
          name="chevron-right"
          type="feather"
          color="#000"
          style={styles.iconoFinal}
        />
      </Pressable>
    </View>
  );
}

export default ProfileCards;

const styles = StyleSheet.create({
  texto: {
    fontSize: 15,
    width: 200,
    fontWeight: '600',
    paddingLeft: 5,
    textAlign: 'left',
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});
