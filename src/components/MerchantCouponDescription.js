import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';

const window = Dimensions.get('window');
    const { width, height }  = window
export default function MerchantCouponDescription(props) {
    const [current, changeCurrent] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [directionOption, showDirectionOption] = useState(false);
    const {height} = props;
    const borderRadius = height/2;
    const currentIcon = current === true ? props.iconName : props.toIcon; 
    
    const globalState = useContext(CounterContext);
    const {state, dispatch } = globalState;  


    const showMe = () => {
        dispatch({ type: 'setShowDescriptionBox', payload:false})
    }
    const carouselItemWidth = parseInt(width)*90/100
   
      
      let imageList = [
          {link:"https://image.freepik.com/free-psd/hamburger-banner-with-delicious-fast-food-burgers_23-2148421441.jpg"},
          {link:"https://image.freepik.com/free-photo/side-view-french-fries-with-seasoning_141793-4899.jpg"},
          {link:"https://image.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg"},
          {link:"https://image.freepik.com/free-photo/fried-spicy-chicken-wings_1339-42043.jpg"}
      ]

      const _renderItem = ({item,index}) =>{
        return (
           
             
          <Image source={{uri: item.link}} 
        style={{ alignSelf:'center',width:'100%', height:'100%',
        
        justifyContent:'center', resizeMode:'contain'}} />
           

        )
    }
    return (
        <Animatable.View animation="fadeIn" duration={500} 
        style={{position:'absolute', alignItems:'center', width: '100%', height:'100%', zIndex:10,
        backgroundColor:'rgba(0,0,0,0.7)', }}>
            <View style={{marginTop:'20%'}} />
            <TouchableOpacity onPress={()=>showMe()}>
            <AntDesign name="close" size={40} style={styles.iconz}/>
            </TouchableOpacity>
         
            <Animatable.Text animation="pulse" 
            style={{ fontFamily:'Montserrat_600SemiBold',
            position:'absolute', top:'10%', color:'yellow'}}>Swipe Left</Animatable.Text>
          
           <Animatable.View animation="bounceInUp" duration={1000} 
            style={{width:'90%', height:350, borderRadius:10}}>
                 <View 
            style={{flex:3,borderTopRightRadius:10, borderTopLeftRadius:10}}>
              <Carousel
                  layout={"tinder"}
                  data={imageList}
                  sliderWidth={carouselItemWidth}
                  itemWidth={carouselItemWidth}
                  renderItem={_renderItem}
                  onSnapToItem = { index => setActiveIndex(index) } 
            />
            </View>             

                
            
              
                <View style={styles.bottomCont}>
                <View>
                    <TouchableOpacity style={styles.eachCircle}>
                        <Feather name="phone-call" style={{color:'black', alignSelf:'center'}} size={20} />
                    </TouchableOpacity>
                   
                </View>
                
                <View>
                    <TouchableOpacity style={styles.eachCircle}>
                        <Feather name="map-pin" style={{color:'black', alignSelf:'center'}} size={20} />
                    </TouchableOpacity>
                </View>

                <View style={{marginLeft:5}}>
                    <TouchableOpacity style={styles.eachCircle}>
                        <Feather name="globe" style={{color:'black', alignSelf:'center'}} size={20} />
                    </TouchableOpacity>
                </View>

                <View style={{marginLeft:5}}>
                    <TouchableOpacity style={styles.eachCircle}>
                        <Feather name="mail" style={{color:'black', alignSelf:'center'}} size={20} />
                    </TouchableOpacity>
                </View>
                
              
                  
                   
                </View>
            </Animatable.View>
           
        </Animatable.View>
     
  );
}

MerchantCouponDescription.propTypes = {
    // height: PropTypes.number.isRequired,
    // width: PropTypes.number.isRequired,
    // top: PropTypes.number.isRequired,
    // right: PropTypes.number.isRequired,
}


const styles = StyleSheet.create({
   
    bottomCont: {
        flex:1, flexDirection:'row', 
        justifyContent:'space-between', 
        backgroundColor:'white',  
        borderBottomEndRadius:10, 
        borderBottomStartRadius:10
    },
    icons: {
        color: '#0478BF'
    },
    iconz: {
        color: '#4df1a4',
        marginBottom:10
    },
    eachCircle: {
        width:60,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        height:60,
        borderRadius:35,
        backgroundColor:'white',
        zIndex:70,
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
        fontSize:15
    },
    redeemButton: {
        width:'40%',
        height:60,
        backgroundColor: 'red',
        marginTop:10,
        marginLeft:10,
        justifyContent:'center',
        borderRadius:9,
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