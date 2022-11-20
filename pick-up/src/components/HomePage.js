import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
//import EmergencyCard from './EmergencyCard';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.scroller} >
          {/* <EmergencyCard></EmergencyCard> */}
          <Text>Home</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  }
});
