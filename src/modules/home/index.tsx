import React from 'react';
import { SafeAreaView } from 'react-native';
import BrowseScreen from './browse/screen';

import styles from './styles';

const Home = () => (
  <SafeAreaView style={styles.centerContainer}>
    <BrowseScreen />
  </SafeAreaView>
);

export default Home;
