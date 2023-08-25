import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';
import {useTheme} from 'styled-components';
import LeftArrowSvg from '../../assets/svgs/left-arrow.svg';
import {userAtom} from '../../states';
import WebViewScreen from '../pages/WebViewScreen';
import FirstStack from './FirstStackNavigator';
import HomeStack from './HomeStackNavigator';

export type RootStackParamList = {
  FirstStack: undefined;
  HomeStack: undefined;
  WebView: {url: string; title?: string};
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

  const headerLeft = React.useCallback(() => <HeaderLeft />, []);

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
      <Stack.Screen
        name="WebView"
        component={WebViewScreen}
        options={({route}) => ({
          headerTitle: route.params?.title || 'Default Title',
          headerLeft,
        })}
      />
    </Stack.Navigator>
  );
}

function HeaderLeft() {
  const theme = useTheme();
  const {goBack} = useNavigation();

  return (
    <TouchableOpacity onPress={() => goBack()}>
      <LeftArrowSvg fill={theme.text} width={12} height={20} />
    </TouchableOpacity>
  );
}
