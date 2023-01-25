import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, TextInput, Alert } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const usuario = require('../routes/user.json');

export default function ModifyUserPage({ navigation }) {
  try {
    const [textoNombre, setNombre] = useState({ usuarioNombre: '' });
    const [textoApellido, setApellido] = useState({ usuarioApellido: '' });
    const [textoCorreo, setCorreo] = useState({ usuarioCorreo: '' });
    const [textoTelefono, setTelefono] = useState({ usuarioTelefono: '' });
    const [textoContrasena, setContrasena] = useState({ usuarioContrasena: '' });
    const [textoEdad, setEdad] = useState({ usuarioEdad: '' });
    const [textoGenero, setGenero] = useState({ usuarioGenero: '' });

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const resp = await fetch("https://devs-lutions-api.azurewebsites.net/usuarios");
        const data = await resp.json();
        setData(data);
    };
    useEffect(() => {
        fetchData()
    }, [])

    const userData = data.filter( datos => {
      if(datos.Correo == usuario[0].Correo){
        return true
      }else{
        return false
      }
    })

    const newData = userData.map( datos => {
    return (
        <View style={[GlobalStyles.container, {marginTop:40}]} key={usuario[0].Id_Usuario}>
        <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Nombre:</Text></Text>
        <TextInput style={GlobalStyles.textInputRUser} placeholder='Nombre' onChangeText={newTXT => setNombre({...textoNombre, usuarioNombre: newTXT})}/>
        <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Apellido:</Text></Text>
        <TextInput style={GlobalStyles.textInputRUser} placeholder='Apellido' onChangeText={newTXT => setApellido({...textoApellido, usuarioApellido: newTXT})}/>
        <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Correo Electrónico:</Text></Text>
        <TextInput style={GlobalStyles.textInputRUser} placeholder='Correo Electrónico' onChangeText={newTXT => setCorreo({...textoCorreo, usuarioCorreo: newTXT})}/>
        <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Teléfono:</Text></Text>
        <TextInput style={GlobalStyles.textInputRUser} placeholder='Teléfono' onChangeText={newTXT => setTelefono({...textoTelefono, usuarioTelefono: newTXT})}/>
        <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Contraseña:</Text></Text>
        <TextInput style={GlobalStyles.textInputRUser} placeholder='Cotraseña' onChangeText={newTXT => setContrasena({...textoContrasena, usuarioContrasena: newTXT})}/>
        <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Edad: </Text></Text>
        <TextInput style={GlobalStyles.textInputRUser} placeholder='Edad' onChangeText={newTXT => setEdad({...textoEdad, usuarioEdad: newTXT})}/>
        <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Género: </Text></Text>
        <TextInput style={GlobalStyles.textInputRUser} placeholder='Femenino / Masculino / Otro' onChangeText={newTXT => setGenero({...textoGenero, usuarioGenero: newTXT})}/>
        </View>
    )
    })

    const modifyData = async () => {
        if(textoNombre.usuarioNombre != "" && textoCorreo.usuarioCorreo != "" && textoContrasena.usuarioContrasena != "" && textoTelefono != "" && textoApellido.usuarioApellido != "" && textoEdad.usuarioEdad != "" && textoGenero.usuarioGenero != ""){
          var url = "https://devs-lutions-api.azurewebsites.net/usuarios/update/"+textoNombre.usuarioNombre+"/"+textoApellido.usuarioApellido+"/"+textoCorreo.usuarioCorreo+"/"+textoContrasena.usuarioContrasena+"/"+textoEdad.usuarioEdad+"/"+textoGenero.usuarioGenero+"/"+textoTelefono.usuarioTelefono+"/"+usuario[0].Pago_Preferido+"/%20/"+usuario[0].Id_Usuario
          await fetch(url);

          usuario[0].Id_Usuario = usuario[0].Id_Usuario;
          usuario[0].Nombre = textoNombre.usuarioNombre;
          usuario[0].Apellidos = textoApellido.usuarioApellido;
          usuario[0].Correo = textoCorreo.usuarioCorreo;
          usuario[0].Contrasena = textoContrasena.usuarioContrasena;
          usuario[0].Edad = textoEdad.usuarioEdad;
          usuario[0].Genero = textoGenero.usuarioGenero;
          usuario[0].Telefono = textoTelefono.usuarioTelefono;
          usuario[0].Pago_Preferido = usuario[0].Pago_Preferido;
          usuario[0].Foto = usuario[0].Foto;
  
          Alert.alert('Usuario Modificado', 'El usuario ha sido modificado correctamente',
            [
              {text: '¡Genial!', onPress: () => console.log('Modificado')},
            ],
          );
        }else{
          Alert.alert('Usuario No Modificado', 'El usuario no ha sido modificado, revisa que tengas todos lo campos corretamente y que no te falten por llenar',
            [
              {text: 'Ok', onPress: () => console.log('No Modificado')},
            ],
          );
        }
      };

    const deleteData = async (posicion) => {
        var url = "https://devs-lutions-api.azurewebsites.net/usuarios/delete/"+usuario[0].Id_Usuario
        await fetch(url);
  
        Alert.alert('Usuario Eliminado', 'El usuario ha sido eliminado',
          [
            {text: '¡Genial!'},
          ],
        );
    };

    return (
      <ScrollView style={GlobalStyles.scroller}>
        { newData }
        <Pressable
          style={[GlobalStyles.option, {backgroundColor: '#5E3B3B', borderRadius: 15, marginHorizontal: 40, marginTop: 20, marginBottom: 30}]}
          android_ripple={{ color: '#bdc3c7' }}
          onPress={() => {modifyData(); navigation.navigate('UserPage')}}>
            <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Modificar</Text>
        </Pressable>
        <Pressable
          style={[GlobalStyles.option, {backgroundColor: '#5E3B3B', borderRadius: 15, marginHorizontal: 40, marginTop: 0, marginBottom: 30}]}
          android_ripple={{ color: '#bdc3c7' }}
          onPress={() => {deleteData(); navigation.navigate('LoginNavigation')}}>
            <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Eliminar Perfil</Text>
        </Pressable>
      </ScrollView>
    );
  }catch(error) {
    console.log(error);
  }
}
