import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

export default StyleSheet.create({
  image: {
    height: 160,
    width: 160,
    borderRadius: 80,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 32,
  },
  rowView: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,

  },
  titleText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  rewardView: {
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    marginBottom: 10,
    borderColor: Colors.Purple,
  },
  imageReward: {
    width: 66,
    height: 37,
    flex: 0.2,
  },
  titleView: {
    flex: 0.7,
  },
  title: {
    fontSize: 14,
    color: Colors.Purple,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  use: {
    fontSize: 10,
    color: Colors.Pink,
  },
  imageRewardSubmiss: {
    width: 138,
    height: 131,
    borderRadius: 20,
    marginRight: 10,
  },
});
