import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { useAppDispatch } from '../../redux/HookRedux';

import { UsersActions } from '../../redux/User/UsersRedux';
import { ChallengesActions } from '../../redux/Challenges/ChallengesRedux';
import { RewardsActions } from '../../redux/Rewards/RewardsRedux';
import { VideosActions } from '../../redux/Videos/VideosRedux';

const SplashScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(UsersActions.getUsersRequest());
    dispatch(ChallengesActions.getChallengesRequest());
    dispatch(VideosActions.getVideosRequest());
    dispatch(RewardsActions.getRewardsRequest());
  }, []);

  return (
    <View>
      <Text />
    </View>
  );
};

export default SplashScreen;
