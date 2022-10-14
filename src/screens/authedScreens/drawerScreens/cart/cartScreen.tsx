import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Plus, Minus, Cross } from '../../../../assets/svg';
import styles from './cart.style';

const dummyCartOrderData = [
  {
    orderNo: 1,
    img: 'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
    name: 'CHECK PRINT SHIRT',
    quantity: 2,
    pricePerPieice: 110,
    discount: 20,
    about: 'Trending Printed shirt',
    status: 'Completed',
  },
];

const Cart = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style = {{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', marginBottom: 13}}>-: Order Summary :-</Text>
        <FlatList
          data={dummyCartOrderData}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.listContainer}>
                <View style={styles.productImgConatiner}>
                  <Image source={{uri: item.img}} style={styles.productImg} />
                </View>
                <View style={styles.infoContainer}>
                  <Text style={[styles.infoText, styles.namePriceText]}>
                    {item.name}
                  </Text>
                  <Text style={[styles.infoText, styles.aboutText]}>
                    {item.about}
                  </Text>
                  <Text style={[styles.infoText, styles.namePriceText]}>
                    ${item.pricePerPieice}
                  </Text>
                  <View style={[styles.infoText, styles.quantity]}>
                    <Minus width={16} height={16} />
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <Plus width={16} height={16} />
                  </View>
                </View>
                <View style={styles.crossButtonImg}>
                  <Cross width={16} height={16} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={styles.totalCostContainer}>
          <Text style={styles.totalCostText}>Total Cost:- </Text>
          <Text style={styles.priceText}>
            $
            {dummyCartOrderData[0].quantity *
              dummyCartOrderData[0].pricePerPieice -
              dummyCartOrderData[0].discount}
            (${dummyCartOrderData[0].discount} Off)
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Check Out" />
      </View>
    </View>
  );
};

export default Cart;