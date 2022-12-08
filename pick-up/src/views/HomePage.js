import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Buscador from '../components/Buscador';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.scroller}>
      <Buscador></Buscador>
      <Text>Aqui van las card dinamicas de los alimentos ↓</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  },
});
