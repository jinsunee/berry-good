import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import ReactQueryProvider from './ReactQueryProvider';
import {ThemeProvider} from './ThemeProvider';

interface Props {
  children: React.ReactNode;
}

export default function Providers({children}: Props) {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <ReactQueryProvider>
          <ThemeProvider>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
