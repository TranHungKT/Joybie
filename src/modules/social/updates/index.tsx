import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import UpdateCard from '../../../components/UpdateCard';
import { useAppSelector } from '../../../redux/HookRedux';
import styles from './styles';

const Updates = () => {
  const { users } = useAppSelector((state) => state.users);
  const { challenges } = useAppSelector((state) => state.challenges);

  const propList = [
    {
      userId: users[2].id,
      challengeId: challenges[3].id,
      userRelation: true,
    },
    {
      userId: users[1].id,
      challengeId: challenges[5].id,
    },
    {
      userId: users[0].id,
      challengeId: challenges[0].id,
    },
  ];

  return (
    <SafeAreaView style={styles.centerContainer}>
      <View style={styles.screen}>
        <FlatList
          style={{ marginTop: 10 }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={propList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <UpdateCard
              userId={item.userId}
              challengeId={item.challengeId}
              userRelation={item.userRelation}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Updates;
