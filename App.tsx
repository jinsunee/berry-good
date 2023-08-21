import React from 'react';
import Navigators from './src/components/navigators';
import Providers from './src/components/providers';

export default function App() {
  return (
    <Providers>
      <Navigators />
    </Providers>
  );
}
