import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Colors } from '../../styles/index';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: Colors.White,
    height: 60,
    width: Dimensions.get('window').width / 1.75,
    fontSize: 16,
  },
  slider: {
    height: 3,
    position: 'absolute',
    top: 45,
    left: 33,
    // backgroundColor: Colors.Purple,
  },
  touchableContainer: {
    flex: 1,
    paddingBottom: Platform.OS === 'ios' ? 15 : 0,
    width: (Dimensions.get('window').width * 13) / 25 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tabLabel: {
    justifyContent: 'center',
  },
  textLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
