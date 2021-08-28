import { StyleSheet } from 'react-native';
import { Purple, White } from '../../../styles/colors';

export default StyleSheet.create({
  scrollView: { marginHorizontal: 30 },
  wrapper: {
    flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
  },
  image: {
    width: 347, height: 522, marginTop: 10, borderRadius: 16,
  },
  challengeDetails: {
    position: 'absolute',
    top: 465,
    left: 112,
    width: 120,
    height: 40,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: Purple,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  challengeDetailsText: { fontWeight: 'bold' },
  textWrapper: { flex: 1, flexDirection: 'row' },
  textContainer: { flex: 1, alignItems: 'flex-start' },
  titleText: { fontSize: 24, fontWeight: 'bold', marginTop: 5 },
  numOfDoneText: { color: Purple },
  descriptionText: { marginTop: 10 },
  buttonWrapper: { flex: 1, flexDirection: 'row', marginTop: 20 },
  joinChallenge: {
    alignSelf: 'flex-start',
    width: 120,
    height: 40,
    borderRadius: 32,
    backgroundColor: Purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { fontWeight: 'bold', color: White },
  share: {
    alignSelf: 'flex-end',
    width: 120,
    height: 40,
    borderRadius: 32,
    backgroundColor: Purple,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
