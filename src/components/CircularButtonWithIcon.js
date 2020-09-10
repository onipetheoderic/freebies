import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function CircularButtonWithIcon(props) {
    const [current, changeCurrent] = useState(true)
    const {height, width, top, right, left, iconName} = props;
    const borderRadius = height/2;
    const currentIcon = current === true ? props.iconName : props.toIcon; 
  return (
    <TouchableOpacity onPress={()=>{changeCurrent(!current); props.onPress()}} style={{ left:left, top:top, justifyContent:'center', right:right, zIndex:10, position:'absolute', 
    width:width, height:height, borderRadius:height/2, backgroundColor:'white',
    shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 12,
    }}>
     <Feather name={currentIcon} style={{color:'black', alignSelf:'center'}} size={height/2} />
    </TouchableOpacity>
  );
}

CircularButtonWithIcon.propTypes = {
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
    // top: PropTypes.number.isRequired,
    // right: PropTypes.number.isRequired,
}


const styles = StyleSheet.create({
  
  });