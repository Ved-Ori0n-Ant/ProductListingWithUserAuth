import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const emaillPattern =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

export function useForgetPassHook() {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [isClicked, setIsClicked] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [isValidationOn, setIsValidationOn] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (isValidationOn && emailError === '') {
      setIsValidate(true);
    }
  }, [emailError, isValidationOn]);

  const checkEmail = (value: string, fromButton: boolean = false) => {
    if (isClicked || fromButton) {
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

  const checkButton = () => {
    checkEmail(email, true);
    setIsValidationOn(true);
    if (isValidate) {
      Alert.alert('Validate Sucess', '', [
        {
          text: 'OK',
          onPress: () => {
            //navigation.navigate('Login');
          },
        },
      ]);
    }
  };

  return {
    useForgetPassHook,
    checkButton,
    checkEmail,
    email,
    emailError,
    setEmail,
    setIsClicked,
  };
}