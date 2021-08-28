import React from 'react';
import {
  View, Text, ScrollView, Image,
  TouchableOpacity,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileRouteParams } from '../../../routes/RoutesParams';
import styles from './styles';

import { useAppSelector } from '../../../redux/HookRedux';

interface RewardsProps {
  userId: number
}

type NavigationProp = NativeStackNavigationProp<ProfileRouteParams, 'Profile'>;

const Rewards = (props : RewardsProps) => {
  const navigation = useNavigation<NavigationProp>();
  const { userId } = props;

  const rewardList = useAppSelector((state) => state.rewards.rewards);

  const { reward } = useAppSelector((state) => state.users.users[userId]);

  const navigateToRedeem = (id: number) => () => navigation.navigate('RedeemScreen', { id });

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
                  {validTill}
                </Text>
              </View>
              <TouchableOpacity onPress={navigateToRedeem(element)}>
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
