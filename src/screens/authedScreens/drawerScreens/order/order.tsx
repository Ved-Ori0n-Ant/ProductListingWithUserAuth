import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from './order.style';

const dummyOrderList = [
    {
      orderNo: 1,
      img: [
        'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
        'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
      ],
      name: ['CHECK PRINT SHIRT', 'GLORIA HIGH LOGO SNEAKER'],
      price: 110,
      status: 'Completed',
    },
    {
      orderNo: 2,
      img: [
        'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
      ],
      name: ['GLORIA HIGH LOGO SNEAKER'],
      price: 91,
      status: 'Completed',
    },
  ];

const Order = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyOrderList}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.container}>
              <View style={styles.component}>
                <Text style={styles.boldTExt}>Order ID : </Text>
                <Text style={styles.orderIdText}>{item.orderNo}</Text>
                <View style={{flex: 1}}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
              {item.img.map((valImg, indexImg) => {
                return (
                  <View key={`${indexImg}_list`} style={styles.component}>
                    <Image source={{uri: valImg}} style={styles.img} />
                    {item.name.map((valName, indexName) => {
                      if (indexImg === indexName) {
                        return (
                          <Text key={`${indexName}_list`} style={styles.name}>
                            {valName}
                          </Text>
                        );
                      }
                    })}
                  </View>
                );
              })}
              <View style={styles.component}>
                <Text style={styles.boldTExt}>Price : </Text>
                <Text style={styles.boldTExt}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Order;