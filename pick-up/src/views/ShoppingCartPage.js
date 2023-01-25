import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, ScrollView, View, Image, Pressable, Alert } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const usuario = require('../routes/user.json');

export default function ShoppingCartPage({ navigation }) {
  try {
    const [dataPedidos, setDataPedidos] = useState([]);
    const [dataArticulos, setDataArticulos] = useState([]);
    var articulos = []
    const fetchDataArticulos = async () => {
      const respArticulos = await fetch("https://devs-lutions-api.azurewebsites.net/articulos");
      const dataArticulos = await respArticulos.json();
      setDataArticulos(dataArticulos);
    };
    useEffect(() => {
      fetchDataArticulos()
    }, [])
    const fetchDataPedidos = async () => {
      const respPedidos = await fetch("https://devs-lutions-api.azurewebsites.net/pedidos");
      const dataPedidos = await respPedidos.json();
      setDataPedidos(dataPedidos);
    };
    useEffect(() => {
      fetchDataPedidos()
    }, [])

    const pedidosData = dataPedidos.filter( pedido => {
      if((pedido.Status == 'Aceptado') && (pedido.Id_usuario == usuario[0].Id_Usuario)){
        return true
      }
    })
    const articulosData = dataArticulos.filter( articulo => {
      return true
    })

    const deleteData = async (posicion) => {
      var url = "https://devs-lutions-api.azurewebsites.net/pedidos/delete/"+pedidosData[posicion].ID_Pedido
      await fetch(url);

      Alert.alert('Eliminado del Carrito', 'El artículo ha sido sido eliminado del carrito',
        [
          {text: '¡Genial!', onPress: () => console.log('Si')},
        ],
      );
    };

    const newData = pedidosData.map( (pedido, index) => {
      articulos.push(pedido.ID_Pedido)
      return (
        <Pressable style={GlobalStyles.food} key={pedido.ID_Pedido} onPress={() => deleteData(index)} android_ripple={{ color: '#bdc3c7' }}>
          <View style={GlobalStyles.foodCard} key={pedido.Id_articulo}>
            <Image
              source={{uri: articulosData[(pedido.Id_articulo)-1].Imagen}}
              style={GlobalStyles.foodImage}
            />
            <Text style={GlobalStyles.nombreFood}>{articulosData[(pedido.Id_articulo)-1].Nombre}</Text>
            <Text style={GlobalStyles.txtFood}><Text style={GlobalStyles.descPrecFood}>Detalles:  </Text><Text>{articulosData[(pedido.Id_articulo)-1].Detalles}</Text></Text>
            <Text style={[GlobalStyles.txtFood, {marginBottom: 10,}]}><Text style={GlobalStyles.descPrecFood}>Precio:  </Text><Text>${articulosData[(pedido.Id_articulo)-1].Precio}</Text></Text>
          </View>
        </Pressable>
      )
    })

    return (
      <ScrollView style={GlobalStyles.scroller}>
        <View>
          <Text style={GlobalStyles.titleArticulo}>Artículos:</Text>
          { newData }
          <Pressable
            style={[GlobalStyles.option, {backgroundColor: '#5E3B3B', borderRadius: 15, marginHorizontal: 40, marginTop: 30, marginBottom: 30,}]}
            android_ripple={{ color: '#bdc3c7' }}
            onPress={() => navigation.navigate('PayPage', {articuloPagar: articulos, tipoData: "U"})}>
            <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Pagar Todo</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }catch(error) {
    console.log(error);
  }
}

