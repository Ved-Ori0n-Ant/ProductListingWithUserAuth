import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

type FlatListprops = {
  data: {imgUrl?: string; name?: string; price?: number}[];
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (event?: GestureResponderEvent) => void;
  numberColumns?: number;
  scrollEnable?: boolean;
};

const FlatListComponent = (props: FlatListprops) => {
  const {data, style, textStyle, onPress, numberColumns, scrollEnable} = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={onPress} style={[styles.flatlist, style]}>
            <View>
              <>
                <Image source={{uri: item.imgUrl}} style={styles.image} />
              </>
              <View style={{flexDirection: 'column'}}>
                <Text style={[styles.text, textStyle]}>{item.name}</Text>
                <Text style={[styles.text, textStyle]}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        numColumns={numberColumns}
        scrollEnabled={scrollEnable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  flatlist: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  text: {
    fontSize: 17,
  },
  image: {
    height: 60,
    width: 60,
  },
});

export default FlatListComponent;