import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import EditGoal from '../pages/EditGoal';
import Goal from '../pages/Goal';
import Home from '../pages/Home';
import OnboardingChat from '../pages/OnboardingChat';
import Setting from '../pages/Setting';
import UserInformation from '../pages/UserInformation';

export type HomeStackParamList = {
  Home: undefined;
  OnboardingChat: undefined;
  Goal: undefined;
  EditGoal: {id?: string};
  Setting: undefined;
  UserInformation: undefined;
};

export type MainStackNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingChat"
        component={OnboardingChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Goal"
        component={Goal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditGoal"
        component={EditGoal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserInformation"
        component={UserInformation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
