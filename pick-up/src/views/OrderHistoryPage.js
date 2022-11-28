import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function OrderHistoryPage({ navigation }) {
  return (
    <ScrollView style={styles.scroller}>
      <Text>OrderHistory</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
