import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: { flex: 1 },
  headerView: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: 'white',
    flex: 0.32,
    borderRadius: 20,
  },
  blankView: {
    flex: 0.1,
  },
  imageView: {
    height: 57,
    width: 101,
  },
  congratulation: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  noti: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  voucher: {
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});
