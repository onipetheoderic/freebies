import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View,Image, TouchableOpacity, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import { CounterContext } from "../../store";
import getDirections from 'react-native-google-maps-directions';
import {zoomIn, fadeIn} from '../animations/animations'
import * as Animatable from 'react-native-animatable';

const window = Dimensions.get('window');
    const { width, height }  = window
export default function CouponDetails(props) {
    const [current, changeCurrent] = useState(true);
    const [directionOption, showDirectionOption] = useState(false);
    const {height, width, top, right, left, iconName} = props;
    const borderRadius = height/2;
    const currentIcon = current === true ? props.iconName : props.toIcon; 
    
    const globalState = useContext(CounterContext);
    const {state, dispatch } = globalState;  


    const showMe = () => {
        dispatch({ type: 'setShowDescriptionBox', payload:false})
    }
    console.log(state.currentCouponDetails,"GGG")
    return (
        <Animatable.View animation="fadeIn" duration={500} 
        style={{position:'absolute', alignItems:'center', width: '100%', height:'100%', zIndex:10,
        backgroundColor:'rgba(0,0,0,0.7)', justifyContent:'center' }}>
            <TouchableOpacity onPress={()=>showMe()}>
            <AntDesign name="close" size={40} style={styles.iconz}/>
            </TouchableOpacity>
        
            <Animatable.View animation="bounceInUp" 
            duration={1000} style={{width:'90%', height:'50%', 
            borderRadius:10, alignSelf:'center'}}>
                <View 
                style={{flex:4, backgroundColor:'black', borderTopRightRadius:10, borderTopLeftRadius:10}}>
                    <Text style={{alignSelf:'center', marginTop:10, fontSize:17, 
                    color:'white',fontFamily:'Montserrat_600SemiBold', fontWeight:'bold'}}>{state.currentCouponDetails.merchant_name}</Text>
                     <Text style={{alignSelf:'center',fontFamily:'Montserrat_600SemiBold',color:'yellow', fontSize:12, 
                    textTransform:'uppercase'}}>{state.currentCouponDetails.coupon_description}</Text>

<Image source={{uri: props.image}} 
            style={{ alignSelf:'center',width:'100%', height:'100%', marginTop:-20,
            
            justifyContent:'center', resizeMode:'contain'}} />
                
                </View>
                
               
              
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', backgroundColor:'white',  
                borderBottomEndRadius:10, borderBottomStartRadius:10}}>
                    
                    <LinearGradient  colors={['#4df1a4', 'black']} 
                    style={styles.redeemButton}>
                    <Text style={styles.redeemText}>All Merchant Offers</Text>
                    </LinearGradient>
                    <LinearGradient colors={['#4df1a4', 'black']} 
                    style={styles.redeemButton}>
                        <TouchableOpacity style={{
                             height:'100%', alignItems:'center', justifyContent:'center'}}
                              onPress={()=>showDirectionOption(!directionOption)} >
                        <Text onPress={()=>showDirectionOption(!directionOption)} style={styles.redeemText}>Add to Wallet</Text>
                        </TouchableOpacity>
                        
                    </LinearGradient>
                   
                </View>
            </Animatable.View>
           
        </Animatable.View>
     
  );
}



const styles = StyleSheet.create({
    icons: {
        color: '#0478BF'
    },
    iconz: {
        color: '#4df1a4',
        marginBottom:10
    },
    eachCircle: {
        width:50,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        borderRadius:25,
        backgroundColor:'white',
        position:'absolute',
        zIndex:50,
        elevation:15,
        top:5,
    },
    eachCircle2: {
        justifyContent:'center',
        alignItems:'center',
        width:50,
        elevation:15,
        height:50,
        borderRadius:25,
        backgroundColor:'white',
        position:'absolute',
        zIndex:50,
      
        left:30,
        top:60,
    },
    eachCircle4: {
        width:50,
        elevation:15,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        borderRadius:25,
        backgroundColor:'white',
        position:'absolute',
        zIndex:50,
        
        left:-30,
        top:60,
    },
    eachCircle3: {
        width:50,
        justifyContent:'center',
        alignItems:'center',
        elevation:15,
        height:50,
        borderRadius:25,
        backgroundColor:'white',
        position:'absolute',
        zIndex:50,
        
        left:0,
        top:110,
    },
    directions: {
        width:150,
        top:135,
        position:'absolute',
        height:200,
       
        zIndex:50,
        backgroundColor:'transparent',
        right:-50,
       
    },
    redeemText: {
        color:'white',
        alignSelf:'center',
        textAlign:'center',
        fontFamily:'Montserrat_600SemiBold',
        fontSize:10
    },
    redeemButton: {
        width:'40%',
        height:40,
        backgroundColor: 'red',
        marginTop:10,
        marginLeft:10,
        justifyContent:'center',
        borderRadius:3,
    },
    couponStyle: {
        alignSelf:'center',fontFamily:'Montserrat_600SemiBold',fontSize:36, 
        color:'#00c1dc',textTransform:'uppercase'
    },
    internal: {
        width:'92%', 
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8, 
        height:'80%', borderColor:'#00c1dc',borderWidth:1
    },
  coupon: {
    width:'80%', 
    borderRadius:10, 
    position:'absolute', 
    height:100, 
    justifyContent:'center',
    backgroundColor:'white', top:150,zIndex:30, alignSelf:'center',
    

  }
  });