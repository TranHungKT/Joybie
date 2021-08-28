import React from 'react';
import { SafeAreaView, View } from 'react-native';
import DetailScreen from './screen';
import styles from './styles';

const Detail = () => (
  <SafeAreaView style={styles.centerContainer}>
    <View style={styles.screen}>
      <DetailScreen />
    </View>
  </SafeAreaView>
);

export default Detail;
