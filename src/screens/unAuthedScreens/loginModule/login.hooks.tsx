import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

interface storageType {
  emailStorage: string;
  passStorage: string;
}

const emaillPattern =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

export function useLoginHook() {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [isValidate, setIsValidate] = useState(false);
  const [isValidationOn, setIsValidationOn] = useState(false);

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [forIsValidate, setForIsValidate] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (forIsValidate) {
      setIsValidate(true);
    }
  }, [forIsValidate, setForIsValidate]);

  const getData = async () => {
    try {
      const temp = await AsyncStorage.getItem('user_data');
      const storage: storageType = temp !== null ? JSON.parse(temp) : null;
      console.log(storage);
      if (email === storage.emailStorage && password === storage.passStorage) {
        navigation.navigate('Explore')
      } else {
        Alert.alert('Incorrect ID or Password');
        navigation.navigate('Register');
      }
      return storage;
    } catch (error) {
      console.log(error);
    }
  };

  const checkEmail = (value: string, fromLogin: boolean = false) => {
    if (isSignedIn || fromLogin) {
      switch (true) {
        case value.length === 0:
          setEmailError('This field is mandotory..!');
          break;

        case !emaillPattern.test(value):
          setEmailError('Enter valid email id..!');
          break;

        default:
          setEmailError('');
          break;
      }
    }
  };

  const checkPassword = (value: string, fromLogin: boolean = false) => {
    if (isSignedIn || fromLogin) {
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

  const checkSignIn = () => {
    checkEmail(email, true);
    checkPassword(password, true);
    getData();
    setIsValidationOn(true);

    if (
      isValidationOn &&
      emailError === '' &&
      passwordError === '' &&
      correct
    ) {
      setForIsValidate(true);
    }

    if (isValidate) {
      Alert.alert('Login done');
      setEmail('');
      setPassword('');
      setPasswordError('');
      setIsSignedIn(false);
      setIsValidationOn(false);
      setCorrect(false);
      setForIsValidate(false);
      setIsValidate(false);
    }
  };

  return {
    useLoginHook,
    isValidate,
    email,
    setEmail,
    emailError,
    setEmailError,
    checkEmail,
    password,
    setPassword,
    passwordError,
    checkPassword,
    checkSignIn,
    setIsSignedIn,
  };
}