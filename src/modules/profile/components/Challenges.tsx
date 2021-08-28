import React from 'react';
import {
  View, Text, ScrollView, Image,
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
        {entryList.map((entry) => {
          const { imageUrl } = challenges[entry];
          return (
            <Image source={{ uri: imageUrl }} style={styles.imageRewardSubmiss} />
          );
        })}
      </ScrollView>
    </>
  );
};

export default Challenges;
