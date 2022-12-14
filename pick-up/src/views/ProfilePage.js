import * as React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ProfileCards from '../components/ProfileCards';
import GlobalStyles from '../routes/GlobalStyles';

export default function ProfilePage({ navigation }) {
  const { colors } = useTheme();
  return (
    <ScrollView style={[GlobalStyles.scroller, { backgroundColor: colors.background }]}>
      <ProfileCards></ProfileCards>
    </ScrollView>
  );
}