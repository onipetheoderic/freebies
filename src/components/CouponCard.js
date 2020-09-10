import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import CountDown from 'react-native-countdown-component';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {Toast} from 'native-base';
import { CounterContext } from "../../store";
const window = Dimensions.get('window');
const { width, height }  = window;



export default function componentName(props) {
  const globalState = useContext(CounterContext);
const {state, dispatch } = globalState;  
    
  const showAlert = (msg) => {
    Toast.show({
      text: msg,
      textStyle: { color: "yellow" },
      duration: 4000
    })
  }
  const onWalletPress = (couponId) => {
    console.log(state.selectedCoupons, "TTTTTTTTTTTT")
    let currentSelectedCoupons = state.selectedCoupons;
//setWalletColor
    if(currentSelectedCoupons.indexOf(couponId) !== -1){
      let indexOfCat = currentSelectedCoupons.indexOf(couponId) 
      
      let removed = currentSelectedCoupons.splice(indexOfCat, 1) 
      dispatch({ type: 'setSelectedCoupons', payload:currentSelectedCoupons})
      dispatch({ type: 'setWalletColor', payload:"rgba(234, 54, 10, 0.7)"})
      dispatch({ type: 'setShowWallet', payload:true})
      setTimeout(()=> {
        dispatch({ type: 'setShowWallet', payload:false})
    }, 1000);
     

    } else{
      currentSelectedCoupons.push(couponId)
      dispatch({ type: 'setSelectedCoupons', payload:currentSelectedCoupons})
      dispatch({ type: 'setShowWallet', payload:true})
      dispatch({ type: 'setWalletColor', payload:"rgba(7, 150, 237, 0.7)"})
      setTimeout(()=> {
        dispatch({ type: 'setShowWallet', payload:false})
    }, 1000);
    }
   
  }
  return (
      <View style={{marginRight:25}}>
      
          <Image
        source={require('../../assets/coupons/1.png')} 
        style={{width:250, height:130, resizeMode:'stretch', borderRadius:20}}
        />
   <TouchableOpacity onPress={()=>onWalletPress(props.id)} style={{width:40, height:40, top:40, borderRadius:20, right:-15, 
    backgroundColor:'white', justifyContent:'center', position:'absolute', zIndex:10,}}>
<MaterialCommunityIcons name="wallet-plus" 
   style={{ alignSelf:'center', color:"gray"}} size={25} />
   </TouchableOpacity>
   
   <Text style={{fontSize:20, color:'black',width:'70%',
   fontFamily:'Pacifico_400Regular', position:'absolute', top:20, left:30}}> 
   10% Off</Text>

   <Text style={{fontSize:14, color:'black',width:'70%',
   fontFamily:'Kalam_400Regular', position:'absolute', top:60, left:30}}> 
   Buy 3 get 1 free</Text>
   <View style={{bottom:0,  position:'absolute', width:'100%', height:50}}>
   <CountDown
        size={30}
        until={props.until}
        onFinish={() => showAlert('You just missed a Coupon')}
        digitStyle={{backgroundColor: '#FFF', height:40,  borderColor: '#1CC625'}}
     
        timeLabelStyle={{color: 'red', height:20,  fontWeight: 'bold'}}
       
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
   </View>
      </View>
    
  );
}

componentName.propTypes = {

}
