import React, {useState, useContext} from 'react'
import { Image, ImageBackground, ActivityIndicator, View } from 'react-native';
import { CounterContext } from "../../../store";

export default function ImageIncrementer(props) {
    const globalState = useContext(CounterContext);
    const {state, dispatch } = globalState;

    return (
        <Image onPress={()=>props.onPress} 
         source={{uri:props.markerImage}} 
            style={{ resizeMode:"center",alignSelf:'center',
            width:25,zIndex:20000, height:40}} 
        />
    )
}
