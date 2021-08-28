import React, { useRef, useState } from 'react';
import {
  Dimensions, Text, TextInput, TouchableOpacity, View, FlatList, ListRenderItemInfo, Image,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { CloseIcon } from '@assets/index';
import FastImage from 'react-native-fast-image';
import Social from './components/Social';

import styles from './styles';
import { Colors } from '../../styles';
import { useAppSelector } from '../../redux/HookRedux';
import { IGetUsersSuccessPayload } from '../../redux/User/interfaces';

const { height } = Dimensions.get('window');

interface SlidePanelProps {
  refPanel: React.RefObject<SlidingUpPanel>
}

const keyExtractor = (item: IGetUsersSuccessPayload) => item.id;

type SendState = 'unsend' | 'send' | 'sent';

const ShareButton = () => {
  const [sendState, setSendState] = useState<SendState>('unsend');

  const onPressHandler = () => {
    if (sendState === 'unsend') {
      setSendState('send');
      setTimeout(() => setSendState('sent'), 2000);
    }
  };

  const getButtonViewStyle = () => {
    if (sendState === 'unsend') {
      return styles.unsendButtonView;
    }
    if (sendState === 'send') {
      return styles.sendButtonView;
    }
    return styles.sentButtonView;
  };

  const getButtonTextStyle = () => {
    if (sendState === 'unsend') {
      return styles.unsendButtonText;
    }
    if (sendState === 'send') {
      return styles.sendButtonText;
    }
    return styles.sentButtonText;
  };

  const getText = () => {
    if (sendState === 'unsend') {
      return 'Send';
    }
    if (sendState === 'send') {
      return 'Sent';
    }
    return 'View Chat >';
  };
  return (
    <TouchableOpacity style={getButtonViewStyle()} onPress={onPressHandler}>
      <Text style={getButtonTextStyle()}>{getText()}</Text>
    </TouchableOpacity>
  );
};

const SlidePanel = (props: SlidePanelProps) => {
  const { refPanel } = props;
  const { users } = useAppSelector((state) => state.users);

  const renderItem = ({ item, index }: ListRenderItemInfo<IGetUsersSuccessPayload>) => {
    const { firstName } = item;

    return (
      <View key={index} style={styles.nameView}>
        <View style={styles.rowView}>
          <FastImage source={{ uri: item.avatar }} style={styles.image} />
          <Text style={styles.firstName}>{firstName}</Text>
        </View>
        <ShareButton />
      </View>
    );
  };

  return (
    <>
      <SlidingUpPanel
        ref={refPanel}
        draggableRange={{
          top: height * (2.5 / 4),
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
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      </SlidingUpPanel>
    </>
  );
};

export default SlidePanel;
