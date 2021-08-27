import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { SlidePanel } from '@components/index';
import styles from './styles';

const Home = () => (
  <SafeAreaView style={styles.centerContainer}>
    <Text>InternalProject</Text>
    <SlidePanel />
  </SafeAreaView>
);

export default Home;
