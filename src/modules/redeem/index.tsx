import React from 'react';
import {
  View, Text, ImageBackground, StatusBar, TouchableOpacity, Linking,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useAppSelector } from '../../redux/HookRedux';
import { ProfileRouteParams } from '../../routes/RoutesParams';

import styles from './styles';
import { CloseIcon } from '../../assets';
import Header from '../detail/component/Header';

type NavigationRoute = RouteProp<ProfileRouteParams, 'RedeemScreen'>;

const RedeemScreen = () => {
  const route = useRoute<NavigationRoute>();
  const { id } = route.params;

  const { rewards } = useAppSelector((state) => state.rewards);

  const { bgrImg, title, webUrl } = rewards[id];

  const getUrlName = () => webUrl.substring(12, webUrl.length);

  const goToLink = () => {
    Linking.canOpenURL(webUrl).then((supported) => {
      if (supported) {
        Linking.openURL(webUrl);
      } else {
        console.log(`Don't know how to open URI: ${webUrl}`);
      }
    });
  };

  return (
    <>
      <ImageBackground source={{ uri: bgrImg }} resizeMode="cover" style={styles.container}>
        <View style={styles.blackOpac} />
        <View style={styles.headerWrapper}>
          <Header whiteColor />
        </View>
        <View style={styles.containerWrapper}>
          <StatusBar hidden />
          <View style={styles.modalView}>
            <View style={{ flex: 0.2 }} />
            <View style={styles.content}>
              <Text style={styles.title}>$15 Voucher</Text>
              <Text style={styles.description}>
                Eligible for items in the
                {'\n'}
                Kitchen Section

              </Text>
              <TouchableOpacity style={styles.button} onPress={goToLink}>
                <Text style={styles.buttonText}>
                  Browse on
                  {' '}
                  {getUrlName()}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  Redeem Voucher
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.2 }} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default RedeemScreen;
