import * as React from 'react';
import { useEffect } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

const IMAGE = require('../../assets/profile.png')

interface Navgation {
    navigate(destination: string): void;
}

let valid = false;

const RootScreen = ({navigation}: {navigation: Navgation}, route: any) => {
    // React.useEffect(() => {
    //     if(route.params?.valid){
    //         valid = true;
    //     }
    // }, [route.params?.valid])
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress = {() => navigation.navigate('Landing Screen')}
                // {() => {
                //     if (valid === true){
                //         navigation.navigate('Explore')
                //     } else {
                //         navigation.navigate('Landing Screen')
                //     }
                // }}
            >
                <Image source={IMAGE} />
            </TouchableOpacity>
        </View>
    );
}

export default RootScreen;