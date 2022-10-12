import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useForgetPassHook} from './forgetPassword.hooks';

const ForgetPassword = () => {
  const customHook = useForgetPassHook();

  const {checkButton, checkEmail, email, emailError, setEmail, setIsClicked} =
    customHook;

  const [emaillFocused, setEmailFocused] = useState(false);

  const buttonPress = () => {
    setIsClicked(true);
    checkButton();
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
        <TouchableOpacity onPress={buttonPress} style={styles.button}>
          <Text style={styles.buttonText}>Forget Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  component: {
    marginVertical: 5,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  button: {
    backgroundColor: '#3d73dd',
    borderRadius: 8,
  },
  textInputContainer: {
    flexDirection: 'row',
    borderColor: 'blue',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    marginVertical: 7,
    color: 'white',
  },
});