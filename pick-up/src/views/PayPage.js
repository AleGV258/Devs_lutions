import * as React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Linking, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import GlobalStyles from '../routes/GlobalStyles';

export default function PayPage({ route, navigation }) {
  try {
    const idArticulo = route.params.articuloPagar
    const tipoData = route.params.tipoData
    var total = 0;
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

    const carrito = dataPedido.filter( datos => {
      return( idArticulo.some( element => {
        if(datos.ID_Pedido == element){
          return true
        }else{
          return false
        }
      }))
    })

    const articulosData = dataArticulo.filter( articulo => {
      return true
    })

    const newArticleData = carrito.map( pedido => {
        total = total + pedido.Total
        return(
            <View style={GlobalStyles.viewPagarResumen} key={pedido.ID_Pedido}>
                <Text style={GlobalStyles.textoResumenNombre}>{articulosData[(pedido.Id_articulo)-1].Nombre}</Text>
                <Text style={GlobalStyles.textoResumenPrecio}>$ {pedido.Total}</Text>
            </View>
        )
    })

    return (
      <ScrollView style={GlobalStyles.scroller}>
        <Text style={[GlobalStyles.tituloPagar, {marginTop: 25}]}>Resumen de la Compra</Text>
        <Text style={GlobalStyles.tituloPagar}>Artículos:</Text>
        <View style={GlobalStyles.linea}></View>
        {newArticleData}
        <View style={GlobalStyles.linea}></View>
        <View style={GlobalStyles.viewPagarResumen}>
            <Text style={GlobalStyles.textoResumenNombre}>Total:</Text>
            <Text style={GlobalStyles.textoResumenPrecio}>$ {total}</Text>
        </View>
        <View style={GlobalStyles.viewPagarResumen}>
            <Text style={GlobalStyles.textoResumenNombre}>Comisión:</Text>
            <Text style={GlobalStyles.textoResumenPrecio}>$ {(total/10)}</Text>
        </View>
        <View style={GlobalStyles.linea}></View>
        <View style={GlobalStyles.viewPagarResumen}>
            <Text style={GlobalStyles.textoResumenNombre}>Total con Comisión:</Text>
            <Text style={GlobalStyles.textoResumenPrecio}>$ {total+(total/10)}</Text>
        </View>
        <Pressable
            style={[GlobalStyles.option, {backgroundColor: '#2980b9', borderRadius: 15, marginHorizontal: 40, marginTop: 30}]}
            android_ripple={{ color: '#bdc3c7' }}
            // value={login.usuarioLogin}
            onPress={() => Linking.openURL('http://PayPal.Me/AleGV258')}>
            <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Pagar con PayPal</Text>
        </Pressable>
        <Pressable
            style={[GlobalStyles.option, {backgroundColor: '#27ae60', borderRadius: 15, marginHorizontal: 40, marginTop: 30}]}
            android_ripple={{ color: '#bdc3c7' }}
            // value={login.usuarioLogin}
            onPress={() => navigation.navigate('DepositPage', {tipoPago: "E", total: {total}, articulos: {idArticulo}, tipoData: {tipoData}})}>
            <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Pagar en Efectivo</Text>
        </Pressable>
        <Pressable
            style={[GlobalStyles.option, {backgroundColor: '#c0392b', borderRadius: 15, marginHorizontal: 40, marginTop: 30, marginBottom: 30,}]}
            android_ripple={{ color: '#bdc3c7' }}
            // value={login.usuarioLogin}
            onPress={() => navigation.navigate('DepositPage', {tipoPago: "D", total: {total}, articulos: {idArticulo}, tipoData: {tipoData}})}>
            <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Pagar con Depósito</Text>
        </Pressable>
      </ScrollView> 
    );

  }catch(error) {
    console.log(error);
  }
}