import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import AddUserInformation from '../pages/AddUserInformation';
import FirstMain from '../pages/FirstMain';

export type FirstStackParamList = {
  FirstMain: undefined;
  AddUserInformation: undefined;
};

export type FirstStackNavigationType = NativeStackNavigationProp<
  FirstStackParamList,
  'FirstMain'
>;

const Stack = createNativeStackNavigator<FirstStackParamList>();

export default function FirstStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstMain"
        component={FirstMain}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddUserInformation"
        component={AddUserInformation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
