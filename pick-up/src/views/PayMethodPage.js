import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function PayMethodPage({ navigation }) {
  return (
    <ScrollView style={styles.scroller}>
      <Text>PayMethod</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
