import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/authedScreens/tabScreens/homeScreen";
import ProfileScreen from "../screens/authedScreens/tabScreens/profileScreen";
import SettingScreen from "../screens/authedScreens/tabScreens/settingsScreens/settings";
import { Image } from "react-native";
import NavDrawerScreen from "./drawerNav";

const HOME = require('../assets/home.png');
const SETTING = require('../assets/setting.png');
const PROFILE = require('../assets/profile.png');

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarInactiveBackgroundColor: '#0faaba9b', tabBarActiveBackgroundColor: '#00aabaaa'}}>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{tabBarIcon: () => <Image source={HOME} style = {{height: 14, width: 14}} />}}
        />
        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{tabBarIcon: () => <Image source={PROFILE} style = {{height: 14, width: 14}} />}}
        />
        <Tab.Screen 
            name="Settings" 
            component={SettingScreen} 
            options={{tabBarIcon: () => <Image source={SETTING} style = {{height: 14, width: 14}} />}}
        />
      </Tab.Navigator>
    );
}

export default TabNav;