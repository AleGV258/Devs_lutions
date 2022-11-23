import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const Buscador = (props) => {
    const [text, setText] = useState('');
    return (
        <View>
            <View style={styles.container} >
                <Icon name='search' type='ionicon' color='#000' style={styles.icono} />
                <TextInput placeholder='Buscar' style={styles.buscador} onChangeText={newText => setText(newText)} defaultValue={text}/>
            </View>
        </View>
    );
}

export default Buscador;

const styles = StyleSheet.create({
    icono: {
        // padding: 7.7,
        padding: 5.8,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderColor: '#000',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 5,
        paddingHorizontal: 30,
    },
    buscador: {
        flex: 1,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        backgroundColor: '#ff',
        color: '#fff',
        borderColor: '#000',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        fontSize: 20,
    }
})