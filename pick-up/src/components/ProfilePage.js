import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function Pagina2({ navigation }) {
    return (
        <ScrollView style={styles.scroller} >
          <Text>Perfil</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  }
});
