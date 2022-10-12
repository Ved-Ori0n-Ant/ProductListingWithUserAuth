import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

interface storageType {
  emailStorage: string;
  passStorage: string;
}

const emaillPattern =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

export function useRegisterHook() {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [passwordChecking, setPasswordChecking] = useState<string>('');
  const [passwordCheckingError, setPasswordCheckingError] =
    useState<string>('');

  const [isRegistered, setIsRegistered] = useState(false);

  const [isValidate, setIsValidate] = useState(false);
  const [isValidationOn, setIsValidationOn] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (
      isValidationOn &&
      emailError === '' &&
      passwordError === '' &&
      passwordCheckingError === ''
    ) {
      setIsValidate(true);
    }
  }, [isValidationOn, emailError, passwordError, passwordCheckingError]);

  const storeData = async () => {
    try {
      const storage: storageType = {emailStorage: email, passStorage: password};
      console.log(storage);
      const jsonValue = JSON.stringify(storage);
      await AsyncStorage.setItem('user_data', jsonValue);
      Alert.alert('Validate Sucess', '', [
        // {
        //   text: 'OK',
        //   onPress: () => {
        //     navigation.navigate('Login');
        //   },
        // },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const checkEmail = (value: string, fromRegister: boolean = false) => {
    if (isRegistered || fromRegister) {
      switch (true) {
        case value.length === 0:
          setEmailError('This field is mandotory..!');
          break;

        case !emaillPattern.test(value):
          setEmailError('Enter proper email id..!');
          break;

        default:
          setEmailError('');
          break;
      }
    }
  };

  const checkPassword = (value: string, fromRegister: boolean = false) => {
    if (isRegistered || fromRegister) {
      switch (true) {
        case value.length === 0:
          setPasswordError('Field is mandotory..!');
          break;

        case value.length < 8 || value.length > 20:
          setPasswordError('Password should be of 8 to 20 character');
          break;

        default:
          setPasswordError('');
          break;
      }
    }
  };

  const checkReEnterPassword = (
    value: string,
    fromRegister: boolean = false,
  ) => {
    if (isRegistered || fromRegister) {
      switch (true) {
        case value.length === 0:
          setPasswordCheckingError('Field is mandotory..!');
          break;

        case !(value === password):
          setPasswordCheckingError('Password Does not match');
          break;

        default:
          setPasswordCheckingError('');
          break;
      }
    }
  };

  const checkRegister = () => {
    checkEmail(email, true);
    checkPassword(password, true);
    checkReEnterPassword(passwordChecking, true);
    setIsValidationOn(true);

    if (isValidate) {
      storeData();
      setEmail('');
      setPassword('');
      setPasswordChecking('');
      setIsRegistered(false);
      setIsValidationOn(false);
      setIsValidate(false);
    }
  };

  return {
    useRegisterHook,
    isValidate,
    setIsRegistered,
    email,
    setEmail,
    emailError,
    setEmailError,
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
  };
}