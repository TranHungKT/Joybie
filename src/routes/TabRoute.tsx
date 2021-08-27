import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@modules/home/index';

import { TabRouteParams } from './RoutesParams';

const TabNavigator = createBottomTabNavigator<TabRouteParams>();

const TabRoute = () => <></>;

export default TabRoute;
