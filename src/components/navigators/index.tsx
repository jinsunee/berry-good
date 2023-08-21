import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStackNavigator from './RootStackNavigator';

export default function Navigators() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
