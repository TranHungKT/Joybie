import React from 'react';
import { Pressable, Image } from 'react-native';
import { useAppSelector } from '../../redux/HookRedux';

interface IImageProps {
  id: string;
}

const ImageCard = (props: IImageProps) => {
  const { id } = props;
  const { challenges } = useAppSelector((state) => state.challenges);

  const challengeIdx = challenges.findIndex((challenge) => challenge.id === id);

  const onPressHandler = () => {
    console.log(challengeIdx);
  };

  return (
    <>
      {(challengeIdx !== -1) && (
      <Pressable onPress={onPressHandler}>
        <Image style={{ width: 160, height: 100, margin: 10 }} source={{ uri: challenges[challengeIdx].imageUrl }} />
      </Pressable>
      )}
    </>
  );
};

export default ImageCard;
