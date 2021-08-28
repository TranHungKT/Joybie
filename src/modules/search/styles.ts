import { StyleSheet } from 'react-native';
import { Black, White } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: White,
  },
  searchSection: {
    height: 30,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Black,
    borderRadius: 16,
    marginBottom: 25,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    padding: 0,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  image: {
    width: 165,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  imageStyle: {
    borderRadius: 16,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    color: White,
  },
  blackOpac: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.55,
    backgroundColor: Black,
    borderRadius: 16,
  },
});
