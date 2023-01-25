import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

export default function SignIn({ navigation }) {
  try {
    const [textoNombre, setNombre] = useState({ usuarioNombre: '' });
    const [textoCorreo, setCorreo] = useState({ usuarioCorreo: '' });
    const [textoTelefono, setTelefono] = useState({ usuarioTelefono: '' });
    const [textoContrasena, setContrasena] = useState({ usuarioContrasena: '' });


    const insertData = async () => {
      if(textoNombre.usuarioNombre != "" && textoCorreo.usuarioCorreo != "" && textoContrasena.usuarioContrasena != "" && textoTelefono != ""){
        var url = "https://devs-lutions-api.azurewebsites.net/usuarios/insert/"+textoNombre.usuarioNombre+"/%20/"+textoCorreo.usuarioCorreo+"/"+textoContrasena.usuarioContrasena+"/0/Otro/"+textoTelefono.usuarioTelefono+"/Efectivo/%20"
        await fetch(url);

        Alert.alert('Usuario Registrado', 'El usuario ha sido registrado correctamente',
          [
            {text: '¡Genial!', onPress: () => console.log('Registrado')},
          ],
        );
      }else{
        Alert.alert('Usuario No Registrado', 'El usuario no ha sido registrado, revisa que tengas todos lo campos corretamente y que no te falten por llenar',
          [
            {text: 'Ok', onPress: () => console.log('No Registrado')},
          ],
        );
      }
    };

    return (
      <View style={GlobalStyles.containerR}>
        <View>
          <Text style={GlobalStyles.tituloR}>Pick-</Text>
          <Text style={GlobalStyles.tituloR}>Up</Text>
          <Text style={GlobalStyles.subtituloR}>Registarse</Text>
        </View>
        <Text style={GlobalStyles.labelInputR}>Nombre</Text>
        <TextInput style={GlobalStyles.textInputR} placeholder='Nombre' onChangeText={newTXT => setNombre({...textoNombre, usuarioNombre: newTXT})}/>
        <Text style={GlobalStyles.labelInputCorreoR}>Correo</Text>
        <TextInput style={GlobalStyles.textInputR} placeholder='Correo Electrónico' onChangeText={newTXT => setCorreo({...textoCorreo, usuarioCorreo: newTXT})}/>
        <Text style={GlobalStyles.labelInputPassR}>Contraseña</Text>
        <TextInput style={GlobalStyles.textInputR} placeholder='Contraseña' onChangeText={newTXT => setContrasena({...textoContrasena, usuarioContrasena: newTXT})}/>
        <Text style={GlobalStyles.labelInputPassR}>Teléfono</Text>
        <TextInput style={GlobalStyles.textInputR} placeholder='Teléfono' onChangeText={newTXT => setTelefono({...textoTelefono, usuarioTelefono: newTXT})}/>
        <TouchableOpacity style={GlobalStyles.signInBtnR} onPress={() => {insertData(); navigation.navigate('Login')}}>
          <Text style={GlobalStyles.textBtnR}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.loginbtnR} onPress={() => navigation.navigate('Login')}>
          <Text style={GlobalStyles.textBtnGoogleR}>Inicia Sesión</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }catch(error) {
    console.log(error);
  }
}