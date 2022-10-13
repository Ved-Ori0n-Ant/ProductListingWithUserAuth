import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNav from "./tabNavAuthedScreens";
import Cart from "../screens/authedScreens/drawerScreens/cart/cartScreen";
import Order from "../screens/authedScreens/drawerScreens/order/order";
import Products from "../screens/authedScreens/drawerScreens/productsScreen";

const Drawer = createDrawerNavigator();

const NavDrawerScreen = () => {
    return (
      <Drawer.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Drawer.Screen name="Dash board" component={TabNav} />  
        <Drawer.Screen name="Explore" component={Products} />  
        <Drawer.Screen name="Your orders" component={Order} />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    );
}

export default NavDrawerScreen;