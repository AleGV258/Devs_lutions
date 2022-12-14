import React from 'react';
import { View, Text, Image } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';

const Notification = ({notification}) => {
  return (
    <View style={GlobalStyles.boxNotification}>
        <Text style={GlobalStyles.textTittleNotification}>{notification.name}</Text>
        <Text style={GlobalStyles.textNotification}>{notification.description}</Text>
    </View>
  );
}


export default Notification;