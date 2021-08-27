import React from 'react';
import { View, Text } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import ImageCard from '../../../components/Common/Image';
import { useAppSelector } from '../../../redux/HookRedux';
import DotDotDot from '../../../assets/svg/DotDotDot';

type HeightType = 'short' | 'long';

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomStyle = (heightType: HeightType) => {
  let height = 0;
  if (heightType === 'short') {
    height = randomIntFromInterval(120, 170);
  } else {
    height = randomIntFromInterval(250, 300);
  }
  return {
    wrapperStyle: {
      height: height + 60,
      margin: 10,
    },
    style: {
      height,
      borderRadius: 10,
      alignSelf: 'stretch',
    },
  };
};

const BrowseScreen = () => {
  const { challenges } = useAppSelector((state) => state.challenges);

  const getStyleList = () => {
    const styleList = [];
    const challengesLeng = challenges.length;

    styleList.push({ ...getRandomStyle('long') });

    let tmp = 1;
    let longType = false;
    for (let i = 1; i < challengesLeng; i += 1) {
      if (tmp === 0) {
        tmp = 1;
        if (longType) {
          styleList.push({ ...getRandomStyle('long') });
        } else {
          styleList.push({ ...getRandomStyle('short') });
        }
        longType = !longType;
      } else {
        tmp = 0;
        if (longType) {
          styleList.push({ ...getRandomStyle('long') });
        } else {
          styleList.push({ ...getRandomStyle('short') });
        }
      }
    }
    return styleList;
  };

  const challengesStyleList = getStyleList();
  const challengesPropList = challenges.map((challenge, index) => ({
    id: challenge.id,
    wrapperStyle: challengesStyleList[index].wrapperStyle,
    style: challengesStyleList[index].style,
  }));

  return (
    <MasonryList
      horizontal={false}
      showsVerticalScrollIndicator={false}
      data={challengesPropList}
      numColumns={2}
      renderItem={({ item, i }) => (
        <View style={item.wrapperStyle} key={i}>
          <ImageCard
            id={item.id}
            style={item.style}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
            <View style={{ flex: 3 }}>
              <Text style={{ fontWeight: 'bold' }}>{challenges[i].brand}</Text>
              <Text style={{ marginTop: 5, fontWeight: 'bold' }}>
                {`${challenges[i].numOfSave} saved this`}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <DotDotDot style={{ alignSelf: 'flex-end' }} />
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default BrowseScreen;
