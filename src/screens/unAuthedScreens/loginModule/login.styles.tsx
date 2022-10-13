import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  component: {
    marginVertical: 5,
  },
  image: {
    marginLeft: 4,
    height: 20,
    width: 15,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  textInputContainer: {
    flexDirection: 'row',
    borderColor: 'blue',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: 'blue',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 25,
    marginTop: 25,
  },
  signInButton: {
    backgroundColor: '#3d73dd',
    borderRadius: 8,
  },
  signInText: {
    alignSelf: 'center',
    marginVertical: 7,
    color: 'white',
  },
});

export default styles;