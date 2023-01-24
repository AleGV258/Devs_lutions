import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

export default function SignIn({ navigation }) {
  return (
    <View style={GlobalStyles.containerR}>
      <View>
        <Text style={GlobalStyles.tituloR}>Pick-</Text>
        <Text style={GlobalStyles.tituloR}>Up</Text>
        <Text style={GlobalStyles.subtituloR}>Registarse</Text>
      </View>
      <Text style={GlobalStyles.labelInputR}>Nombre</Text>
      <TextInput style={GlobalStyles.textInputR} placeholder='Nombre'/>
      <Text style={GlobalStyles.labelInputCorreoR}>Correo</Text>
      <TextInput style={GlobalStyles.textInputR} placeholder='Correo Electrónico'/>
      <Text style={GlobalStyles.labelInputPassR}>Contraseña</Text>
      <TextInput style={GlobalStyles.textInputR} placeholder='Contraseña'/>
      <TouchableOpacity style={GlobalStyles.signInBtnR}>
        <Text style={GlobalStyles.textBtnR}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={GlobalStyles.loginbtnR} onPress={() => navigation.navigate('Login')}>
        <Text style={GlobalStyles.textBtnGoogleR}>Inicia Sesión</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}