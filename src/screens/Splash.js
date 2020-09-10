import React, {useState, useContext, useEffect} from 'react';
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
const { height, width } = Dimensions.get('screen');


export default function Splash(props) {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('MapViewScreen')
        }, 3000);
    }, []);
    return (
        <ImageBackground
        source={require('../../assets/images/defaultSplash1.png')} 
        style={styles.image}>
            <Text style={styles.textHeader}>Freebies</Text>
            <Text style={styles.flyingTexts}>Get coupons on the fly</Text>
            <Text style={styles.flyingTexts}>Locate discount and Freebies quickly in your Area</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontFamily:'Pacifico_400Regular',
        color:'#cf1641',
        alignSelf:'center',
        marginTop:70,
        fontSize:70
    },

    flyingTexts: {
        fontFamily:'Pacifico_400Regular',
        color:'#cf1641',
        alignSelf:'center',
        marginTop:0,
        fontSize:12
    },


    image: {
        flex: 1,
        resizeMode: "contain",
        
      },

    imageView: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        height: 140, 
        width: 140, 
        marginBottom:80
    },

    imageStyleFlag: {
        height: 20, 
        width: 20, 
    },

    footerText:{ 
        bottom: 0, 
        left: 0, 
        right: 0, 
        position: 'absolute', 
        height: height * 0.13,
        alignItems:'center',
        justifyContent:'center'

    },
    
});