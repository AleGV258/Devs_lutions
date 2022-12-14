import * as React from 'react';
import { Text, ScrollView, View} from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';
import ShopCards from '../components/ShopCards';

export default function ShoppingCartPage({ navigation }) {
  const product = {
    name: 'Latte Helado',
    description: 'Café espesso mezclado con leche y hielos',
    price: '41.00'
  };

  return (
    <ScrollView style={GlobalStyles.scroller}>
      <Text style={GlobalStyles.tittleArticulo}>Articulos</Text>
      <ShopCards product={product}></ShopCards>
      <View style={GlobalStyles.boxCancelar}>
      <Text style={GlobalStyles.cancelarArticulo}>Cancelar</Text>
      </View>
    </ScrollView>
  );
}