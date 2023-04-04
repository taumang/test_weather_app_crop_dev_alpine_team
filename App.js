// different tools being imported into the project(Ignore for now)
import React, {useEffect, useLayoutEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Image, TextInput, Button, Alert } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {createStackNavigation} from '@react-navigation/stack';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {

  //Two states which are added for the password and email inputs from the user.(LOGIN)
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  // added conditional to the login button 
  handle_Login = () => {

      if (email === 'something@company.com' && password === 'pass012'){
      alert('Logged In')
      }else {
      alert('Invalid email or password')
      }
    }
  //

  return (
    <View style={styles.container}>

      {/* Image or logo being added here */}
      
      <Image 
      source = {require('./img/crop_logo.png')}
      style = {styles.image}
      />

      {/* Default text which comes with the react native installation package */}
      
      <Text>something for now</Text>

    {/* Input for the users email address */}
    
    <View style={styles.inputView}>
      <TextInput 
      style={styles.TextInput1}
      placeholder='Email'
      placeholderTextColor='black'
      onChangeText={setEmail}/>
    </View>
    
    {/* Input for the users password */}
    
    <View style={styles.inputView}>
      <TextInput 
      style={styles.TextInput2}
      placeholder='Password'
      placeholderTextColor='black'
      secureTextEntry={true}// Allows the user's text to be hidden 
      onChangeText={setPassword}/>
    </View>

    {/* Adding a forgot password link/button */}
    <View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password</Text>
      </TouchableOpacity>
      
      <Button
      title='Login_button'
      onPress={handle_Login} // should render the text from login and password.
      
      style={styles.login_Button}
      >
        <TouchableOpacity >
          <Text style={styles.login_Text}>Login</Text>
        </TouchableOpacity>
      </Button>


      
    </View>
      <TouchableOpacity>
        <Text style={styles.sign_up_link_text}>not a member? sign up here</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />


    </View>
  );
}
//
//
//
//
//This is the CSS of this whole project!!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    marginBottom:250,
    // marginTop:120,
  },
  inputView: {
    backgroundColor:'grey',
    borderRadius: 12,
    width:'70%',
    height: 45,
    marginBottom:20,
    alignItems:'center'
  },
  TextInput1:{
    height:50,
    flex:1,
    padding:10,
    marginLeft:0,
  },
  TextInput2:{
    height:50,
    flex:1,
    padding:10,
    marginRight:1,
  },
  forgot_button:{
    height:30,
    marginBottom:20,
  },
  sign_up_link_text:{

  },
  login_Button:{
    width:'80%',
    borderRadius: 12,
    height:50,
    alignItems:'center',
    justifyContent:'center',
     marginBottom: 10,
    backgroundColor:'#609966'
  }
});
