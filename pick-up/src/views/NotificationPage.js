import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, ScrollView, View, Image, Alert, Pressable } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const usuario = require('../routes/user.json');

export default function NotificationPage({ navigation }) {
  try {
    const [dataPedidos, setDataPedidos] = useState([]);
    const [dataArticulos, setDataArticulos] = useState([]);
    const fetchDataPedidos = async () => {
      const respPedidos = await fetch("https://devs-lutions-api.azurewebsites.net/pedidos");
      const dataPedidos = await respPedidos.json();
      setDataPedidos(dataPedidos);
    };
    useEffect(() => {
      fetchDataPedidos()
    }, [])
    const fetchDataArticulos = async () => {
      const respArticulos = await fetch("https://devs-lutions-api.azurewebsites.net/articulos");
      const dataArticulos = await respArticulos.json();
      setDataArticulos(dataArticulos);
    };
    useEffect(() => {
      fetchDataArticulos()
    }, [])

    const pedidosData = dataPedidos.filter( pedido => {
      if(((pedido.Status == 'Cocinándose') || (pedido.Status == 'Atrasado')) && (pedido.Id_usuario == usuario[0].Id_Usuario)){
        return true
      }else{
        return false
      }
    })
    const articulosData = dataArticulos.filter( articulo => {
      return true
    })

    const deleteData = async (posicion) => {
      var url = "https://devs-lutions-api.azurewebsites.net/pedidos/delete/"+pedidosData[posicion].ID_Pedido
      await fetch(url);

      Alert.alert('Notificación Eliminada', 'La notificación del artículo ha sido eliminada',
        [
          {text: '¡Genial!'},
        ],
      );
    };

    const newData = pedidosData.map( (pedido, index) => {
      return (
        <Pressable style={GlobalStyles.boxNotification} key={pedido.ID_Pedido} onPress={() => deleteData(index)} android_ripple={{ color: '#bdc3c7' }}>
          <View style={GlobalStyles.textBox}>
            <Text style={GlobalStyles.notificationTexto}><Text style={GlobalStyles.bold}>{articulosData[(pedido.Id_articulo)-1].Nombre}</Text></Text>
            <Text style={GlobalStyles.notificationTexto}><Text style={GlobalStyles.bold}>$ </Text>{pedido.Total}</Text>
            <Text style={GlobalStyles.notificationTexto}><Text style={GlobalStyles.bold}>Estatus: </Text>{pedido.Status}</Text>
            <Text style={GlobalStyles.notificationTexto}><Text style={GlobalStyles.bold}>Listo en: </Text>{pedido.Tiempo_Estimado}</Text>
          </View>
          <Image
            source={{uri: articulosData[(pedido.Id_articulo)-1].Imagen}}
            style={GlobalStyles.pedidoPicture}
          />
        </Pressable>
      )
    })

    return (
      <ScrollView style={GlobalStyles.scroller}>
        <View>
          <Text style={GlobalStyles.titleArticulo}>Artículos:</Text>
          { newData }
        </View>
      </ScrollView>
    );
  }catch(error) {
    console.log(error);
  }
}
