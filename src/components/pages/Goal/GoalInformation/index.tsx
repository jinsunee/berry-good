import React from 'react';
import styled from 'styled-components/native';
import TageSvg from '../../../../assets/svgs/tape.svg';
import {calculateDays} from '../../../../utils/date';
import {Spacing} from '../../../shared/Spacing';
import {useGoal} from '../hooks/useGoal';

export default function GoalInformation() {
  const {data: goal} = useGoal();

  const getDDay = () => {
    if (!goal?.endAt) {
      return '';
    }

    const {startAt, endAt} = goal!;

    const days = calculateDays(startAt, endAt!);

    console.log('days', days);
    if (!days) {
      return '';
    }

    return (
      <Row>
        <DateText>{`⛳️${days.daysPassed}일차`}</DateText>
        <TotalDateText>{` / ${days.totalDays}일`}</TotalDateText>
      </Row>
    );
  };

  return (
    <GoalContainer>
      <TageSvg style={{position: 'absolute', top: -20, left: '50%'}} />
      <Information>
        {getDDay()}
        <Spacing size={8} />
        <GoalText>{goal?.title}</GoalText>
      </Information>
      {goal?.imgs?.length && <StyledImage source={{uri: goal.imgs[0]}} />}
    </GoalContainer>
  );
}

const GoalContainer = styled.Pressable`
  border: 1px solid ${({theme}) => theme.secondary[1]};
  padding: 15px;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
  border-radius: 20px;
`;

const DateText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.text};
`;

const TotalDateText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;

const GoalText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({theme}) => theme.text};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const Information = styled.View`
  flex: 1;
`;

const StyledImage = styled.Image`
  width: 67px;
  height: 67px;
  border-radius: 20px;
`;
