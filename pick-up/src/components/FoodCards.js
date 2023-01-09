import React from 'react';
import {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const FoodCards = ( textoBuscado ) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("https://devs-lutions-api.azurewebsites.net/articulos");
    const data = await resp.json();
    setData(data);
  };

  useEffect(() => {
    fetchData()
  },[])

  const busquedaData = data.filter( busqueda => {
    if((busqueda.Nombre).toUpperCase().includes(textoBuscado.textoBuscar.busqueda.toUpperCase())){
      return true
    }else{
      return false
    }
  })

  const newData = busquedaData.map( datos => {
    return (
      <View style={GlobalStyles.foodCard} key={datos.Id_Articulo}>
        <Image
          source={{uri: datos.Imagen}}
          style={GlobalStyles.foodImage}
        />
        <Text style={GlobalStyles.nombreFood}>{datos.Nombre}</Text>
        <Text style={GlobalStyles.txtFood}><Text style={GlobalStyles.descPrecFood}>Detalles:  </Text><Text>{datos.Detalles}</Text></Text>
        <Text style={[GlobalStyles.txtFood, {marginBottom: 10,}]}><Text style={GlobalStyles.descPrecFood}>Precio:  </Text><Text>${datos.Precio}</Text></Text>
      </View>
    )
  })

  return (
    <View style={GlobalStyles.food}>
      {newData}
    </View>
  );
}

export default FoodCards;
