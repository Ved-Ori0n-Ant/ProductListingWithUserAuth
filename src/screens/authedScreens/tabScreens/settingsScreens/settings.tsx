import React from 'react';
import {FlatList, TouchableOpacity, Text, StyleSheet, Button, Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Navigation {
  navigate(destination: string): void;
}

const SettingScreen = ({navigation}: {navigation: Navigation}) => {

  const removeData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(error);
    }
  }

  const logOutPressed = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'No',
          onPress: () => console.log('No button pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('Landing Screen', {screen: 'Login'});
            removeData();
          },
        }
      ]
    )
  }

  return (
    <View style = {{backgroundColor: '#c0c0c0', flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
      <FlatList
        data={['About Page', 'Privacy Policy']}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Contact devs',{screen: item});
            }}
            style={styles.container}>
            <Text style = {{fontSize: 14, margin: 7}}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title='Log out' onPress={() => {
        //navigation.navigate('Landing Screen');
        //removeData();
        logOutPressed();
      }}/>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 16,
    borderColor: 'black',
    borderBottomWidth: 3,
  },
});