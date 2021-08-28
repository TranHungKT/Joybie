import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { VideoPanel } from '@components/index';
import styles from './styles';

const Watch = () => (
  <SafeAreaView style={styles.centerContainer}>
    <View style={styles.screen}>
      <Text style={styles.textLabel}>See how others are developing their skills &#x26; hobbies with the support of brands</Text>
      <VideoPanel />
    </View>
  </SafeAreaView>
);

export default Watch;
