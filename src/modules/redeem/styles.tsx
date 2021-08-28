import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 0.4,
    backgroundColor: Colors.White,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 20,
  },
  title: {
    color: Colors.Purple,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  content: {
    marginTop: 50,
  },
  button: {
    marginTop: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.White,
  },
});
