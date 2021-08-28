import React from 'react';
import {
  Image, Text, View, ScrollView,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import { RootStackParams } from '../../../routes/RoutesParams';
import { useAppSelector } from '../../../redux/HookRedux';
import styles from './styles';

type DetailScreenProps = RouteProp<RootStackParams, 'DetailScreen'>;

const DetailScreen = () => {
  const route = useRoute<DetailScreenProps>();
  const { id } = route.params;
  const { challenges } = useAppSelector((state) => state.challenges);

  const challengeIdx = challenges.findIndex((challenge) => challenge.id === id);

  return (
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
            <View style={styles.share}>
              <Text style={styles.buttonText}>Share</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
