import * as React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Pressable } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const usuario = require('../routes/user.json');

export default function DepositPage({ route, navigation }) {
  try {
    const tipoPago = route.params.tipoPago
    const total = route.params.total
    const filtro = usuario.filter( pago => {
        return true
    })

    const newArticleData = filtro.map( pago => {
        if(tipoPago == 'E'){
            return(
                <View key={1}>
                    <Text style={[GlobalStyles.tituloPagar, {marginTop: 25}]}>Pagar con Efectivo</Text>
                    <Text style={GlobalStyles.textoPagarNormal}>Monto Total a Pagar: $ {total.total}</Text>
                    <Text style={GlobalStyles.textoPagarNormal}></Text>
                    <Text style={GlobalStyles.textoPagarNormal}>Se notificará al establecimiento de tú pago con efectivo</Text>
                    <Pressable
                        style={[GlobalStyles.option, {backgroundColor: '#5E3B3B', borderRadius: 15, marginHorizontal: 40, marginTop: 30, marginBottom: 30,}]}
                        android_ripple={{ color: '#bdc3c7' }}
                        onPress={() => navigation.navigate('NotificationPage')}>
                        <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Confirmar Pago con Efectivo</Text>
                    </Pressable>
                </View>
            )
        }else if(tipoPago == 'D'){
            return(
                <View key={1}>
                    <Text style={[GlobalStyles.tituloPagar, {marginTop: 25}]}>Pagar con Depósito</Text>
                    <Text style={GlobalStyles.textoPagarNormal}>Monto Total a Pagar: $ {total.total}</Text>
                    <Text style={GlobalStyles.textoPagarNormal}></Text>
                    <Text style={GlobalStyles.tituloPagar}>Concepto: "Pago Cafetería"</Text>
                    <Text style={GlobalStyles.tituloPagar}>Numero de Cuenta:{'\n'}"4915 6630 7930 4045"</Text>
                    <Text style={GlobalStyles.textoPagarNormal}></Text>
                    <Text style={GlobalStyles.textoPagarNormal}>Se notificará al establecimiento de tú depósito</Text>
                    <Pressable
                        style={[GlobalStyles.option, {backgroundColor: '#5E3B3B', borderRadius: 15, marginHorizontal: 40, marginTop: 30, marginBottom: 30,}]}
                        android_ripple={{ color: '#bdc3c7' }}
                        // value={login.usuarioLogin}
                        onPress={() => navigation.navigate('NotificationPage')}>
                        <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Confirmar Pago con Depósito</Text>
                    </Pressable>
                </View>
            )
        }
    })

    return (
      <ScrollView style={GlobalStyles.scroller}>
        {newArticleData}
      </ScrollView> 
    );

  }catch(error) {
    console.log(error);
  }
}