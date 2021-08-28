import React from 'react';
import { Text, View, Image } from 'react-native';

import { useAppSelector } from '../../redux/HookRedux';
import styles from './styles';

interface IUpdateCardProps {
  userId: string,
  challengeId: string,
  userRelation?: boolean
}

const UpdateCard = (props: IUpdateCardProps) => {
  const { userId, challengeId, userRelation } = props;
  const { users } = useAppSelector((state) => state.users);
  const { challenges } = useAppSelector((state) => state.challenges);

  const userIdx = users.findIndex((user) => user.id === userId);
  const challengeIdx = users.findIndex((challenge) => challenge.id === challengeId);

  return (
    <View style={userRelation ? styles.userRelationCard : styles.normalCard}>
      <View style={styles.descriptionWrapper}>
        <Image style={styles.avatar} source={{ uri: users[userIdx].avatar }} />
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionText}>
            {userRelation
              ? `${users[userIdx].firstName} started on the ${challenges[challengeIdx].brand} challenge you shared with them!`
              : `${users[userIdx].firstName} is on a challenge by ${challenges[challengeIdx].brand}`}
          </Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{userRelation ? 'Send Message' : 'Challenge Details'}</Text>
        </View>
      </View>
    </View>
  );
};

export default UpdateCard;
