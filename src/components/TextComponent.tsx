import React from 'react';
import {
  View,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from 'react-native';

type TextComponentProps = {
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const TextComponent = (props: TextComponentProps) => {
  const {text, textStyle, style} = props;
  return (
    <View style={[styles.Container, style]}>
      <Text style={[styles.font, textStyle]}>{text || 'hello'}</Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Container: {
    padding: 7,
    margin: 15,
  },
});