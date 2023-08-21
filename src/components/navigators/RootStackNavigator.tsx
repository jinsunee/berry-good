import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import FirstStack from './FirstStackNavigator';
import HomeStack from './HomeStackNavigator';

export type HomeStackParamList = {
  FirstStack: undefined;
  HomeStack: undefined;
};

export type HomeStackNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'HomeStack'
>;

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstStack"
        component={FirstStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
