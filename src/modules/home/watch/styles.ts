import { StyleSheet } from 'react-native';
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
  screen: { width: '100%', height: '100%', backgroundColor: Purple },
});
