import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/unAuthedScreens/loginModule/loginScreen';
import Register from '../screens/unAuthedScreens/registerModule/registerScreen';
import ForgetPassword from '../screens/unAuthedScreens/forgetPasswordModule/forgetPassword';

const Stack = createNativeStackNavigator();

const NavUnAuthScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot password" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default NavUnAuthScreens;