import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView, StatusBar, Text, TouchableOpacity, View,
} from 'react-native';
import DotDotDot from '../../../assets/svg/DotDotDot';
import ImageCard from '../../../components/ImageCard';
import { NavigatorConstants } from '../../../constants';
import { useAppSelector } from '../../../redux/HookRedux';
import { RootStackParams } from '../../../routes/RoutesParams';
import styles from './styles';

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
      borderRadius: 16,
      alignSelf: 'stretch',
    },
  };
};

const Browse = () => {
  const { challenges } = useAppSelector((state) => state.challenges);

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const navigateToChallengeDetail = (id: string) => () => {
    navigation.navigate(NavigatorConstants.DetailScreen, { id });
  };

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
    <SafeAreaView style={styles.centerContainer}>
      <StatusBar hidden />
      <View style={styles.screen}>
        <MasonryList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={challengesPropList}
          numColumns={2}
          renderItem={({ item, i }) => (
            <View style={item.wrapperStyle} key={i}>
              <TouchableOpacity onPress={navigateToChallengeDetail(item.id)}>
                <ImageCard
                  id={item.id}
                  style={item.style}
                />
              </TouchableOpacity>
              <View style={styles.descriptionWrapper}>
                <View style={styles.descriptionTextWrapper}>
                  <Text style={styles.brandText}>{challenges[i].brand}</Text>
                  <Text style={styles.numOfSaveText}>
                    {`${challenges[i].numOfSave} saved this`}
                  </Text>
                </View>
                <View style={styles.dotdotdotWrapper}>
                  <DotDotDot style={styles.dotdotdot} />
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Browse;
