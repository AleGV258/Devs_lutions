import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const usuario = require('../routes/user.json');

export default function Login({ navigation }) {
  const [textoCorreo, setCorreo] = useState({ usuarioCorreo: '' });
  const [textoContrasena, setContrasena] = useState({ usuarioContrasena: '' });
  const [data, setData] = useState([]);
  const [loginPress, setLogin] = useState({ usuarioLogin: false });
  var contador = 0;

  const fetchData = async () => {
    const resp = await fetch("https://devs-lutions-api.azurewebsites.net/usuarios");
    const data = await resp.json();
    setData(data);
  };
  useEffect(() => {
      fetchData();
  }, [])

  const userData = data.filter( datos => {
    if((datos.Correo == textoCorreo.usuarioCorreo) && (datos.Contrasena == textoContrasena.usuarioContrasena)){
      contador++;
      usuario[0].Id_Usuario = datos.Id_Usuario;
      usuario[0].Nombre = datos.Nombre;
      usuario[0].Apellidos = datos.Apellidos;
      usuario[0].Correo = datos.Correo;
      usuario[0].Contrasena = datos.Contrasena;
      usuario[0].Edad = datos.Edad;
      usuario[0].Genero = datos.Genero;
      usuario[0].Telefono = datos.Telefono;
      usuario[0].Pago_Preferido = datos.Pago_Preferido;
      usuario[0].Foto = datos.Foto;
      return true
    }else{
      if(contador == 0){
        contador++;
        return true
      }else{
        return false
      }
    }
  })

  var userLogin = userData.map( datos => {
    if((datos.Correo == textoCorreo.usuarioCorreo) && (datos.Contrasena == textoContrasena.usuarioContrasena)){
      return(
        <TouchableOpacity style={GlobalStyles.loginBtnL} onPress={() => navigation.navigate('Navbar')} key={datos.Id_Usuario}>
          <Text style={GlobalStyles.textBtnL}>Iniciar Sesión</Text>
        </TouchableOpacity>
      )
    }else{
      return(
        <TouchableOpacity style={GlobalStyles.loginBtnL} key={datos.Id_Usuario}>
          <Text style={GlobalStyles.textBtnL}>Iniciar Sesión</Text>
        </TouchableOpacity>
      )
    }
  })

  return (
    <View style={GlobalStyles.containerL}>
        <Text style={GlobalStyles.tituloL}>Pick-</Text>
        <Text style={GlobalStyles.tituloL}>Up</Text>
        <Text style={GlobalStyles.subtituloL}>Coffe n Ice</Text>
        <Text style={GlobalStyles.subtituloL}>Cream</Text>
        <TextInput style={GlobalStyles.textInputL} placeholder='Correo Electrónico' onChangeText={newCorreo => setCorreo({...textoCorreo, usuarioCorreo: newCorreo})}/>
        <TextInput style={GlobalStyles.textInputL} placeholder='Contraseña' onChangeText={newContrasena => setContrasena({...textoContrasena, usuarioContrasena: newContrasena})} />
        <Text style={GlobalStyles.forgotPassL}>Forgot your password?</Text>
        {userLogin[userLogin.length-1]}
        <TouchableOpacity style={[GlobalStyles.loginbtnR, {marginTop: 30, marginBottom: 5}]} onPress={() => navigation.navigate('SignIn')}>
          <Text style={GlobalStyles.textBtnGoogleR}>Registrate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.googlebtnL}>
          <Text style={GlobalStyles.textBtnGoogleL}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.appleBtnL}>
          <Text style={GlobalStyles.textBtnAppleL}>Continue with Apple</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
  );
}
