import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { MyTopTabBar } from '@components/index';
import Updates from '@modules/social/updates';
import Messages from '@modules/social/messages';
import { NavigatorConstants } from '../constants/index';
import { Colors } from '../styles/index';

import { SocialTabRouteParams } from './RoutesParams';

const SocialTabNavigator = createMaterialTopTabNavigator<SocialTabRouteParams>();

const SocialTopTabRoute = () => (
  <SocialTabNavigator.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarActiveTintColor: Colors.Purple, // active icon color
      tabBarInactiveTintColor: Colors.Black, // inactive icon color
    }}
    tabBar={(props) => <MyTopTabBar {...props} />}
  >
    <SocialTabNavigator.Screen
      name={NavigatorConstants.Updates}
      component={Updates}
    />
    <SocialTabNavigator.Screen
      name={NavigatorConstants.Messages}
      component={Messages}
    />
  </SocialTabNavigator.Navigator>
);

export default SocialTopTabRoute;
