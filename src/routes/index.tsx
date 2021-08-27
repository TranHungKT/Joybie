import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabRoute from './TabRoute';

function AppRoute() {
  return (
    <NavigationContainer>
      <TabRoute />
    </NavigationContainer>
  );
}

export default AppRoute;
