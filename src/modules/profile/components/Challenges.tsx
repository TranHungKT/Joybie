/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Text, ScrollView, Image,
} from 'react-native';
import styles from './styles';

import { useAppSelector } from '../../../redux/HookRedux';

interface ChallengesProps {
  userId: number
}

const Challenges = (props: ChallengesProps) => {
  const { userId } = props;
  const { challenges } = useAppSelector((state) => state.challenges);
  const entryList = useAppSelector((state) => state.users.users[userId].entry);
  return (
    <>
      <Text style={styles.titleText}>Challenge Submissions</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {entryList.map((entry, index) => {
          const { imageUrl } = challenges[entry];
          return (
            <Image source={{ uri: imageUrl }} style={styles.imageRewardSubmiss} key={index} />
          );
        })}
      </ScrollView>
    </>
  );
};

export default Challenges;
