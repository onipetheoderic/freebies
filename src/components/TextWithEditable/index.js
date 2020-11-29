import React, {useContext, useState} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  
} from 'react-native';

import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';


const TextInputMaterial = (props) => {
  
    const onFocusedColor = props.onFocusedColor
    const onBlurColor = props.onBlurColor
    console.log("prodd", props.defaultEditablity)
    const [lineColor, setColor] = useState(onBlurColor)
    const [secureText, setSecureText] = useState(props.secureTextEntry)
    const { width, height } = Dimensions.get('window');

    const [editable, changeEditable] = useState(props.defaultEditablity)

    const onFocus = () => {
      setColor(onFocusedColor)
      console.log("focused")
    }

    const onBlur = () => {
      setColor(onBlurColor)
    }

  return (

     <TouchableOpacity onPress={()=>changeEditable(!editable)}  
     style={{ borderBottomColor: lineColor, borderBottomWidth: 1, 
     flexDirection:'row', justifyContent:'space-between', height:50}}>
          <TextInput
              placeholder={props.placeHolderText}
              onChangeText={props.onChangeText}
              value={props.value}
              editable={editable}
              secureTextEntry={secureText}
              placeholderTextColor={lineColor}
              onFocus = {()=>onFocus()} 
              onBlur = {()=>onBlur()}
    style={{color:'black', width:'80%',fontFamily: 'Montserrat_600SemiBold', height:50, paddingTop:30, borderColor: 'transparent',
}}
  />
  <View>
    {props.showEditable &&
      <TouchableOpacity onPress={()=>changeEditable(!editable)} style={{
         paddingTop:30}}>
        <Feather name='edit-2' style={{color:lineColor}} size={15} />
      </TouchableOpacity>
      }
      
  
  </View>
   
          </TouchableOpacity>
         
        
    
  );
};


TextInputMaterial.propTypes = {
  placeHolderText: PropTypes.string.isRequired,
  onFocusedColor: PropTypes.string.isRequired,
  onBlurColor: PropTypes.string.isRequired,
  withIcon: PropTypes.bool.isRequired,
  secureTextEntry: PropTypes.bool,
  iconName: PropTypes.string,
  defaultEditablity: PropTypes.bool.isRequired

};
export default TextInputMaterial;
