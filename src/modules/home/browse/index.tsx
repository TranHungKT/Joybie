import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { HomeTabRouteParams } from '../../../routes/RoutesParams';
import { NavigatorConstants } from '../../../constants';
import styles from './styles';

const Browse = () => {
  const navigation = useNavigation<NavigationProp<HomeTabRouteParams>>();

  const navigateToChallenge = (id: number) => navigation.navigate(NavigatorConstants.Challenge, { id });

  return (
    <SafeAreaView style={styles.centerContainer}>
      <Text>Browse</Text>
    </SafeAreaView>
  );
};

export default Browse;
