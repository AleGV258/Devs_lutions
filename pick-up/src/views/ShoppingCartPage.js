import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function ShoppingCartPage({ navigation }) {
  return (
    <ScrollView style={styles.scroller}>
      <Text>ShoppingCart</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
