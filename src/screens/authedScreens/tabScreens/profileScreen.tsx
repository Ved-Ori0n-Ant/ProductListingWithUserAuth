import React, {useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import RadioButtonComponent from "../../../components/RadioButtonComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {

    // let cred: string, setCred;
    const [cred, setCred] = useState('');

    var temp: string;
    
    const fName = 'Vedant';
    const lName = 'Joshi';
    const about = 'Practical 3';

    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        try {
            AsyncStorage.getItem('user_data')
                .then(value => {
                    if (value != null) {
                        temp = value.toString();
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const show = () => {
        setCred(temp)
    }

    const hide = () => {
        setCred('')
    }

    return(
        <View style = {styles.mainContainer}>
            <Text style = {{fontSize: 45, alignSelf: 'center'}}>Dummy data</Text>
            <Text style = {styles.data} >Email: {fName}</Text>
            <Text style = {styles.data}>Password: {lName}</Text>
            <RadioButtonComponent data={['Male', 'Female', 'Other']} onClickRadio = {() => {}} />
            <Pressable onLongPress={() => {show()}} onPress = {() => {hide()}}>
                <Image 
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                    style = {styles.image}
                />
            </Pressable>
            <Text style = {styles.data}>About info: {about}</Text>
            <Text style = {styles.data}>{cred}</Text>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#c0c0c0c0',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 25,
        alignSelf: 'center',
    },
    data: {
        fontSize: 18,
        borderBottomColor: '#00aabaaa',
        borderBottomWidth: 1.5,
    }
}); 