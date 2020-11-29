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
import CouponCard from '../components/CouponCardPlenty';
import MultiSelectBtn from '../components/MultiSelectBtn';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CouponDescription from '../components/CouponDescription';
import {zoomOut, fadeIn} from '../animations/animations'

const window = Dimensions.get('window');
    const { width, height }  = window


export default function CouponScreen(props) {
    const globalState = useContext(CounterContext);
    const {state, dispatch } = globalState;  
    
   console.log(state.showDescriptionBox,"yyy")

    return (
        <ScrollView>
            
        <View style={{backgroundColor:'white', flex:1}}>
            {state.showDescriptionBox &&
            <CouponDescription />
        }
        <Text style={{textAlign:'center',fontSize:20,
        fontFamily:'Montserrat_600SemiBold', marginTop:40}}>My Wallet</Text>
            <View style={{width:'90%',marginTop:10, alignSelf:'center' }}>
                <CouponCard until={2000} id="1"/>
                <CouponCard until={3000} id="2"/>
                <CouponCard until={3200} id="3"/>
                <CouponCard until={10} id="22"/>
            </View>
        </View>
        </ScrollView>
    )

}