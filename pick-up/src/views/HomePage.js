import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Buscador from '../components/Buscador';
import FoodCards from '../components/FoodCards';
import GlobalStyles from '../routes/GlobalStyles';

export default function HomeScreen({ navigation }) {
  const food1 = {
    name: 'Café con Leche',
    place: 'Cafetería 1',
    description: 'Café con un toque de leche',
    imageUrl: 'https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/cafe-con-leche.jpg',
  };
  const food2 = {
    name: 'Cafe Negro',
    place: 'Cafetería 2',
    description: 'Un café cargado de grano entero',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-coffee-in-cup-royalty-free-image-1568292874.jpg',
  };

  return (
    <ScrollView style={GlobalStyles.scroller}>
      <Buscador></Buscador>
      <View style={GlobalStyles.food}>
        <FoodCards food={food1}></FoodCards>
        <FoodCards food={food2}></FoodCards>
      </View>
    </ScrollView>
  );
}