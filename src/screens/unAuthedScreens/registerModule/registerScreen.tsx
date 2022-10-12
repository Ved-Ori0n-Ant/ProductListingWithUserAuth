import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useRegisterHook} from './register.hooks';
import styles from './register.style';

const EYE_INVISIBLE = require('../../../assets/eye-invisible.png');
const EYE_VISIBLE = require('../../../assets/eye-visible.png');

const Register = () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [isVissible, setIsVissible] = useState(false);
    const [secureTextEntryReconfirmation, setSecureTextEntryReconfirmation] = useState(true);
    const [isVissibleReconfirmation, setIsVissibleReconfirmation] = useState(false);
    const [emaillFocused, setEmailFocused] = useState(false);
    const [passFocused, setPassFocused] = useState(false);
    const [passCheckingFocused, setPassCheckingFocused] = useState(false);
  
    const passwordVisibility = () => {
      setIsVissible(!isVissible);
      setSecureTextEntry(!secureTextEntry);
    };
  
    const passwordVisibilityReconfirmation = () => {
      setIsVissibleReconfirmation(!isVissibleReconfirmation);
      setSecureTextEntryReconfirmation(!secureTextEntryReconfirmation);
    };

    const customHook = useRegisterHook();

  const {
    setIsRegistered,
    email,
    setEmail,
    emailError,
    checkEmail,
    password,
    setPassword,
    passwordError,
    checkPassword,
    passwordChecking,
    setPasswordChecking,
    passwordCheckingError,
    checkReEnterPassword,
    checkRegister,
  } = customHook;

  const registerPress = () => {
    setIsRegistered(true);
    checkRegister();
  };

  return (
    <View style={styles.container}>
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
                <Image source={EYE_INVISIBLE} style = {{width: 20, height: 20}} />
              ) : (
                <Image source={EYE_VISIBLE} style = {{width: 20, height: 20}} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.errorText}>{passwordError}</Text>
      </View>
      <View style={styles.component}>
        <View
          style={[
            styles.textInputContainer,
            {borderColor: passCheckingFocused ? '#3d73dd' : '#d2d2d2'},
          ]}>
          <TextInput
            placeholder="RE-Enter Password*"
            secureTextEntry={secureTextEntryReconfirmation}
            value={passwordChecking}
            onFocus={() => setPassCheckingFocused(true)}
            onBlur={() => setPassCheckingFocused(false)}
            onChangeText={value => {
              setPasswordChecking(value);
              checkReEnterPassword(value);
            }}
          />
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={passwordVisibilityReconfirmation}
              style={{alignSelf: 'flex-end'}}>
              {isVissibleReconfirmation ? (
                <Image source={EYE_INVISIBLE} style = {{width: 20, height: 20}} />
              ) : (
                <Image source={EYE_VISIBLE} style = {{width: 20, height: 20}} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.errorText}>{passwordCheckingError}</Text>
      </View>
      <View style={styles.component}>
        <TouchableOpacity onPress={registerPress} style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}  

export default Register;