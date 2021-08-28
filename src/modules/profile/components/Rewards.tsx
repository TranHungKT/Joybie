import React from 'react';
import {
  View, Text, ScrollView, Image,
  TouchableOpacity,

} from 'react-native';
import { } from 'react-native-gesture-handler';
import styles from './styles';

import { useAppSelector } from '../../../redux/HookRedux';

interface RewardsProps {
  userId: number
}

const Rewards = (props : RewardsProps) => {
  const { userId } = props;

  const rewardList = useAppSelector((state) => state.rewards.rewards);

  const { reward } = useAppSelector((state) => state.users.users[userId]);

  return (
    <>
      <Text style={styles.titleText}>My Rewards</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {reward.map((element) => {
          const { imageUrl, title, validTill } = rewardList[element];
          return (
            <View style={[styles.rowView, styles.rewardView]} key={title}>
              <Image source={{ uri: imageUrl }} style={styles.imageReward} resizeMode="contain" />
              <View style={styles.titleView}>
                <Text style={styles.title}>{title}</Text>
                <Text>
                  Valid Till
                  {' '}
                  {new Date(validTill).toLocaleDateString('en-Us')}
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.use}>
                  Use
                  {' '}
                  {'>'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Rewards;
