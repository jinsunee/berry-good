import firebase from '@react-native-firebase/app';
import React from 'react';
import {firebaseConfig} from './firebaseConfig';
import Navigators from './src/components/navigators';
import Providers from './src/components/providers';

const config = {
  name: 'SECONDARY_APP',
};
firebase.initializeApp(firebaseConfig, config);

export default function App() {
  return (
    <Providers>
      <Navigators />
    </Providers>
  );
}
