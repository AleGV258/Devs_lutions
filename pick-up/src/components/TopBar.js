import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Pick Up</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#bdc3c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 26,
    fontFamily: 'sans-serif-medium',
  },
});

export default TopBar;

