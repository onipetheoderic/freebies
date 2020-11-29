
import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AuthButton from '../components/AuthButton'
import FormField from '../components/FormFields/FormField';
 
export default function Login(props) {
    return (
        <View style={styles.container}>
            <View style={styles.logoParent}>
               <Text style={styles.logoText}>Freebies</Text>
            </View>
            <LinearGradient  colors={['#ffe100', '#ffbf00']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.formParent}>
                <FormField marginVertical={10} placeholder="mail@gmail.com" secure={false} icon="user"/>
                <FormField marginVertical={10} placeholder="password" secure={true} icon="lock"/>
                <AuthButton title="SIGN IN" marginVertical={30}/>
                <View style={styles.signupCont}>
                <Text style={styles.signUpText}>Dont have an Account? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Register')}>
                <Text style={styles.signUpText2}>Sign Up here </Text>
                </TouchableOpacity>
               
                </View>
                <View style={styles.signupCont2}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('ForgotPassword')}>
                <Text style={styles.signUpText2}>Forgot Password</Text>
                </TouchableOpacity>
                </View>
               
            </LinearGradient>
        </View>
      );
}


const styles = StyleSheet.create({
    signupCont: {
        flexDirection:'row',
        justifyContent:'center'
    },
    signupCont2: {
        marginTop:15,
        flexDirection:'row',
        justifyContent:'center'
    },
    signUpText2: {
        fontFamily:'Montserrat_600SemiBold',
        fontSize:13,
        color: 'black',
    },
    signUpText: {
        fontFamily:'Montserrat_400Regular',
        fontSize:13,
        color: 'black',
    },
    logoText: {
        fontSize:40,
        fontFamily:'Pacifico_400Regular',
        color:'#cf1641',
        alignSelf:'center'
    },  
    logoParent: {
        flex: 1,
        backgroundColor:'white',
        justifyContent:'center',
    },
    formParent: {
        flex: 2,
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'yellow',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    container: {
      flex: 1,
    backgroundColor:'white'
    },
   
  });