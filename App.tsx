import * as React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavUnAuthScreens from './src/routes/stackNavUnAuthScreens';
import TabNav from './src/routes/tabNavAuthedScreens';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import NavDrawerScreen from './src/routes/drawerNav';
import RootScreen from './src/screens/root/rootScreen';
import SettingScreenNavigation from './src/routes/stackNavSettingScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Root Screen' component={RootScreen} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Landing Screen' component={NavUnAuthScreens} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Explore' component={TabNav} />
        <Stack.Screen name = 'Products' component={NavDrawerScreen} />
        <Stack.Screen name = 'Contact devs' component={SettingScreenNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;