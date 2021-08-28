import { StyleSheet } from 'react-native';
import { Purple, Pink } from '../../styles/colors';

export default StyleSheet.create({
  normalCard: {
    width: 380, height: 150, backgroundColor: Purple, borderRadius: 32,
  },
  userRelationCard: {
    width: 380, height: 150, backgroundColor: Pink, borderRadius: 32,
  },
  descriptionWrapper: {
    flexDirection: 'row', marginBottom: 5, marginHorizontal: 20, marginTop: 20,
  },
  avatar: {
    width: 50, height: 50, borderRadius: 100,
  },
});
