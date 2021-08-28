import React from 'react';
import { View, Image } from 'react-native';
import { useAppSelector } from '../../redux/HookRedux';
import styles from './styles';

interface IUpdateCardProps {
  id: string,
  userRelation?: boolean
}

const UpdateCard = (props: IUpdateCardProps) => {
  const { id, userRelation } = props;
  const { users } = useAppSelector((state) => state.users);

  const userIdx = users.findIndex((user) => user.id === id);

  return (
    <View style={userRelation ? styles.userRelationCard : styles.normalCard}>
      <View style={styles.descriptionWrapper}>
        <Image style={styles.avatar} source={{ uri: users[userIdx].avatar }} />

      </View>
    </View>
  );
};

export default UpdateCard;
