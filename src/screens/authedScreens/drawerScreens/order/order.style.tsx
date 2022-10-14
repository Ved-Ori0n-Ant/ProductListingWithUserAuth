import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0c0',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 5,
  },
  component: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 7,
  },
  statusText: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 1,
    alignSelf: 'flex-end',
    marginRight: 10,
    fontWeight: 'bold',
    backgroundColor: '#00c600'
  },
  orderIdText: {
    color: '#3d73dd',
    fontWeight: 'bold',
  },
  boldTExt: {
    fontWeight: 'bold',
  },
  name: {
    marginLeft: 15,
  },
});