import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { SecurityIcon } from '../../../assets/svg';
import { useLoginHook } from './login.hooks';
import styles from './login.styles';

const EYE_INVISIBLE = require('../../../assets/eye-invisible.png');
const EYE_VISIBLE = require('../../../assets/eye-visible.png');

const Login = () => {
  const [isVissible, setIsVissible] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [emaillFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const navigation = useNavigation();

  const passwordVisibility = () => {
    setIsVissible(!isVissible);
    setSecureTextEntry(!secureTextEntry);
  };

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

  const signInPress = () => {
    setIsSignedIn(true);
    checkSignIn();
    navigation.navigate('Explore');
  };

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
        <Text>Sign in to your account</Text>
        <SecurityIcon />
      </View>
      <View style={styles.component}>
        <View
          style={[
            styles.textInputContainer,
            {borderColor: emaillFocused ? '#3d73dd' : '#d2d2d2'},
          ]}>
          <TextInput
            placeholder="Email*"
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
              {isVissible ? (
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