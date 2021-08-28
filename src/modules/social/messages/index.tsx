import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';

const Messages = () => (
  <SafeAreaView style={styles.centerContainer}>
    <View style={styles.screen}>
      <Text>Messages</Text>
    </View>
  </SafeAreaView>
);

export default Messages;
