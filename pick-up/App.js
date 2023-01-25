import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import LoginNavigation from './src/routes/LoginNavigation';
// import ProfileNavigation from './src/routes/ProfileNavigation';
// import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar barStyle="dark-content" backgroundColor="#5E3B3B" />
      <View style={styles.container}>
        <LoginNavigation/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
