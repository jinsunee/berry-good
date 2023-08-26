import React from 'react';
import styled from 'styled-components/native';
import GoalInformation from './GoalInformation';
import Header from './Header';

export default function Goal() {
  return (
    <StyledSafeAreaView>
      <Header />
      <GoalInformation />
    </StyledSafeAreaView>
  );
}

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;
