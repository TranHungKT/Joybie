import React from 'react';

import FastImage from 'react-native-fast-image';
import { useAppSelector } from '../../redux/HookRedux';

interface IImageProps {
  id: string;
  style: any;
}

const ImageCard = (props: IImageProps) => {
  const { id, style } = props;
  const { challenges } = useAppSelector((state) => state.challenges);

  const challengeIdx = challenges.findIndex((challenge) => challenge.id === id);

  return (
    <>
      {(challengeIdx !== -1) && (
        <FastImage
          style={style}
          source={{ uri: challenges[challengeIdx].imageUrl, priority: FastImage.priority.normal }}
        />
      )}
    </>
  );
};

export default ImageCard;
