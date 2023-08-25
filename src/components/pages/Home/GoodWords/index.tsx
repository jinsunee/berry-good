import React from 'react';
import {styled} from 'styled-components/native';

export default function GoodWords() {
  // TODO: GoodWords를 랜덤으로 보여주기
  return (
    <Container>
      <Title>
        꿈은 실현된다. {'\n'}
        실현 가능성이 없으면, 자연이 우리가 꿈 을 갖도록 부추기지 않을 것이다.
      </Title>
    </Container>
  );
}

const Container = styled.View`
  margin: 0 20px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
`;
