import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function NotificationPage({ navigation }) {
  return (
    <ScrollView style={styles.scroller}>
      <Text>Notification</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
