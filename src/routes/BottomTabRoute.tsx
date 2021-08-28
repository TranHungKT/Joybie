import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MyTabBar } from '@components/index';
import Search from '@modules/search';
import Profile from '@modules/profile';
import { NavigatorConstants } from '../constants/index';
import { Colors } from '../styles/index';

import { BottomTabRouteParams } from './RoutesParams';
import HomeTopTabBar from './HomeTopTabRoute';
import SocialTopTabBar from './SocialTopTabRoute';

const TabNavigator = createBottomTabNavigator<BottomTabRouteParams>();

const BottomTabRoute = () => (
  <TabNavigator.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarActiveTintColor: Colors.Purple, // active icon color
      tabBarInactiveTintColor: Colors.Black, // inactive icon color
      headerShown: false,
    }}
    tabBar={(props) => <MyTabBar {...props} />}
  >
    <TabNavigator.Screen
      name={NavigatorConstants.Home}
      component={HomeTopTabBar}
    />
    <TabNavigator.Screen
      name={NavigatorConstants.Search}
      component={Search}
    />
    <TabNavigator.Screen
      name={NavigatorConstants.Social}
      component={SocialTopTabBar}
    />
    <TabNavigator.Screen
      name={NavigatorConstants.Profile}
      component={Profile}
    />
  </TabNavigator.Navigator>
);

export default BottomTabRoute;
