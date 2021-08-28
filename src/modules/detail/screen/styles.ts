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
  challengeDetailsText: { fontWeight: 'bold', fontFamily: 'Poppins-Medium' },
  textWrapper: { flex: 1, flexDirection: 'row' },
  textContainer: { flex: 1, alignItems: 'flex-start' },
  titleText: {
    fontSize: 24, fontWeight: 'bold', marginTop: 5, fontFamily: 'Poppins-Medium',
  },
  numOfDoneText: { color: Purple, fontFamily: 'Poppins-Medium' },
  descriptionText: { marginTop: 10, fontFamily: 'Poppins-Medium' },
  buttonWrapper: { flex: 1, flexDirection: 'row', marginTop: 20 },
  joinChallenge: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 32,
    backgroundColor: Purple,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: { color: White, fontFamily: 'Poppins-Medium' },
  share: {
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 32,
    backgroundColor: Purple,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

});
