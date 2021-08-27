import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { MyTopTabBar } from '@components/index';
import Browse from '@modules/home/browse';
import Watch from '@modules/home/watch';
import { NavigatorConstants } from '../constants/index';
import { Colors } from '../styles/index';

import { HomeTabRouteParams } from './RoutesParams';

const HomeTabNavigator = createMaterialTopTabNavigator<HomeTabRouteParams>();

const HomeTopTabRoute = () => (
  <HomeTabNavigator.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarActiveTintColor: Colors.Purple, // active icon color
      tabBarInactiveTintColor: Colors.Black, // inactive icon color
    }}
    tabBar={(props) => <MyTopTabBar {...props} />}
  >
    <HomeTabNavigator.Screen
      name={NavigatorConstants.Browse}
      component={Browse}
    />
    <HomeTabNavigator.Screen
      name={NavigatorConstants.Watch}
      component={Watch}
    />
  </HomeTabNavigator.Navigator>
);

export default HomeTopTabRoute;
