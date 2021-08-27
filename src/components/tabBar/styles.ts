import { StyleSheet, Platform } from 'react-native';
import { Colors } from '../../styles/index';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 81,
    backgroundColor: Colors.Background,
  },
  slider: {
    height: 3,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.Purple,
  },
  touchableContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Platform.OS === 'ios' ? 15 : 0,
  },
  icon: {
    justifyContent: 'center',
  },
});

export default styles;
