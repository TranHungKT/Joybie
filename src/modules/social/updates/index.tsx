import React from 'react';
import { SafeAreaView, View } from 'react-native';
import UpdateScreen from './screen';
import styles from './styles';

const Updates = () => (
  <SafeAreaView style={styles.centerContainer}>
    <View style={styles.screen}>
      <UpdateScreen />
    </View>
  </SafeAreaView>
);

export default Updates;
