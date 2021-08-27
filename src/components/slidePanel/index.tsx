import React, { useRef } from 'react';
import {
  Dimensions, Text, TextInput, TouchableOpacity, View, FlatList, ListRenderItemInfo, Image,
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
    const { firstName } = item;
    return (
      <View key={index} style={styles.nameView}>
        <View style={styles.rowView}>
          <Image source={{ uri: item.avatar }} style={styles.image} />
          <Text style={styles.firstName}>{firstName}</Text>
        </View>
        <TouchableOpacity style={styles.buttonView}>
          <Text style={styles.send}>Send</Text>
        </TouchableOpacity>
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
        allowDragging={false}
      >
        <>
          <View style={styles.header}>
            <View style={styles.closeIcon}>
              <CloseIcon onPress={() => refPanel.current?.hide()} />

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
          <View style={styles.listView}>
            <FlatList
              data={users}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      </SlidingUpPanel>
    </>
  );
};

export default SlidePanel;
