import * as React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import ProfileCards from '../components/ProfileCards';

export default function ProfilePage({ navigation }) {
  return (
    <ScrollView style={styles.scroller}>
      <ProfileCards></ProfileCards>
      <Text></Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
