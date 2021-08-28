import React from 'react';
import { SafeAreaView, View } from 'react-native';
import BrowseScreen from './screen';
import styles from './styles';

const Browse = () => (
  <SafeAreaView style={styles.centerContainer}>
    <View style={styles.screen}>
      <BrowseScreen />
    </View>
  </SafeAreaView>
);

export default Browse;
