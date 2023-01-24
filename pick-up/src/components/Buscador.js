import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import GlobalStyles from '../routes/GlobalStyles';

const Buscador = ({texto, setTexto}) => {
    const { colors } = useTheme();
    return (
        <View>
            <View style={GlobalStyles.containerBuscador} >
                <Icon name='search' type='ionicon' color='#5E3B3B' style={GlobalStyles.icono} />
                <TextInput placeholder='Busca tu comida favorita' style={GlobalStyles.buscador} value={texto.busqueda} onChangeText={newText => setTexto({...texto, busqueda: newText})}/>
            </View>
        </View>
    );
}

export default Buscador;