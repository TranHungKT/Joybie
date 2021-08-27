/* eslint-disable global-require */
import React from 'react';
import {
  ImageSourcePropType,
  Image, FlatList, ListRenderItemInfo,
  Text,
  View,
} from 'react-native';

import styles from './styles';

const data : Item[] = [
  {
    image: require('../../../assets/image/Icon_Whatsapp.png'),
    name: 'Whatsapp',
  },
  {
    image: require('../../../assets/image/Icon_Message.png'),
    name: 'Messages',
  },
  {
    image: require('../../../assets/image/Icon_FB.png'),
    name: 'Facebook',
  },
  {
    image: require('../../../assets/image/Icon_Gmail.png'),
    name: 'Email',
  },
  {
    image: require('../../../assets/image/Icon_shareLink.png'),
    name: 'Copy Link',
  },
];

interface Item {
  image: ImageSourcePropType,
  name: string
}

const Social = () => {
  const renderItem = ({ item, index }: ListRenderItemInfo<Item>) => (
    <View key={index}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      keyExtractor={({ index }: any) => index}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Social;
