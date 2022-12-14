import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const OrderHistory = ({ item }) => {
  const { id, nombre, estatus, total } = item;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {id} ({nombre})
      </Text>
      <Text>
        {'\n'}
        {estatus} ${total} {'\n'}
        _______________________________________
      </Text>
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 30,
  },
  titulo: {
    fontSize: 20,
  },
});
