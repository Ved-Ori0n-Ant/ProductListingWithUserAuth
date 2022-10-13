import React, {useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import RadioButtonComponent from "../../../components/RadioButtonComponent";

const ProfileScreen = () => {
    
    const fName = 'Vedant';
    const lName = 'Joshi';
    const about = 'Practical 3';

    return(
        <View style = {styles.mainContainer}>
            <Text style = {{fontSize: 45, alignSelf: 'center'}}>Dummy data</Text>
            <Text>Email: {fName}</Text>
            <Text>Password: {lName}</Text>
            <RadioButtonComponent data={['Male', 'Female', 'Other']} onClickRadio = {() => {}} />
            <Image 
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style = {styles.image}
            />
            <Text>About info: {about}</Text>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 25,
        alignSelf: 'center',
    },
}); 