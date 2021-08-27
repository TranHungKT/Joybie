import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/index';

export default StyleSheet.create({
  slideStyle: {
    padding: 10,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.White,
  },
  header: {
    flex: 0.07,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  closeIcon: {
    flex: 0.3,
  },
  title: {
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 30,
    height: 34,
    fontSize: 10,
    paddingTop: 10,
    paddingLeft: 11,
    fontWeight: 'bold',
  },
  socialView: {
    flex: 0.15,
  },
  textInputView: {
    flex: 0.1,
    marginHorizontal: 10,
  },
  nameView: {
    flexDirection: 'row',
  },
});
