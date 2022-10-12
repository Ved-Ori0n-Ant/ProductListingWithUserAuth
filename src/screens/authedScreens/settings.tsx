import React from 'react';
import {FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Navigation {
  navigate(destination: string): void;
}

const SettingScreen = ({navigation}: {navigation: Navigation}) => {
  return (
    <FlatList
      data={['Privacy Policy', 'About Page']}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(item);
          }}
          style={styles.container}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
    />
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