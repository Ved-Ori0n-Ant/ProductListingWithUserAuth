import React from 'react';
import {FlatList, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
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

  return (
    <>
      <FlatList
        data={['About Page', 'Privacy Policy']}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Contact devs',{screen: item});
            }}
            style={styles.container}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title='Log out' onPress={() => {
        navigation.navigate('Root Screen');
        removeData();
      }}/>
    </>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 16,
    borderColor: 'black',
  },
});