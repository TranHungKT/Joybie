import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Colors } from '../../styles/index';

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 46,
    width: Dimensions.get('window').width / 1.75,
    fontSize: 16,
    elevation: 1,
  },
  slider: {
    height: 3,
    position: 'absolute',
    top: 40,
    left: 33,
    backgroundColor: Colors.Purple,
  },
  touchableContainer: {
    flex: 1,
    paddingBottom: Platform.OS === 'ios' ? 15 : 0,
    width: (Dimensions.get('window').width * 13) / 25 / 2,
    height: 50,
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
  },
});

export default styles;
