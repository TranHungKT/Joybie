import { StyleSheet } from 'react-native';
import { Purple, Pink, White } from '../../styles/colors';

export default StyleSheet.create({
  normalCard: {
    height: 150,
    backgroundColor: Purple,
    borderRadius: 32,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  userRelationCard: {
    height: 150,
    backgroundColor: Pink,
    borderRadius: 32,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  descriptionWrapper: {
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 30,
    marginTop: 30,
    marginRight: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  descriptionTextWrapper: { flex: 1, marginLeft: 20, fontFamily: 'Poppins-Medium' },
  descriptionText: { color: White, fontSize: 16, fontFamily: 'Poppins-Medium' },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingHorizontal: 10,
    paddingBottom: 7,
    paddingTop: 7,
    borderRadius: 32,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { fontFamily: 'Poppins-Medium' },
  buttonWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginRight: 20,
  },
});
