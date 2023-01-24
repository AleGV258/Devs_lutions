import * as React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../routes/GlobalStyles';

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
      if(datos.Id_Articulo == idArticulo){
        return true
      }else{
        return false
      }
    })

    const newArticleData = articleData.map( articulo => {
      return(
        <View style={GlobalStyles.container} key={articulo.Id_Articulo}>
          <Image source={{ uri: articulo.Imagen }} style={GlobalStyles.img} />
          <Text style={[GlobalStyles.textTittle, GlobalStyles.boldColor]}>{articulo.Nombre}</Text>
          <Text style={GlobalStyles.precio}>${articulo.Precio} {'\n'}</Text>
          
          <Text style={GlobalStyles.detalles}>{articulo.Detalles} {'\n'}</Text>
          <View style={GlobalStyles.viewPagar}>
            <Pressable style={GlobalStyles.botonPagar} android_ripple={{ color: '#bdc3c7' }} onPress={() => navigation.navigate('PayPage', {articuloPagar: [articulo.Id_Articulo]})}>
              <Text style={GlobalStyles.textoBotonPagar}>Pagar</Text>
            </Pressable>
            <Pressable style={GlobalStyles.iconoPagar} android_ripple={{ color: '#bdc3c7' }} onPress={() => navigation.navigate('ShoppingCartPage')}>
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