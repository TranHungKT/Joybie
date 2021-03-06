import React, { useRef } from 'react';
import {
  SafeAreaView, View,
  Image, Text, ScrollView, TouchableOpacity, StatusBar,
} from 'react-native';

import { useRoute, RouteProp } from '@react-navigation/native';

import SlidingUpPanel from 'rn-sliding-up-panel';
import { RootStackParams } from '../../routes/RoutesParams';
import { useAppSelector } from '../../redux/HookRedux';
import styles from './styles';
import Header from './component/Header';
import { SlidePanel } from '../../components';

type DetailScreenProps = RouteProp<RootStackParams, 'DetailScreen'>;

const Detail = () => {
  const route = useRoute<DetailScreenProps>();
  const { id } = route.params;
  const { challenges } = useAppSelector((state) => state.challenges);

  const challengeIdx = challenges.findIndex((challenge) => challenge.id === id);

  const refPanel = useRef<SlidingUpPanel>(null);

  const showPanel = () => refPanel.current?.show();
  return (
    <SafeAreaView style={styles.centerContainer}>
      <StatusBar hidden />
      <View style={styles.screen}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <Header />
          <View style={styles.wrapper}>
            <Image
              style={styles.image}
              source={{ uri: challenges[challengeIdx].imageUrl }}
            />
            <View style={styles.challengeDetails}>
              <Text style={styles.challengeDetailsText}>Challenge Details</Text>
            </View>
            <View style={styles.textWrapper}>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>{challenges[challengeIdx].title}</Text>
                <Text style={styles.numOfDoneText}>{`${challenges[challengeIdx].numOfDone} people did this`}</Text>
                <Text style={styles.descriptionText}>{challenges[challengeIdx].description}</Text>
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <View style={{ flex: 1 }}>
                <View style={styles.joinChallenge}>
                  <Text style={styles.buttonText}>Join challenge</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.share} onPress={showPanel}>
                  <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <SlidePanel refPanel={refPanel} />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
