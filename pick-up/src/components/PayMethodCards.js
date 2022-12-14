import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Pressable, useColorScheme } from 'react-native';
import { Icon } from 'react-native-elements';
import { RadioGroup } from 'react-native-radio-buttons-group';
import GlobalStyles from '../routes/GlobalStyles';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Efectivo',
    value: 'pay1',
  },
  {
    id: '2',
    label: 'PayPal',
    value: 'pay2',
  },
  {
    id: '3',
    label: 'Transferencia',
    value: 'pay3',
  },
];

function PayMethodCards() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View>
      <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
    </View>
  );
}

export default PayMethodCards;
