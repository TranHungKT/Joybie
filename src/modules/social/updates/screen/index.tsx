import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import UpdateCard from '../../../../components/UpdateCard';
import { useAppSelector } from '../../../../redux/HookRedux';

const UpdateScreen = () => {
  const { users } = useAppSelector((state) => state.users);
  const { challenges } = useAppSelector((state) => state.challenges);

  const propList = [
    {
      userId: users[0].id,
      challengeId: challenges[0].id,
      userRelation: true,
    },
    {
      userId: users[1].id,
      challengeId: challenges[4].id,
    },
    {
      userId: users[3].id,
      challengeId: challenges[6].id,
    },
    {
      userId: users[0].id,
      challengeId: challenges[2].id,
      userRelation: true,
    },
    {
      userId: users[2].id,
      challengeId: challenges[1].id,
    },
  ];

  return (
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
  );
};

export default UpdateScreen;
