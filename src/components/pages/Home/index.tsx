import React from 'react';
import styled from 'styled-components/native';
import Goals from './Goals';
import GoodWords from './GoodWords';
import Header from './Header';

export default function Home() {
  return (
    <StyledSafeAreaView>
      <Header />
      <GoodWords />
      <Goals />
    </StyledSafeAreaView>
  );
}

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;
