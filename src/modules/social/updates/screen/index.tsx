import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { White } from '../../../../styles/colors';
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
    <>
      <View style={{ width: '100%', height: '100%', backgroundColor: White }}>
        <FlatList
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
    </>
  );
};

export default UpdateScreen;
