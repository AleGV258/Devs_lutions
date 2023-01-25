import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const usuario = require('../routes/user.json');

export default function UserPage({ navigation }) {
  try {
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
      if(datos.Foto != "") {
        return (
          <View style={GlobalStyles.container} key={usuario[0].Id_Usuario}>
            <Image
              source={{uri: datos.Foto}}
              style={GlobalStyles.profilePicture}
            />
            <Text style={GlobalStyles.name}><Text style={GlobalStyles.boldColor}>{datos.Nombre} {datos.Apellidos}</Text></Text>
            <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Correo Electrónico:</Text></Text>
            <Text style={GlobalStyles.details}>{datos.Correo}</Text>
            <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Teléfono:</Text></Text>
            <Text style={GlobalStyles.details}>{datos.Telefono}</Text>
            <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Método de Pago Preferido:</Text></Text>
            <Text style={GlobalStyles.details}>{datos.Pago_Preferido}</Text>
            <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Edad: </Text>{datos.Edad}</Text>
            <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Género: </Text>{datos.Genero}</Text>
          </View>
        )
      }else{
        return (
          <View style={GlobalStyles.container}>
              <Image
                source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.androidiostip.com%2Fimages%2Fusuario-8.png&f=1&nofb=1&ipt=353d46c1b4aa1a818177805290bbcc3415e4368a8315c305c3d4222bb031c999&ipo=images'}}
                style={GlobalStyles.profilePicture}
              />
            <Text style={GlobalStyles.name}><Text style={GlobalStyles.boldColor}>{datos.Nombre} {datos.Apellidos}</Text></Text>
            <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Correo Electrónico:</Text></Text>
            <Text style={GlobalStyles.details}>{datos.Correo}</Text>
            <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Teléfono:</Text></Text>
            <Text style={GlobalStyles.details}>{datos.Telefono}</Text>
            <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Edad: </Text>{datos.Edad}</Text>
            <Text style={GlobalStyles.details}><Text style={GlobalStyles.boldColor}>Género: </Text>{datos.Genero}</Text>
          </View>
        )
      }
    })

    return (
      <ScrollView style={GlobalStyles.scroller}>
        { newData }
        <Pressable
          style={[GlobalStyles.option, {backgroundColor: '#5E3B3B', borderRadius: 15, marginHorizontal: 40, marginTop: 20, marginBottom: 30}]}
          android_ripple={{ color: '#bdc3c7' }}
          onPress={() => navigation.navigate('ModifyUserPage')}>
        <Text style={[GlobalStyles.texto, {textAlign: 'center', width: 240, color: "#fff"}]}>Modificar Información</Text>
      </Pressable>
      </ScrollView>
    );
  }catch(error) {
    console.log(error);
  }
}
