import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './style';
import { useAppDispatch } from '../../redux/HookRedux';

import { UsersActions } from '../../redux/User/UsersRedux';
import { ChallengesActions } from '../../redux/Challenges/ChallengesRedux';
import Challenges from '../../components/Challenges';
import { RewardsActions } from '../../redux/Rewards/RewardsRedux';
import { VideosActions } from '../../redux/Videos/VideosRedux';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(UsersActions.getUsersRequest());
    dispatch(ChallengesActions.getChallengesRequest());
    dispatch(VideosActions.getVideosRequest());
    dispatch(RewardsActions.getRewardsRequest());
  }, []);

  return (
    <SafeAreaView style={styles.centerContainer}>
      <Challenges />
    </SafeAreaView>
  );
};

export default Home;
