import * as React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapPage() {
    return (
        <ScrollView style={styles.scroller}>
            <Text>Mapa</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  }
});
