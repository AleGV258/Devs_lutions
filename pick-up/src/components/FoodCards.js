import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const FoodCards = ({food}) => {
  return (
    <View style={GlobalStyles.foodCard}>
      <Image
        source={{uri: food.imageUrl}}
        style={GlobalStyles.foodImage}
      />
      <Text style={{fontWeight: 'bold'}}>Nombre: </Text>
      <Text>{food.name}</Text>
      <Text style={{fontWeight: 'bold'}}>Categoría: </Text>
      <Text>{food.place}</Text>
      <Text style={{fontWeight: 'bold'}}>Descripción: </Text>
      <Text>{food.description}</Text>
    </View>
  );
}

export default FoodCards;
