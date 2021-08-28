import React, { useState } from 'react';
import {
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import { Modal } from '@components/index';
import styles from './styles';
import Header from './components/Header';
import { Colors } from '../../styles';
import Challenges from './components/Challenges';
import Rewards from './components/Rewards';

const userId = 1;

const Profile = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.centerContainer} contentContainerStyle={styles.content}>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible} />
      <Header userId={userId} />
      <View style={styles.textInputView}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.Black}
          style={styles.textInput}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Challenges userId={userId} />
      </View>
      <View style={{ flex: 1 }}>
        <Rewards userId={userId} />
      </View>
    </ScrollView>
  );
};

export default Profile;
