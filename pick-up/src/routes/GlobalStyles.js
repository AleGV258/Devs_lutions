import React, {
  StyleSheet,
  Dimensions
} from 'react-native';

const { widthWindow, heightWindow } = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({
  // Global
  scroller: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // UserPage
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
  },
  // ShoppingCartPage
  tittleArticulo:{
    fontSize:20,
    textAlign:'center',
    marginTop: 10,
  },
  boxCancelar:{
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    width: '100%',
    height: 80,
    textAlign: 'center',
    paddingTop: 25,
    position:'absolute',
    top: 420,
  },
  cancelarArticulo:{
    fontSize: 20,
  },
  // ShopCardPage
  box: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    flexDirection: 'row',
    marginTop: 10

  },
  boxText: {
    width: '70%',
    height: 100,
    marginBottom: 20,
    marginTop: 10,
    paddingTop: 15,
    marginLeft: 15
  },
  boxPrice: {
    width: '30%',
    height: 100,
    marginBottom: 20,
    marginTop: 10,
    alignItems: 'center',
    paddingTop: 30
  },
  textTittle:{
    fontWeight: 'bold',
    fontSize: 15,
  },
  // ProfilePage
  // PayMethodPage
  // OrderHistoryPage
  // NotificationPage
  boxNotification: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    marginTop: 10

  },
  textTittleNotification: {
    marginTop: 10,
    paddingTop: 15,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  textNotification: {
    marginLeft: 15,
    fontSize: 15,
  },
  // MapPage
  // HomePage
  food: {
    width: widthWindow,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  foodCard: {
    backgroundColor: '#d1d3d6',
    alignItems: 'center',
    padding: 5,
    margin: 8,
    flex: 1,
    borderRadius: 5,
  },
  foodImage: {
    width: 170,
    height: 170,
    borderRadius: 15,
  },
  // TopBar
  // ProfileCards
  texto: {
    fontSize: 15,
    width: 200,
    fontWeight: '600',
    paddingLeft: 5,
    textAlign: 'left',
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  // Buscador
  icono: {
    //padding: 7.7,
    padding: 5.8,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    marginTop: 0.5,
  },
  containerBuscador: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 25,
    paddingHorizontal: 30,
  },
  buscador: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#fff',
    borderColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    fontSize: 20,
  },
  // Navbar
  // ProfileNavigation
});

export default GlobalStyles;
