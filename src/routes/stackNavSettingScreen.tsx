import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/authedScreens/tabScreens/settingsScreens/settings';
import PrivacyPolicy from '../screens/authedScreens/tabScreens/settingsScreens/privacyPolicy';
import AboutPage from '../screens/authedScreens/tabScreens/settingsScreens/aboutPage';

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