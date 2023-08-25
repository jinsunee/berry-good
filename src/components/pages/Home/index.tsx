import React from 'react';
import {SafeAreaView} from 'react-native';
import GoodWords from './GoodWords';
import Header from './Header';

export default function Home() {
  return (
    <SafeAreaView>
      <Header />
      <GoodWords />
    </SafeAreaView>
  );
}
