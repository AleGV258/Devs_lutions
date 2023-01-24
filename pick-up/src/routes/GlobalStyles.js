import React, {
  StyleSheet,
  Dimensions
} from 'react-native';

const { widthWindow, heightWindow } = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({
  // Login
  containerL: {
    flex: 1,
    backgroundColor: '#5E3B3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloL: {
    fontSize: 60,
    color:'#FFFFFF' ,
    fontWeight:'bold',
  },
  subtituloL:{
    fontSize: 25,
    color:'#FFFFFF' ,
    
  },
  textInputL:{
    padding:10,
    paddingStart:30,
    width:'80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  forgotPassL:{
    fontSize: 10,
    color: 'gray',
    marginTop:8,
    marginBottom:8,
    marginLeft: '44%',
  },
  textBtnL:{
    fontSize: 14,
  },
  loginBtnL:{
    width:'80%',
    height: 50,
    borderRadius: 25,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#D9D9D9',
    marginTop:15,
  },
  googleBtnL:{
    width:'70%',
    height: 50,
    borderRadius: 25,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#FFFFFF',
    marginTop:20,
  },
  textBtnAppleL:{
    fontSize: 12,
    color: '#FFFFFF',
  },
  appleBtnL:{
    width:'45%',
    height: 40,
    borderRadius: 25,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'blue',
    marginTop:20,
  },
  textBtnGoogleL:{
    fontSize: 12,
    color: 'white',
  },
  googlebtnL:{
    width:'45%',
    height: 40,
    borderRadius: 25,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'grey',
    marginTop:20,
    marginTop:20
  },
  // SignIn
  containerR: {
    flex: 1,
    backgroundColor: '#5E3B3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloR: {
    fontSize: 60,
    color:'#FFFFFF' ,
    fontWeight:'bold',
  },
  subtituloR:{
    fontSize: 40,
    color:'#FFFFFF' ,
    marginBottom:30,
  },
  labelInputR:{
    fontSize: 20,
    color:'#FFFFFF' ,
    marginRight:'50%',
    marginBottom:5,
  },
  labelInputCorreoR:{
    fontSize: 20,
    color:'#FFFFFF' ,
    marginRight:'54%',
    marginBottom:5,
  },
  labelInputPassR:{
    fontSize: 20,
    color:'#FFFFFF' ,
    marginRight:'44%',
    marginBottom:5,
  },
  textInputR:{
    padding:10,
    paddingStart:30,
    width:'80%',
    height: 50,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginBottom:15,
  },
  textBtnR:{
    fontSize: 14,
  },
  signInBtnR:{
    width:'80%',
    height: 50,
    borderRadius: 25,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#D9D9D9',
    marginTop:15,
  },
  textBtnGoogleR:{
    fontSize: 12,
    color: 'white',
  },
  loginbtnR:{
    width:'45%',
    height: 40,
    borderRadius: 25,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'grey',
    marginTop:20,
    marginTop:20
  },
  // Global
  scroller: {
    flex: 1,
    marginBottom: 60
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
    marginTop: 50,
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
  bold:{
    fontWeight: 'bold',
  },
  boldColor:{
    color: '#5E3B3B',
    fontWeight: 'bold',
  },
  // ShoppingCartPage
  titleArticulo:{
    fontSize: 40,
    textAlign:'center',
    marginTop: 25,
    marginBottom: 20,
    color: '#5E3B3B',
    fontWeight: 'bold',
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
    marginLeft: 15,
  },
  boxPrice: {
    width: '30%',
    height: 100,
    marginBottom: 20,
    marginTop: 10,
    alignItems: 'center',
    paddingTop: 30
  },
  textTitle:{
    fontWeight: 'bold',
    fontSize: 35,
  },
  // ProfilePage
  // PayMethodPage
  // OrderHistoryPage
  // NotificationPage
  boxNotification: {
    width: '80%',
    height: 100,
    marginHorizontal: 40,
    marginVertical: 10,
    backgroundColor: '#5E3B3B',
    borderRadius: 15,
    color: '#fff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textBox: {
    width: 206,
    height: 100,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  notificationTexto: {
    marginLeft: 15,
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
  pedidoPicture: {
    height: 100,
    width: 100,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  // MapPage
  // HomePage
  food: {
    width: widthWindow,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  foodCard: {
    width: '44%',
    backgroundColor: '#5E3B3B',
    alignItems: 'center',
    margin: 8,
    borderRadius: 15,
  },
  foodImage: {
    width: 170,
    height: 170,
    borderRadius: 15,
  },
  nombreFood: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    padding: 8,
    textAlign: 'center',
    marginTop: 10,
  }, 
  txtFood: {
    textAlign: 'justify',
    padding: 7,
    color: '#d1d3d6',
  },
  descPrecFood: {
    fontWeight: 'bold',
    color: 'white',
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
    borderColor: '#5E3B3B',
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
    color: '#000',
    borderColor: '#5E3B3B',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    fontSize: 20,
  },
  // Navbar
  // ProfileNavigation
  // Article
  img: {
    width: 410,
    height: 300,
    marginBottom: 20,
  },
  textTittle: {
    fontSize: 25,
    marginLeft: 4,
    marginBottom: 30,
  },
  precio: {
    fontSize: 25,
    marginLeft:300,
  },
  detalles: {
    fontSize: 18,
    marginRight: 210,
    marginLeft: 25,
    marginTop: -70,
  },
  carrito: {
    fontSize: 18,
    color:'blue',
    textDecorationLine: 'underline',
    marginLeft:220,
  },
  viewPagar: {
    width: 380,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  iconoPagar: {
    backgroundColor: '#5E3B3B',
    width: 80,
    marginLeft: 20,
    padding: 15,
    borderRadius: 20,
  },
  botonPagar:{
    backgroundColor: '#5E3B3B',
    width: 230,
    padding: 15,
    borderRadius: 20,
  },
  textoBotonPagar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  // PayPage
  tituloPagar: {
    color: '#5E3B3B',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  viewPagarResumen: {
    width: 380,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  textoResumenNombre: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  textoResumenPrecio: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  linea:{
    width: 320,
    height: 2,
    backgroundColor: 'grey',
    marginLeft: 30,
  },
  textoPagarNormal: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 40,
  }
});

export default GlobalStyles;
