import React, {useContext} from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import logo from '../assets/images/avatar.png';
import { ContactStackNavigator, MainStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Contact from '../src/screens/Contact';
import Splash from '../src/screens/Splash';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';
import ForgotPassword from '../src/screens/ForgotPassword';
import MapViewScreen from '../src/screens/MapViewScreen';
import CouponScreen from '../src/screens/CouponScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { CounterContext } from "../store";
import AntDesign from 'react-native-vector-icons/AntDesign';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {


  function CustomDrawerContent({ navigation }) {

    return (
      <>
      <View style={styles.transparentLogoCont}>
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logoImage} />          
        </View>        
        <Text style={styles.nameText}>Theoderic Onipe</Text>
        <Text style={styles.emailText}>onipetheoderic@gmail.com</Text>
      </View>

      
     
   
      <TouchableOpacity onPress={()=>navigation.navigate("CouponScreen")} style={styles.drawerItems}>
        <Text style={styles.textStyle}>My Coupons</Text>
      </TouchableOpacity>
     
         <TouchableOpacity style={styles.drawerItems}>
         <Text style={styles.textStyle}>My Profile</Text>
       </TouchableOpacity>
    
  
      <TouchableOpacity style={styles.drawerItems}>
        <Text style={styles.textStyle}>Settings</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.drawerItems}>     
          <Text style={styles.textStyle}>Log Out</Text>       
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.drawerItems}>     
          <Text style={styles.textStyle}>Sign In</Text>       
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.drawerItems}>     
          <Text style={styles.textStyle}>Sign Up</Text>       
      </TouchableOpacity>
       
       

       <View style={styles.socialMediaCont}>
         <View style={{flexDirection:'row'}}>
         <Fontisto name="facebook" 
          style={{marginLeft:20, marginRight:18,marginTop:2,color:'black'}} size={35} />
           <AntDesign name="instagram" 
          style={{marginRight:18,marginTop:2,color:'black'}} size={35} />
       <AntDesign name="twitter" 
          style={{marginRight:18, marginTop:2,color:'black'}} size={35} />
       </View>
         
         <View style={{flexDirection:'row', marginBottom:15}}>
         <AntDesign name="copyright" 
          style={{marginLeft:20, marginTop:2,color:'black'}} size={12} />
          <Text style={styles.copyright}>2020 Freebies Limited</Text>
         </View>

         </View>
      
      </>
     
    );
  }


  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
    initialRouteName="Splash">
      {/* <Drawer.Screen name="Home" component={TabNavigator} /> */}
      <Drawer.Screen name="Splash" component={Splash} options={({ route, navigation }) => {
        return {
          swipeEnabled: false,
        };
      }}/>
      <Drawer.Screen name="MapViewScreen" component={MapViewScreen} />
      <Drawer.Screen name="CouponScreen" component={CouponScreen} />
      <Drawer.Screen name="Login" component={Login}  options={({ route, navigation }) => {
        return {
          swipeEnabled: false,
        };
      }}/>
       <Drawer.Screen name="Register" component={Register}  options={({ route, navigation }) => {
        return {
          swipeEnabled: false,
        };
      }}/>
      <Drawer.Screen name="ForgotPassword" component={ForgotPassword}  options={({ route, navigation }) => {
        return {
          swipeEnabled: false,
        };
      }}/>
      <Drawer.Screen name="Home" component={MainStackNavigator} options={({ route, navigation }) => {
        return {
          swipeEnabled: false,
        };
      }}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;


const styles = StyleSheet.create({
  emailText: {
    fontFamily: 'Nunito_400Regular', 
    fontSize: 14,

  },
  nameText: {
    fontFamily: 'Nunito_400Regular', 
    fontSize: 16,
    fontWeight:'bold',
    marginTop:10,
  },
  copyright: {
    fontFamily: 'Nunito_400Regular', 
    fontSize:8,
    marginTop:3,
    marginLeft:4
  },
  socialMediaCont: {
    position:'absolute',
   
    flexDirection:'column',
    justifyContent:'space-between',
   
    height:100,
    width:'100%',
    bottom:0
  },
  textStyle: {
    marginLeft:20,
    fontWeight:'500',
    fontFamily: 'Nunito_400Regular', 
    fontSize:16,
  },
  drawerItems: {
    
    height:45,
    width:'90%',
    alignItems:'center',
    marginLeft:'10%',
    flexDirection:'row'
  },
  parentLogos: {
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',

    height:150,

  },
  transparentLogoCont: {
  
    width:'100%',
    alignSelf:'center',
    height:200,
   
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
},
 
  logoImageInParent: {
    width:'90%',
    height:105,
    resizeMode: 'stretch',
   alignSelf:'center'
  },
  tinyLogo: {
      width: 50,
      height: 50,
    },
    logoImage: {
      alignSelf:'center',
        width:100,
        height:100,
       
        resizeMode: 'stretch',
    },
  logoView: {
    borderRadius:60,
    borderWidth:2,
    borderColor:'white',
    width:120,
    height:120,
      alignSelf:'center',
      alignItems: 'center',
      justifyContent: 'center',
  },
  navBar: {
      flexDirection:'row',
      marginLeft:'15%'
  },
  header: {
      flexDirection:'column',
      flex:1
     
  },
  body: {
      flex:7
  },
 
  image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },


})