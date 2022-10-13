import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform, Image, Button, } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-gesture-handler';
import FlatListComponent from '../../../components/FlatListComponent';

const dummyData = [
  {
    imgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
    name: 'CHECK PRINT SHIRT',
    price: 110,
  },
  {
    imgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    name: 'GLORIA HIGH LOGO SNEAKER',
    price: 91,
  },
  {
    imgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    name: 'CATE RIGID BAG',
    price: 94.5,
  },
  {
    imgUrl:
      'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
    name: 'GUESS CONNECT WATCH',
    price: 438.9,
  },
  {
    imgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    name: "'70s RETRO GLAM KEFIAH",
    price: 20,
  },
];

interface Navigation {
  navigate(destination: string): void;
}

const Home = ({navigation}: {navigation: Navigation}) => {
  const sliderRef = React.useRef(null);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.renderItemContainer}>
        <Image source={{uri: item.imgUrl}} style={styles.image} />
        <Text style={styles.nameText}>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            layout={'default'}
            data={dummyData}
            sliderWidth={300}
            itemWidth={260}
            renderItem={renderItem}
            hasParallaxImages={true}
            //loop={true}
            ref={sliderRef}
          />
        </View>
      </SafeAreaView>
      <ScrollView horizontal={true} scrollEnabled={true}>
        <FlatListComponent
          data={dummyData}
          numberColumns={2}
          style={{width: 160, margin: 5}}
          textStyle={{flexShrink: 1, flexWrap: 'wrap', marginTop: 5}}
          scrollEnable={false}
          onPress={() => navigation.navigate('Products', {screen: 'Explore'})}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 10},
  carouselContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'skyblue',
    borderWidth: 1,
    padding: 5,
  },
  renderItemContainer: {
    borderRadius: 5,
    height: 250,
    marginLeft: 25,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    height: 200,
    maxwidth: 250,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
    resizeMode: 'cover',
  },
  nameText: {
    marginTop: 10
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'black',
  },
});
  