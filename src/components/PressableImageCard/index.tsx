import React from 'react';

import { Pressable } from 'react-native';

import FastImage from 'react-native-fast-image';
import { useAppSelector } from '../../redux/HookRedux';

interface IImageProps {
  id: string;
  style: any;
}

const PressableImageCard = (props: IImageProps) => {
  const { id, style } = props;
  const { challenges } = useAppSelector((state) => state.challenges);

  const challengeIdx = challenges.findIndex((challenge) => challenge.id === id);
  const onPressHandler = () => {};

  return (
    <>
      {(challengeIdx !== -1) && (
      <Pressable onPress={onPressHandler}>
        <FastImage
          style={style}
          source={{ uri: challenges[challengeIdx].imageUrl, priority: FastImage.priority.normal }}
        />
      </Pressable>
      )}
    </>
  );
};

export default PressableImageCard;
