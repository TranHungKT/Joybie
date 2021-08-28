/* eslint-disable global-require */
import React from 'react';
import { View, Image, Text } from 'react-native';
import Modal from 'react-native-modal';
import { CloseIcon } from '@assets/index';
import styles from './styles';

interface ModalProps {
  isVisible: boolean,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalNotification = (props: ModalProps) => {
  const { isVisible, setIsVisible } = props;
  return (
    <Modal isVisible={isVisible} style={styles.modalContainer} statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.blankView}>
            <CloseIcon onPress={() => setIsVisible(false)} />
          </View>
          <Image
            source={require('../../assets/image/Ikea.png')}
            style={styles.imageView}
          />
          <View style={styles.blankView} />
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.congratulation}>Congratulations!</Text>
          <Text style={styles.noti}>
            Both Sammy and your submission are successful!
          </Text>
          <Text style={styles.voucher}>
            Discount vouchers for IKEA have been added to both of your
            {' '}
            {'\n'}
            {' '}
            profiles!
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalNotification;
