import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import ReactQueryProvider from './ReactQueryProvider';

interface Props {
  children: React.ReactNode;
}

export default function Providers({children}: Props) {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
