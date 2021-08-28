import { StyleSheet } from 'react-native';
import { White } from '../../../../styles/colors';

export default StyleSheet.create({
  screen: { width: '100%', height: '100%', backgroundColor: White },
  descriptionWrapper: { flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 },
  descriptionTextWrapper: { flex: 3 },
  brandText: { fontWeight: 'bold' },
  numOfSaveText: { marginTop: 5, fontWeight: 'bold' },
  dotdotdotWrapper: { flex: 1 },
  dotdotdot: { alignSelf: 'flex-end' },
});
