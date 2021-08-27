import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './style';
import { useAppDispatch } from '../../redux/HookRedux';
import { UsersActions } from '../../redux/User/UsersRedux';
import { ChallengesActions } from '../../redux/Challenges/ChallengesRedux';
import Challenges from '../../components/Challenges';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(UsersActions.getUsersRequest());
    dispatch(ChallengesActions.getChallengesRequest());
  }, []);

  return (
    <SafeAreaView style={styles.centerContainer}>
      <Challenges />
    </SafeAreaView>
  );
};

export default Home;
