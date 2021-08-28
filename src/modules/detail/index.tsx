import React, { useRef } from 'react';
import {
  Image, Text, View, ScrollView, TouchableOpacity,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import SlidingUpPanel from 'rn-sliding-up-panel';
import { RootStackParams } from '../../routes/RoutesParams';
import { useAppSelector } from '../../redux/HookRedux';
import styles from './styles';

import { SlidePanel } from '../../components';

type DetailScreenProps = RouteProp<RootStackParams, 'DetailScreen'>;

const DetailScreen = () => {
  const route = useRoute<DetailScreenProps>();
  const { id } = route.params;
  const { challenges } = useAppSelector((state) => state.challenges);

  const challengeIdx = challenges.findIndex((challenge) => challenge.id === id);

  const refPanel = useRef<SlidingUpPanel>(null);

  const showPanel = () => refPanel.current?.show();

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollView}>
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
  );
};

export default DetailScreen;
