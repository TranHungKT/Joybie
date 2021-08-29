// External Dependencies
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
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
  MaterialTopTabDescriptorMap,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs/lib/typescript/src/types';
import { Colors } from '../../styles/index';
import { NavigatorConstants } from '../../constants/index';
import styles from './styles';

interface MyTabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: MaterialTopTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, MaterialTopTabNavigationEventMap>;
}

const MyTopTabBar = ({ state, descriptors, navigation }: MyTabBarProps) => {
  const [translateValue] = useState(new Animated.Value(0));
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;

  const [colors, setColors] = useState({
    bgr: Colors.White,
    text: Colors.Black,
    slide: Colors.Purple,
  });

  useEffect(() => {
    Animated.spring(translateValue, {
      toValue: state.index * (tabWidth / 1.75),
      velocity: 10,
      speed: 6,
      bounciness: 4,
      useNativeDriver: true,
    }).start();

    if (state.routes[state.index].name === 'Watch') {
      setColors({
        bgr: Colors.Purple,
        text: Colors.White,
        slide: Colors.White,
      });
    } else {
      setColors({
        bgr: Colors.White,
        text: Colors.Black,
        slide: Colors.Purple,
      });
    }
  }, [state.index, tabWidth, translateValue]);

  return (
    <View style={{ backgroundColor: colors.bgr }}>
      <View style={{ backgroundColor: colors.bgr, ...styles.tabContainer }}>
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

          let tabLabel;
          switch (label) {
            case NavigatorConstants.Browse:
              tabLabel = <Text style={{ color: colors.text, ...styles.textLabel }}>Browse</Text>;
              break;
            case NavigatorConstants.Watch:
              tabLabel = <Text style={{ color: colors.text, ...styles.textLabel }}>Watch</Text>;
              break;
            case NavigatorConstants.Updates:
              tabLabel = <Text style={{ color: colors.text, ...styles.textLabel }}>Updates</Text>;
              break;
            case NavigatorConstants.Messages:
              tabLabel = <Text style={{ color: colors.text, ...styles.textLabel }}>Messages</Text>;
              break;
            default:
              tabLabel = <Text style={{ color: colors.text, ...styles.textLabel }}>Browse</Text>;
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
              <View style={styles.tabLabel}>
                {tabLabel}
              </View>
            </TouchableOpacity>
          );
        })}
        <Animated.View
          style={[
            styles.slider,
            {
              transform: [{ translateX: translateValue }],
              width: tabWidth / 4,
              backgroundColor: colors.slide,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default MyTopTabBar;
