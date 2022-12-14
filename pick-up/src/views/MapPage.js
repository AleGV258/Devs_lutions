import * as React from 'react';
import { Text, ScrollView} from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapPage() {
  return (
    <ScrollView style={GlobalStyles.scroller}>
      <Text>Mapa</Text>
    </ScrollView>
  );
}