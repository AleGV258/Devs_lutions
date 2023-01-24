import * as React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Linking, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import GlobalStyles from '../routes/GlobalStyles';

export default function PayPage({ route, navigation }) {
  try {
    const idArticulo = route.params.articuloPagar
    var total = 0;
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const resp = await fetch("https://devs-lutions-api.azurewebsites.net/articulos");
        const data = await resp.json();
        setData(data);
    };
    useEffect(() => {
        fetchData()
    }, [])

    const carrito = data.filter( datos => {
      return( idArticulo.some( element => {
        if(datos.Id_Articulo == element){
          return true
        }else{
          return false
        }
      }))
    })

    const newArticleData = carrito.map( articulo => {
        total = total + articulo.Precio
        return(
            <View style={GlobalStyles.viewPagarResumen} key={articulo.Id_Articulo}>
                <Text style={GlobalStyles.textoResumenNombre}>{articulo.Nombre}</Text>
                <Text style={GlobalStyles.textoResumenPrecio}>$ {articulo.Precio}</Text>
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
            onPress={() => navigation.navigate('DepositPage', {tipoPago: "E", total: {total}})}>
            <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Pagar con Efectivo</Text>
        </Pressable>
        <Pressable
            style={[GlobalStyles.option, {backgroundColor: '#c0392b', borderRadius: 15, marginHorizontal: 40, marginTop: 30, marginBottom: 30,}]}
            android_ripple={{ color: '#bdc3c7' }}
            // value={login.usuarioLogin}
            onPress={() => navigation.navigate('DepositPage', {tipoPago: "D", total: {total}})}>
            <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Pagar con Depósito</Text>
        </Pressable>
      </ScrollView> 
    );

  }catch(error) {
    console.log(error);
  }
}