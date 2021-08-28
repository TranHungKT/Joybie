import React from 'react';
import { View, Text, Image } from 'react-native';

import { useAppSelector } from '../../../redux/HookRedux';
import styles from './styles';

interface HeaderProps {
  userId: number
}

const Header = (props: HeaderProps) => {
  const { userId } = props;

  const users = useAppSelector((state) => state.users.users);

  const {
    avatar, firstName, follower, following,
  } = users[userId];

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.image} />
      <Text style={styles.name}>{firstName}</Text>
      <Text style={styles.text}>
        {follower}
        {' '}
        Followers
        {' '}
        {following}
        {' '}
        Following
      </Text>
    </View>
  );
};

export default Header;
