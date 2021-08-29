import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    marginTop: 20,
    marginHorizontal: 30,
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
    fontSize: 24,
    textAlign: 'center',
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  content: {
    marginTop: 35,
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
  blackOpac: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.77,
    backgroundColor: Colors.Black,
  },
});
