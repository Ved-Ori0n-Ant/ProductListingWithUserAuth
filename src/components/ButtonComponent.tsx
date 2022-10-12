import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ButtonComponentProps = {
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const ButtonComponent = (props: ButtonComponentProps) => {
  const {text, style, textStyle, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={[styles.buttonText, textStyle]}>{text || 'press me'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0000ffc0',
    margin: 15,
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 3,
    borderRadius: 15,
  },
});

export default ButtonComponent;