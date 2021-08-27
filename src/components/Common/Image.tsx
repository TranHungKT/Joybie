import React from 'react';

import { ImageStyle, Pressable, Image } from 'react-native';

import { useAppSelector } from '../../redux/HookRedux';

interface IImageProps {
  id: string;
  style?: ImageStyle;
}

const ImageCard = (props: IImageProps) => {
  const { id, style } = props;
  const { challenges } = useAppSelector((state) => state.challenges);

  const challengeIdx = challenges.findIndex((challenge) => challenge.id === id);
  const onPressHandler = () => {};

  return (
    <>
      {(challengeIdx !== -1) && (
      <Pressable onPress={onPressHandler}>
        <Image
          style={style}
          source={{ uri: challenges[challengeIdx].imageUrl }}
        />
      </Pressable>
      )}
    </>
  );
};

export default ImageCard;
