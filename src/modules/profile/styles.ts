import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

export default StyleSheet.create({
  centerContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  textInputView: {
    flex: 0.1,
    alignSelf: 'center',
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.Black,
    height: 27,
    padding: 0,
    width: 247,
    borderRadius: 20,
    fontSize: 10,
    fontWeight: 'bold',
    paddingLeft: 10,
    alignSelf: 'stretch',
    fontFamily: 'Poppins-Medium',
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
