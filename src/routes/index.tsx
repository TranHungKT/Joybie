import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from '../redux/Store';
import TabRoute from './TabRoute';

function AppRoute() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabRoute />
      </NavigationContainer>
    </Provider>
  );
}

export default AppRoute;
