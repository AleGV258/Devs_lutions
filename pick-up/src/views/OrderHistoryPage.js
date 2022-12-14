import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import OrderHistory from '../components/OrderHistory';
import GlobalStyles from '../routes/GlobalStyles';

export default function OrderHistoryPage({ navigation }) {
  const datos = [
    {
      id: '123F2',
      nombre: 'Luis',
      articulos: 'cafe',
      total: '500',
      estatus: 'finalizado',
      local: '12',
    },
    {
      id: '321F2',
      nombre: 'Michell',
      articulos: 'helado',
      total: '1000',
      estatus: 'finalizado',
      local: '123',
    },
  ];
  return (
    <View style={GlobalStyles.container}>
      <FlatList
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderHistory item={item} />}
      />
    </View>
  );
}

