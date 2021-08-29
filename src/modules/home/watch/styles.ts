import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';
import { Purple } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: Purple,
  },
  textLabel: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: Colors.White,
    marginHorizontal: 36,
    marginTop: 20,
  },
});
