import React from 'react';
import styled from 'styled-components/native';
import {useGoals} from '../hooks/useGoals';
import GoalItem from './GoalItem';

export default function Goals() {
  const {data: goals} = useGoals();

  return (
    <Container>
      {goals?.map(goal => (
        <GoalItem key={goal.id} {...goal} />
      ))}
    </Container>
  );
}

const Container = styled.ScrollView`
  margin: 20px;
`;
