import React, { useRef } from 'react';
import {
  Dimensions, Text, TextInput, TouchableOpacity, View, FlatList, ListRenderItemInfo,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { CloseIcon } from '@assets/index';

import Social from './components/Social';

import styles from './styles';
import { Colors } from '../../styles';
import { useAppSelector } from '../../redux/HookRedux';
import { IGetUsersSuccessPayload } from '../../redux/User/interfaces';

const { height } = Dimensions.get('window');

const SlidePanel = () => {
  const refPanel = useRef<SlidingUpPanel>(null);

  const { users } = useAppSelector((state) => state.users);

  const renderItem = ({ item, index }: ListRenderItemInfo<IGetUsersSuccessPayload>) => {
    const { firstName, lastName } = item;
    return (
      <View key={index} style={styles.nameView}>
        <Text>{`${lastName} ${firstName}`}</Text>
      </View>
    );
  };

  return (
    <>
      <TouchableOpacity onPress={() => refPanel.current?.show()}><Text>Heelo</Text></TouchableOpacity>
      <SlidingUpPanel
        ref={refPanel}
        draggableRange={{
          top: height * (3 / 4),
          bottom: 0,
        }}
        containerStyle={styles.slideStyle}
      >
        <>
          <View style={styles.header}>
            <View style={styles.closeIcon}>
              <CloseIcon />

            </View>
            <Text style={styles.title}>Share Challenge</Text>
            <View style={styles.closeIcon} />
          </View>
          <View style={styles.socialView}>
            <Social />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="Search by name or email address"
              style={styles.textInput}
              placeholderTextColor={Colors.Black}
            />
          </View>
          <FlatList
            data={users}
            renderItem={renderItem}
          />
        </>
      </SlidingUpPanel>
    </>
  );
};

export default SlidePanel;
