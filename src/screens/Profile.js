
import React, { useEffect, useState, useContext } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { StyleSheet, ScrollView, AsyncStorage, Image, View, StatusBar, TouchableOpacity,
    Dimensions,ImageBackground, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import { ImageBrowser } from 'expo-image-picker-multiple';
import { LinearGradient } from 'expo-linear-gradient';
import AuthButton from '../components/AuthButton'
import FormField from '../components/FormFields/FormField';
import TextWithEditable from '../components/TextWithEditable';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import {Toast} from 'native-base';
import { CounterContext } from "../../store";

export default function UserProfile(props) {
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState("https://3phaseadvisors.com/wp-content/uploads/2017/07/placeholder-person-380x380-300x300.jpg");
    const [isLoading, setLoading] = useState(false);
    const [values, changeValue] = useState({
        firstName:"", 
        lastName:"", 
        email:"", 
        confirm_password: "",
        current_password: "",
        new_password:""})
    
        useEffect(() => {
            (async () => {
              if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                  alert('Sorry, we need camera roll permissions to make this work!');
                }
              }
            })();
          }, []);
    const [editAll, changeEditAll] = useState(false)
    
    
    const globalState = useContext(CounterContext);
    const {state, dispatch } = globalState;  
        
   

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    
    
    const handleChange = (textValue, name) => {
        changeValue({...values,[name]:textValue})
    }

    const saveProfile = () => {
     
        Toast.show({
            text: "Profile Edited Successfully",
            textStyle: { color: "yellow" },
            duration: 4000
          })
          props.navigation.goBack()
    }

 

    return (
        <View style={styles.container}>
            
            <View style={styles.imagePortion}>
                <Image style={styles.image} source={{uri:image}} />
                {/* <ImageBrowser
  max={4}
  onChange={(callback) => {
    
  }}
  callback={(num, onSubmit) => {
 
  }}
/> */}
                <TouchableOpacity onPress={()=>pickImage()} style={styles.iconContainer}>
                        <Entypo name='edit' style={styles.iconStyle} size={13} />
                    </TouchableOpacity> 
            </View>
           <Text style={{fontSize:10, color:'red'}}>{errors}</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.formPortion}>
                <View style={{marginBottom:45}}>
                    <TextWithEditable 
                    placeHolderText="First Name"
                    value = {values.firstName}
                    defaultEditablity = {editAll}
                    onChangeText={text => handleChange(text, "firstName")}
                    onFocusedColor="black"
                    iconName="user-alt"
                    onBlurColor="#887474"
                    showEditable={true}
                    withIcon={false}
                    />
  
                
                    <TextWithEditable 
                    placeHolderText="Last Name"
                    defaultEditablity = {editAll}
                    value = {values.lastName}
                    onChangeText={text => handleChange(text, "lastName")}
                    onFocusedColor="black"
                    iconName="user-alt"
                    onBlurColor="#887474"
                    withIcon={true}
                    showEditable={true}
                    />
                        <View pointerEvents="none">
                        <TextWithEditable 
                            placeHolderText="Email address"
                            defaultEditablity = {false}
                            value = {values.email}
                        
                            onFocusedColor="black"
                            iconName="user-alt"
                            onBlurColor="#887474"
                            withIcon={true}
                        />
                        </View>
                   
                    <TextWithEditable 
                    showEditable={true}
                    defaultEditablity = {editAll}
                    placeHolderText="current password"
                    value = {values.password}
                    secureTextEntry={true}
                    onChangeText={text => handleChange(text, "current_password")}
                    onFocusedColor="black"
                    iconName="user-alt"
                    onBlurColor="#887474"
                    withIcon={false}
                    />
                    <TextWithEditable 
                    showEditable={true}
                    defaultEditablity = {editAll}
                    placeHolderText="new Password"
                    value = {values.password}
                    secureTextEntry={true}
                    onChangeText={text => handleChange(text, "new_password")}
                    onFocusedColor="black"
                    iconName="user-alt"
                    onBlurColor="#887474"
                    withIcon={false}
                    />
                    <TextWithEditable 
                    showEditable={true}
                    defaultEditablity = {editAll}
                    placeHolderText="confirm Password"
                    value = {values.password}
                    secureTextEntry={true}
                    onChangeText={text => handleChange(text, "confirm_password")}
                    onFocusedColor="black"
                    iconName="user-alt"
                    onBlurColor="#887474"
                    withIcon={false}
                    />
                  
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=>saveProfile()} style={styles.buttonSingle}>
                    <Text style={styles.btnText}>update</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.goBack()} style={styles.buttonSingle}>
                    <Text style={styles.btnText}>cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color:'white',
        fontWeight:'bold'
    },
    buttonSingle: {
        width:'48%',
        height:50,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonContainer: {
        width:'100%',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    iconContainer: {
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'black',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        bottom:-10,
        right:20,
        borderWidth:1,
        borderColor:'white'
    },
    iconStyle: {
        alignSelf:'center',
        color:'white'
    },
    image: {
        flex:1,
        resizeMode:'stretch'
    },
    imagePortion: {
        flex:1,
    },
    formPortion: {
        flex:2.2,
        alignSelf:'center',
        width:'80%',
        marginBottom:20
    }
  });