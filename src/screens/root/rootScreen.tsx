import * as React from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const IMAGE = require('../../assets/profile.png')

interface Navgation {
    navigate(destination: string): void;
}

let valid = false;

const RootScreen = ({navigation}: {navigation: Navgation}, route: any) => {
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#c0c0c0c0'}}>
            <TouchableOpacity style = {styles.logo} onPress = {() => navigation.navigate('Landing Screen')}>
                <Image source={IMAGE} />
            </TouchableOpacity>
                <Text style = {styles.name}>Practical 3 : The App!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        borderBottomColor: 'black',
        borderBottomWidth: 1.5,
        padding: 9,
        margin: 45,
    },
    name: {
        color: '#363fdf',
        fontSize: 18,
        padding: 7,
    }
});

export default RootScreen;