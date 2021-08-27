import React from 'react';
import { FlatList, Image } from 'react-native';
import ImageCard from '../Common/Image';
import { useAppSelector } from '../../redux/HookRedux';

const Challenges = () => {
  const { challenges } = useAppSelector((state) => state.challenges);
  const challengesIdList = challenges.map((challenge) => challenge.id);

  return (
    <FlatList
      horizontal={false}
      showsVerticalScrollIndicator={false}
      data={challengesIdList}
      numColumns={2}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item }) => (
        <ImageCard id={item} />
      )}
    />
  );
};

export default Challenges;
