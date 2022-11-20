import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar barStyle="light-content" backgroundColor="#27ae60"/>
      <View style={styles.container}>
        <Navbar/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  area: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});