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
    width: '100%',
  },
  socialView: {
    flex: 0.15,
  },
  textInputView: {
    flex: 0.1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  nameView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  image: {
    height: 46,
    width: 46,
    borderRadius: 25,
    marginRight: 10,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstName: {
    fontWeight: 'bold',
  },
  unsendButtonView: {
    backgroundColor: Colors.Purple,
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  sendButtonView: {
    backgroundColor: Colors.White,
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  sentButtonView: {},
  unsendButtonText: {
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: 10,
  },
  sendButtonText: {
    color: Colors.Purple,
    fontWeight: 'bold',
    fontSize: 10,
  },
  sentButtonText: {
    color: Colors.Purple,
    fontWeight: 'bold',
    fontSize: 10,
  },
  listView: {
    flex: 0.9,
    marginTop: 10,
  },
});
