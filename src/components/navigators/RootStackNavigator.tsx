import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {userAtom} from '../../states';
import FirstStack from './FirstStackNavigator';
import HomeStack from './HomeStackNavigator';

export type RootStackParamList = {
  FirstStack: undefined;
  HomeStack: undefined;
};

export type RootStackNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'HomeStack'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const [_, setCurrentUser] = useRecoilState(userAtom);

  useEffect(() => {
    if (firebase.apps.length === 0) {
      return;
    }
    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (user) {
        // Fetch user information from the API
        // const response = await fetch('http://localhost:3000/api/users', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({userId: user.uid}),
        // });
        // const data = await response.json();
        // // Now, you can set this data to the recoil state or handle it as required.
        // setCurrentUser(data);
      } else {
        // User is signed out.
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, [setCurrentUser]);

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
