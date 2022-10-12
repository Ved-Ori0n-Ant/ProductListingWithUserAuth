import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderColor: 'skyblue',
    borderWidth: 2,
  },
  listContainer: {
    flexDirection: 'row',
    borderColor: 'skyblue',
    borderBottomWidth: 1,
  },
  productImgConatiner: {
    flex: 2,
  },
  productImg: {
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
  },
  infoText: {
    marginHorizontal: 5,
  },
  namePriceText: {
    fontSize: 18,
  },
  aboutText: {
    fontSize: 16,
  },
  quantity: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonImg: {
    height: 16,
    width: 16,
  },
  crossButtonImg: {
    height: 16,
    width: 16,
    marginRight: 5,
    marginTop: 5,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  priceText: {
    flex: 1,
    fontSize: 18,
  },
  totalCostContainer: {
    flexDirection: 'row',
    marginTop: 10,
    borderColor: 'skyblue',
    borderBottomWidth: 1,
  },
  totalCostText: {
    flex: 1,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 150,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});

export default styles;