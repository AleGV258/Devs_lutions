import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ProfileCards from '../components/ProfileCards';
import { useTheme } from '@react-navigation/native';

export default function ProfilePage({ navigation }) {
  const { colors } = useTheme();
  return (
    <ScrollView style={[styles.scroller, { backgroundColor: colors.background }]}>
      <ProfileCards></ProfileCards>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  },
});
