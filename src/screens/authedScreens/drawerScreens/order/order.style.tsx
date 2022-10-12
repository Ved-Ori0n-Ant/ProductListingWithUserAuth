import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  statusText: {
    borderWidth: 1,
    borderColor: 'yellow',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 1,
    alignSelf: 'flex-end',
    marginRight: 10,
    fontWeight: 'bold',
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