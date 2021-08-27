import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Colors } from '../../styles/index';

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 56,
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: Colors.Purple,
    width: '60%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  touchableContainer: {
    flex: 1,
    paddingBottom: Platform.OS === 'ios' ? 15 : 0,
    width: (Dimensions.get('window').width * 13) / 25 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
  },
});

export default styles;
