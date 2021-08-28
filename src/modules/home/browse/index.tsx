import React from 'react';
import { SafeAreaView } from 'react-native';
import BrowseScreen from './screen';
import styles from './styles';

const Browse = () => (
  <SafeAreaView style={styles.centerContainer}>
    <BrowseScreen />
  </SafeAreaView>
);

export default Browse;
