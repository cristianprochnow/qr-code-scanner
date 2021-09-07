import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './pages/Home';
import { Scanner } from './pages/Scanner';
import { WebViewer } from './pages/WebView';

export function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Scanner" component={Scanner} />
        <Screen name="WebViewer" component={WebViewer} />
      </Navigator>
    </NavigationContainer>
  );
}