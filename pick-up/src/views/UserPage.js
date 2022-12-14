import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

export default function UserPage({ navigation }) {
  return (
    <ScrollView style={GlobalStyles.scroller}>
      <View style={GlobalStyles.container}>
        <Image
          source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.androidiostip.com%2Fimages%2Fusuario-8.png&f=1&nofb=1&ipt=353d46c1b4aa1a818177805290bbcc3415e4368a8315c305c3d4222bb031c999&ipo=images'}}
          style={GlobalStyles.profilePicture}
        />
        <Text style={GlobalStyles.name}>Nombre: Admin</Text>
        <Text style={GlobalStyles.details}>Edad: 00</Text>
        <Text style={GlobalStyles.details}>Correo Electrónico:</Text>
        <Text>devs_lutions_admin@gmail.com</Text>
      </View>
    </ScrollView>
  );
}
