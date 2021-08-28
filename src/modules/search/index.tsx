/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ImageSourcePropType,
  ImageBackground,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { Black } from '../../styles/colors';
import SearchIcon from '../../assets/svg/SearchIcon';
import styles from './styles';

interface Item {
  image: ImageSourcePropType,
  name: string
}

const Search = () => {
  const dataList: Item[] = [
    {
      image: require('../../assets/image/Search_Cooking.jpg'),
      name: 'Cooking',
    },
    {
      image: require('../../assets/image/Search_Craft.jpg'),
      name: 'Craft',
    },
    {
      image: require('../../assets/image/Search_Deco.jpg'),
      name: 'Home Deco',
    },
    {
      image: require('../../assets/image/Search_Fashion.jpg'),
      name: 'Fashion',
    },
    {
      image: require('../../assets/image/Search_Fitness.jpg'),
      name: 'Fitness',
    },
    {
      image: require('../../assets/image/Search_Skincare.jpg'),
      name: 'Skincare',
    },
    {
      image: require('../../assets/image/Search_Wellness.jpg'),
      name: 'Wellness',
    },
  ];

  const [data, setData] = useState<Item[]>(dataList);
  const [input, setInput] = useState('');

  useEffect(() => {
    const result: Item[] = dataList.filter((value) => value.name.toLowerCase().includes(input.toLowerCase()));
    setData(result);
  }, [input]);

  return (
    <SafeAreaView style={styles.centerContainer}>
      <View style={styles.screen}>
        <TouchableWithoutFeedback style={styles.screen} onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.contentWrapper}>
            <View style={styles.searchSection}>
              <View style={styles.searchIcon}>
                <SearchIcon width={24} height={24} fill={Black} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Search"
                value={input}
                onChangeText={setInput}
              />
            </View>
            <Text style={styles.headingText}>Browse By Category</Text>
            <MasonryList
              horizontal={false}
              showsVerticalScrollIndicator={false}
              data={data}
              numColumns={2}
              renderItem={({ item, i }) => (
                <ImageBackground key={i} source={item.image} style={styles.image} imageStyle={styles.imageStyle}>
                  <View style={styles.blackOpac} />
                  <Text style={styles.text}>{item.name}</Text>
                </ImageBackground>
              )}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};
export default Search;
