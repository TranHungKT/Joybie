import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import store from '../redux/Store';
import BottomTabRoute from './BottomTabRoute';
import { RootStackParams } from './RoutesParams';
import SplashScreen from '../modules/splash';

const Stack = createStackNavigator<RootStackParams>();

function AppRoute() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="BottomTabRoute" component={BottomTabRoute} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default AppRoute;
