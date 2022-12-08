import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Buscador = (props) => {
    const [text, setText] = useState('');
    const { colors } = useTheme();
    return (
        <View>
            <View style={styles.container} >
                <Icon name='search' type='ionicon' color={colors.text} style={styles.icono} />
                <TextInput placeholder='Buscar' style={styles.buscador} onChangeText={newText => setText(newText)} defaultValue={text}/>
            </View>
        </View>
    );
}

export default Buscador;

const styles = StyleSheet.create({
    icono: {
        // padding: 7.7,
        padding: 5.9,
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
        paddingBottom: 25,
        paddingTop: 25,
        paddingHorizontal: 30,
    },
    buscador: {
        flex: 1,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        backgroundColor: '#fff',
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