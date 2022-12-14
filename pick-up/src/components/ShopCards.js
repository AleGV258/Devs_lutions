import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const ShopCards = ({product}) => {
  return (
    <View style={GlobalStyles.box}>
      <View style={GlobalStyles.boxText}>
        <Text style={GlobalStyles.textTittle}>{product.name}</Text>
        <Text>{product.description}</Text>
      </View>
      <View style={GlobalStyles.boxPrice}>
        <Text>${product.price}</Text>
      </View>
    </View>
  );
}

export default ShopCards;