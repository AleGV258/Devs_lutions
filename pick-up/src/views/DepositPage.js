import * as React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Pressable, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import GlobalStyles from '../routes/GlobalStyles';

const usuario = require('../routes/user.json');

export default function DepositPage({ route, navigation }) {
  try {
    var contador = 0;
    const tipoPago = route.params.tipoPago
    const total = route.params.total
    const articulos = route.params.articulos
    const tipoData = route.params.tipoData
    const [dataPedido, setDataPedido] = useState([]);
    const [dataArticulo, setDataArticulo] = useState([]);
    const fetchDataPedido = async () => {
        const resp = await fetch("https://devs-lutions-api.azurewebsites.net/pedidos");
        const dataPedido = await resp.json();
        setDataPedido(dataPedido);
    };
    useEffect(() => {
        fetchDataPedido()
    }, [])
    const fetchDataArticulo = async () => {
      const resp = await fetch("https://devs-lutions-api.azurewebsites.net/articulos");
      const dataArticulo = await resp.json();
      setDataArticulo(dataArticulo);
    };
    useEffect(() => {
        fetchDataArticulo()
    }, [])

    const filtro = usuario.filter( pago => {
        return true
    })

    const insertOrUpdateData = () => {
      articulos.idArticulo.forEach( element => {
        if(tipoData.tipoData == "U"){
          dataPedido.forEach( pedido => {
            if(pedido.ID_Pedido == element){
              var url = "https://devs-lutions-api.azurewebsites.net/pedidos/update/"+usuario[0].Id_Usuario+"/"+pedido.Id_articulo+"/"+pedido.Total+"/00:20:00/Cocinándose/1/"+element
              fetch(url);
              console.log(url)
            }
          })
        }else if(tipoData.tipoData == "I"){
          dataArticulo.forEach( articulo => {
            if(articulo.ID_Articulo == element && contador == 0){
              var url = "https://devs-lutions-api.azurewebsites.net/pedidos/insert/"+usuario[0].Id_Usuario+"/"+articulo.ID_Articulo+"/"+articulo.Precio+"/00:20:00/Cocinándose/1"
              fetch(url);
              console.log(url)
              contador++;
            }
          })
        }
      });
      Alert.alert('Pedido Actualizado', 'Su pedido ha sido registrado',
        [
          {text: '¡Genial!'},
        ],
      );
    };

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
                        onPress={() => {insertOrUpdateData(); navigation.navigate('NotificationPage')}}>
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
                        onPress={() => {insertOrUpdateData(); navigation.navigate('NotificationPage')}}>
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