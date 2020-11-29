import React, {useEffect, useContext, useRef, useState} from 'react';
import MapView from "react-native-map-clustering";
import { CounterContext } from "../../store";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import Spinner from 'react-native-loading-spinner-overlay';
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
import CouponDetails from '../components/CouponDetails';
import ImageIncrementer from '../components/ImageIncrementer';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FormField from '../components/FormFields/FormField';
import {zoomOut, fadeIn} from '../animations/animations'
import { dummy } from './dummy';
const window = Dimensions.get('window');
    const { width, height }  = window


export default function MapViewScreen(props) {
    const [showCategory, setShowCategory] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1)
  
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
      
       const colorArray = ["red", "tomato", "orange", "yellow", "green", 
       "gold", "wheat", "linen", "tan", "blue", "aqua",
       "teal", "violet", "purple", "indigo", "turquoise", "navy", "plum"]

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
      const map = useRef(null);


      const loadSpinner = state.location === null  ? true : false;
      
      function markerClick(merchant, i){
        console.log("|the merchant", merchant)
        setCurrentIndex(i),
        dispatch({ type: 'setCouponDetail', payload:merchant})
        dispatch({ type: 'setShowDescriptionBox', payload:true})
      }
      function renderRandomMarkers(n) {
        const { latitude, longitude, latitudeDelta, longitudeDelta } = initialRegion;
        
        return dummy.map((x, i) => {
          // //console.log(x,"XXXXX")
        return (
          <Marker
          //  title={`${x.merchant_name} (${x.merchant_address}) `}
            coordinate={{
              latitude: parseFloat(x.merchant_latitude),
              longitude: parseFloat(x.merchant_longitude),
            }}
            key={i}
            pinColor = {x.merchant_category_colorcode}
            onPress={()=>markerClick(x,i)}
         
            
          >
           
          </Marker>
        )});
      }


     
    return (
      <View style={styles.container}>
          {state.showDescriptionBox &&
           <CouponDetails image={dummy[currentIndex].coupon_image}/>
          }
            <View style={{position:'absolute', width:'80%', top: 25, left:70}}>
            <FormField marginVertical={6} 
            placeholder="Search for Address" secure={false} icon="search"/>
              </View>
           
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
          <MapView 
     
      ref={map}

      followsUserLocation={true} 
      showsUserLocation={true}
      // onRegionChange={region => onRegionChange(region)}//when the regiion is changed, we use this function to query the api again
      style={styles.mapStyle}
      initialRegion={initialRegion} 
      zoomEnabled={true}
      enableZoomControl={true}
      >
         {renderRandomMarkers(1)}
{state.location &&
<Marker coordinate={state.location}  pinColor = "gold"/>
}
      </MapView>
      <View style={{backgroundColor:'transparent', 
          position:'absolute', width:50, 
          height:50}}>
             <Spinner
          //visibility of Overlay Loading Spinner
          visible={loadSpinner}
          //Text with the Spinner 
          textContent="loading"
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
          </View>
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