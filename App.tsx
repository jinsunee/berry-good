import firebase from '@react-native-firebase/app';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {firebaseConfig} from './firebaseConfig';
import Navigators from './src/components/navigators';
import Providers from './src/components/providers';
import {toastConfig} from './src/components/shared/toastConfig';

const config = {
  name: 'SECONDARY_APP',
};
firebase.initializeApp(firebaseConfig, config);

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Providers>
        <Navigators />
        <Toast config={toastConfig} />
      </Providers>
    </GestureHandlerRootView>
  );
}
