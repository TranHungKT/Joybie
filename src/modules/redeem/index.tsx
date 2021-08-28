import React from 'react';
import {
  View, Text, ImageBackground, StatusBar,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useAppSelector } from '../../redux/HookRedux';
import { ProfileRouteParams } from '../../routes/RoutesParams';

import styles from './styles';

type NavigationRoute = RouteProp<ProfileRouteParams, 'RedeemScreen'>;

const RedeemScreen = () => {
  const route = useRoute<NavigationRoute>();
  const { id } = route.params;

  const { rewards } = useAppSelector((state) => state.rewards);

  const { bgrImg, title } = rewards[id];
  console.log(bgrImg);
  return (
    <ImageBackground source={{ uri: bgrImg }} resizeMode="cover" style={styles.container}>
      <StatusBar hidden />
      <Text>Redeem</Text>
    </ImageBackground>
  );
};

export default RedeemScreen;
