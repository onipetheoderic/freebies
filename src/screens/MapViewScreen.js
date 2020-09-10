import React, {useEffect, useContext, useRef, useState} from 'react';
import MapView from "react-native-map-clustering";
import { CounterContext } from "../../store";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import CircularButtonWithIcon from '../components/CircularButtonWithIcon';
import CouponCard from '../components/CouponCard';
import MultiSelectBtn from '../components/MultiSelectBtn';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {zoomOut, fadeIn} from '../animations/animations'

const window = Dimensions.get('window');
    const { width, height }  = window


export default function MapViewScreen(props) {
    const [showCategory, setShowCategory] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
  
      const globalState = useContext(CounterContext);
      const {state, dispatch } = globalState;  
      

      const initialLatitude = state.location === null ? "0" : state.location.latitude;
      const initialLongitude = state.location === null ? "0" : state.location.longitude;
      const latitudeDelta = state.location === null ? "0" : state.location.latitudeDelta;
      const longitudeDelta = state.location === null ? "0" : state.location.longitudeDelta;
      const latitudeString = initialLatitude.toString()
       const longitudeString = initialLongitude.toString();
      
       const initialRegion = {
         latitude: initialLatitude,
         longitude: initialLongitude,
         latitudeDelta:latitudeDelta,
         longitudeDelta: longitudeDelta
       };


      useEffect(()=>{
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
            //   setErrorMsg('Permission to access location was denied');
            console.log("error")
            }
      
            let location = await Location.getCurrentPositionAsync({});
            // setLocation(location);
            console.log(location)
            dispatch({ type: 'setLocation', payload:{latitude:location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.25,
                longitudeDelta: 0.15}})
         
          })();
      }, [])

      const revertAnimation = () => {
        alert("theoderic")
      }
     
    return (
      <View style={styles.container}>
            {/* <View style={styles.parentStyle}>
            </View> */}
            <CircularButtonWithIcon onPress={()=>props.navigation.openDrawer()} 
            iconName="menu" toIcon="menu" height={60} width={60} 
            left={20} top={30}/>
           {state.showWallet &&          
            <Animatable.View duration={1000} animation={zoomOut} style={{position:'absolute',}}>
            <MaterialCommunityIcons name="wallet-plus" 
   style={{  color: state.walletColor}} size={285} />
            </Animatable.View>
         }

          <ScrollView horizontal style={styles.menuBottomContainer}>
          <CouponCard until={2000} id="1"/>
          <CouponCard until={3000} id="2"/>
          <CouponCard until={3200} id="3"/>
          <CouponCard until={10} id="22"/>
           
          </ScrollView>
          
        <MapView initialRegion={initialRegion} style={styles.mapStyle}>

        </MapView>
      </View>
    );
  }


const styles = StyleSheet.create({
    menuBottomContainer: {
        width:'100%',
        height:130,
        flexDirection:'row',
       
        position:'absolute',
        bottom:1,
        zIndex:1
      },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    zIndex:-1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  parentStyle: {
    top:10, zIndex:10, position:'absolute', 
            width:80, height:80, borderRadius:40, backgroundColor:'white',
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 12,
},
});