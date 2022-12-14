import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import GlobalStyles from '../routes/GlobalStyles';

const Buscador = ({props}) => {
    const [text, setText] = useState('');
    const { colors } = useTheme();
    return (
        <View>
            <View style={GlobalStyles.containerBuscador} >
                <Icon name='search' type='ionicon' color={colors.text} style={GlobalStyles.icono} />
                <TextInput placeholder='Buscar' style={GlobalStyles.buscador} onChangeText={newText => setText(newText)} defaultValue={text}/>
            </View>
        </View>
    );
}

export default Buscador;