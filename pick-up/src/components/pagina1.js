import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function Pagina1({ navigation }) {
    return (
        <ScrollView style={styles.scroller} >
          <Text>Pagina 1</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  }
});
