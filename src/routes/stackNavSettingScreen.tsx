import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/authedScreens/settings';
import PrivacyPolicy from '../screens/authedScreens/privacyPolicy';
import AboutPage from '../screens/authedScreens/aboutPage';

const Stack = createNativeStackNavigator();

const SettingScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Stack.Screen name="About Page" component={AboutPage} />
    </Stack.Navigator>
  );
};

export default SettingScreenNavigation;