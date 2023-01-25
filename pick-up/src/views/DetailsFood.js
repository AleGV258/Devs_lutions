import * as React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../routes/GlobalStyles';

const usuario = require('../routes/user.json');

export default function DetailsFood({ route }) {
  try {
    const navigation = useNavigation(); 
    const idArticulo = route.params.articulo
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const resp = await fetch("https://devs-lutions-api.azurewebsites.net/articulos");
        const data = await resp.json();
        setData(data);
    };
    useEffect(() => {
        fetchData()
    }, [])

    const articleData = data.filter( datos => {
      if(datos.ID_Articulo == idArticulo){
        return true
      }else{
        return false
      }
    })

    const insertData = async () => {
      var url = "https://devs-lutions-api.azurewebsites.net/pedidos/insert/"+usuario[0].Id_Usuario+"/"+articleData[0].ID_Articulo+"/"+articleData[0].Precio+"/00:30:00/Aceptado/1"
      await fetch(url);

      Alert.alert('Agregado al Carrito', 'El artículo ha sido agregado al carrito',
        [
          {text: '¡Genial!'},
        ],
      );
    };

    const newArticleData = articleData.map( articulo => {
      return(
        <View style={GlobalStyles.container} key={idArticulo}>
          <Image source={{ uri: articulo.Imagen }} style={GlobalStyles.img} />
          <Text style={[GlobalStyles.textTittle, GlobalStyles.boldColor]}>{articulo.Nombre}</Text>
          <Text style={GlobalStyles.precio}>${articulo.Precio} {'\n'}</Text>
          
          <Text style={GlobalStyles.detalles}>{articulo.Detalles} {'\n'}</Text>
          <View style={GlobalStyles.viewPagar}>
            <Pressable style={GlobalStyles.botonPagar} android_ripple={{ color: '#bdc3c7' }} onPress={() => navigation.navigate('PayPage', {articuloPagar: [articulo.ID_Articulo], tipoData: "I"})}>
              <Text style={GlobalStyles.textoBotonPagar}>Pagar</Text>
            </Pressable>
            <Pressable style={GlobalStyles.iconoPagar} android_ripple={{ color: '#bdc3c7' }} onPress={() => {insertData(); navigation.navigate('ShoppingCartPage')}}>
              <Icon name="cart" type="ionicon" color="#fff" />
            </Pressable>
          </View>
        </View>
      )
    })

    return (
      <ScrollView style={GlobalStyles.scroller}>
        { newArticleData }
      </ScrollView> 
    );

  }catch(error) {
    console.log(error);
  }
}