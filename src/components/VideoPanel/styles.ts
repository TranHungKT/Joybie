import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  videoPanel: {
    marginLeft: 31,
    marginRight: 31,
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    marginBottom: 10,
  },
  playButton: {
    position: 'absolute',
    top: 108,
    left: 163,
    zIndex: 999,
  },
});

export default styles;
