import * as React from 'react';
import { Text, ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import GlobalStyles from '../routes/GlobalStyles';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const { widthWindow, heightWindow } = Dimensions.get('window');

export default function MapPage() {
  return (
    <ScrollView style={GlobalStyles.scroller}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 20.59678557600082,
            longitude: -100.38094955237226,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 20.59678557600082,
              longitude: -100.38094955237226,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Aihnoa Helado'}
            description={'Helado Artesanal'}
          />
        </MapView>
    </ScrollView>
  );
}

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
const styles = StyleSheet.create({
  mapStyle: {
    width : widthWindow,
    height : 655,
  },
});