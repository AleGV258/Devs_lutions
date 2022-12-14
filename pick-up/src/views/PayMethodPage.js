import * as React from 'react';
import { ScrollView} from 'react-native';
import PayMethodCards from '../components/PayMethodCards';
import GlobalStyles from '../routes/GlobalStyles';

export default function PayMethodPage({ navigation }) {
  return (
    <ScrollView style={GlobalStyles.scroller}>
      <PayMethodCards></PayMethodCards>
    </ScrollView>
  );
}