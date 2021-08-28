import React from 'react';
import { View, Text } from 'react-native';
import { BackIcon, DotDotDot } from '@assets/index';

import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <BackIcon onPress={goBack} />
      <DotDotDot />
    </View>
  );
};

export default Header;
