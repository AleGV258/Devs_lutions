import * as React from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import Buscador from '../components/Buscador';
import FoodCards from '../components/FoodCards';
import GlobalStyles from '../routes/GlobalStyles';

export default function HomeScreen({ navigation }) {
  const [textoBuscado, setTextoBuscado] = useState({ busqueda: '' });
  return (
    <ScrollView style={[GlobalStyles.scroller, {marginBottom: 60,}]}>
      <Buscador texto={textoBuscado} setTexto={(newText) => {setTextoBuscado({ ...newText })}}></Buscador>
      <FoodCards textoBuscar={textoBuscado}></FoodCards>
    </ScrollView>
  );
}