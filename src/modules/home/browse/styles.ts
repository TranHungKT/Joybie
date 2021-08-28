import { StyleSheet } from 'react-native';
import { White } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: { width: '100%', height: '100%', backgroundColor: White },
  descriptionWrapper: { flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 },
  descriptionTextWrapper: { flex: 3 },
  brandText: { fontFamily: 'Poppins-Medium' },
  numOfSaveText: { marginTop: 5, fontFamily: 'Poppins-Medium' },
  dotdotdotWrapper: { flex: 1 },
  dotdotdot: { alignSelf: 'flex-end' },
});
