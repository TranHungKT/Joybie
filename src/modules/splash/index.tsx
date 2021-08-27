/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { View, Image, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../routes/RoutesParams';

import { useAppDispatch, useAppSelector } from '../../redux/HookRedux';

import { UsersActions } from '../../redux/User/UsersRedux';
import { ChallengesActions } from '../../redux/Challenges/ChallengesRedux';
import { RewardsActions } from '../../redux/Rewards/RewardsRedux';
import { VideosActions } from '../../redux/Videos/VideosRedux';

import styles from './styles';

type SplashScreenNavigationProps = NativeStackNavigationProp<RootStackParams, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProps>();
  const dispatch = useAppDispatch();

  const { rewards } = useAppSelector((state) => state.rewards);

  useEffect(() => {
    dispatch(UsersActions.getUsersRequest());
    dispatch(ChallengesActions.getChallengesRequest());
    dispatch(VideosActions.getVideosRequest());
    dispatch(RewardsActions.getRewardsRequest());
  }, []);

  useEffect(() => {
    if (rewards.length !== 0) {
      navigation.navigate({ name: 'TabRoute', key: 'Home' });
    }
  }, [rewards]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={require('@assets/image/logo.png')} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default SplashScreen;
