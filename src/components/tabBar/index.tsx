// External Dependencies
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {
  TabNavigationState,
  ParamListBase,
  NavigationHelpers,
} from '@react-navigation/native';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/src/types';

import { HomeIcon, InfoIcon } from '@assets/index';
import { Colors } from '../../styles/index';
import { NavigatorConstants } from '../../constants/index';
import styles from './styles';

interface MyTabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const MyTabBar = ({ state, descriptors, navigation }: MyTabBarProps) => {
  const [translateValue] = useState(new Animated.Value(0));
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;

  React.useEffect(() => {
    Animated.spring(translateValue, {
      toValue: state.index * tabWidth,
      velocity: 10,
      speed: 6,
      bounciness: 4,
      useNativeDriver: true,
    }).start();
  }, [state.index, tabWidth, translateValue]);

  return (
    <View style={styles.tabContainer}>
      <Animated.View
        style={[
          styles.slider,
          {
            transform: [{ translateX: translateValue }],
            width: tabWidth,
          },
        ]}
      />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel.toString() : options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let icon;
        switch (label) {
          case NavigatorConstants.Home:
            icon = <HomeIcon width={35} height={35} fill={isFocused ? Colors.Primary : Colors.Black} />;
            break;
          case NavigatorConstants.Search:
            icon = <InfoIcon width={30} height={30} fill={isFocused ? Colors.Primary : Colors.Black} />;
            break;
          case NavigatorConstants.Social:
            icon = <HomeIcon width={35} height={35} fill={isFocused ? Colors.Primary : Colors.Black} />;
            break;
          case NavigatorConstants.Profile:
            icon = <HomeIcon width={35} height={35} fill={isFocused ? Colors.Primary : Colors.Black} />;
            break;
          default:
            icon = <HomeIcon width={35} height={35} fill={isFocused ? Colors.Primary : Colors.Black} />;
            break;
        }

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.touchableContainer}
          >
            <View style={styles.icon}>
              {icon}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
