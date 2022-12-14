import * as React from 'react';
import { Text, ScrollView, View} from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';
import Notification from '../components/NotificationCards';

export default function NotificationPage({ navigation }) {
  const notification = {
    name: 'Tu pedido esta listo',
    description: 'Puedes pasar a recojer tu pedido a la cafeteria'
  };
  return (
    <ScrollView style={GlobalStyles.scroller}>
      <Text style={GlobalStyles.tittleArticulo}>Notificaciones</Text>
      <Notification notification={notification}></Notification>
      <View style={GlobalStyles.boxCancelar}>
      <Text style={GlobalStyles.cancelarArticulo}>Cancelar</Text>
      </View>
    </ScrollView>
  );
}
