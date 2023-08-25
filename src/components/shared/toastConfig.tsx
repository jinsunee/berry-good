import React from 'react';
import styled from 'styled-components/native';

export const toastConfig = {
  plain: ({text2}: any) => <PlainToast text={text2} />,
};

function PlainToast({text}: {text: string}) {
  return (
    <Container>
      <StyledText>✋ {text}</StyledText>
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({theme}) => theme.text};
  margin: 20px;
  align-self: stretch;
  padding: 15px 20px;
  border-radius: 20px;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.background};
  font-size: 16px;
  font-weight: 500;
`;
