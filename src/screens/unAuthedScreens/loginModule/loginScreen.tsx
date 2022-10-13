import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { SecurityIcon } from '../../../assets/svg';
import { useLoginHook } from './login.hooks';
import styles from './login.styles';

const EYE_INVISIBLE = require('../../../assets/eye-invisible.png');
const EYE_VISIBLE = require('../../../assets/eye-visible.png');

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [emaillFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const navigation = useNavigation();

  const passwordVisibility = () => {
    setIsVisible(!isVisible);
    setSecureTextEntry(!secureTextEntry);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
        AsyncStorage.getItem('user_data')
            .then(value => {
                if (value != null) {
                    navigation.navigate('Explore');
                }
            })
    } catch (error) {
        console.log(error);
    }
}

  const setData = async () => {
    if(email.length == 0 || password.length == 0){
      Alert.alert('Please enter valid credentials')
    } else {
      try{
        var credentials = {
          Email: email,
          Password: password
        }
        const jsonValue = JSON.stringify(credentials)
        await AsyncStorage.setItem('user_data', jsonValue)
        navigation.navigate('Explore')
        setEmail('');
        setPassword('');
      } catch (e) {
        console.log(e);
      }
    }
  }

  const customHook = useLoginHook();

  const {
    email,
    setEmail,
    emailError,
    checkEmail,
    password,
    setPassword,
    passwordError,
    checkPassword,
    checkSignIn,
    setIsSignedIn,
  } = customHook;

  const signInValidate = () => {
    setIsSignedIn(true);
    checkSignIn();
  };

  const signInPress = () => {
    signInValidate();
    setData();
    navigation.navigate('Explore');
  }

  const SignUp = () => {
    navigation.navigate('Register');
    //Alert.alert('Navigating to the Register screen!!');
  }

  const PassReset = () => {
    navigation.navigate('Forgot password');
    //Alert.alert('Navigating to the Forget Password screen!!');
  }

  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Text>Sign in to your account  </Text>
        <SecurityIcon />
        </View>
      </View>
      <View style={styles.component}>
        <View
          style={[
            styles.textInputContainer,
            {borderColor: emaillFocused ? '#3d73dd' : '#d2d2d2'},
          ]}>
          <TextInput
            style = {{color: 'black'}}
            placeholder="Email*"
            placeholderTextColor={'red'}
            value={email}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            onChangeText={value => {
              setEmail(value);
              checkEmail(value);
            }}
          />
        </View>
        <Text style={styles.errorText}>{emailError}</Text>
      </View>
      <View style={styles.component}>
        <View
          style={[
            styles.textInputContainer,
            {borderColor: passFocused ? '#3d73dd' : '#d2d2d2'},
          ]}>
          <TextInput
            placeholder="Password*"
            style = {{color: 'black'}}
            placeholderTextColor={'red'}
            secureTextEntry={secureTextEntry}
            value={password}
            onFocus={() => setPassFocused(true)}
            onBlur={() => setPassFocused(false)}
            onChangeText={value => {
              setPassword(value);
              checkPassword(value);
            }}
          />

          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={passwordVisibility}
              style={{alignSelf: 'flex-end'}}>
              {isVisible ? (
                <Image source={EYE_VISIBLE} style = {{width: 20, height: 20}} />
              ) : (
                <Image source={EYE_INVISIBLE} style = {{width: 20, height: 20}} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.errorText}>{passwordError}</Text>
      </View>
      <View style={styles.component}>
        <TouchableOpacity onPress={signInPress} style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.component}>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress = {PassReset}>
          <Text style={styles.buttonText}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.component,
          {flexDirection: 'row', justifyContent: 'center'},
        ]}>
        <Text style = {{color: '#6f3c3c', fontWeight: 'bold'}}>Don't Have a Account? </Text>
        <TouchableOpacity onPress={SignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;