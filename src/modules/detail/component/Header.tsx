import React from 'react';
import { View } from 'react-native';
import { BackIcon, DotDotDot } from '@assets/index';

import { useNavigation } from '@react-navigation/native';
import { Black, White } from '../../../styles/colors';

interface IHeaderProps {
  whiteColor?: boolean,
}

const Header = (props: IHeaderProps) => {
  const { whiteColor } = props;
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <BackIcon fill={whiteColor ? White : Black} onPress={goBack} />
      <DotDotDot fill={whiteColor ? White : Black} />
    </View>
  );
};

export default Header;
