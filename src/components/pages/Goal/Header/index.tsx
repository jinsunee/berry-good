import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import EditSvg from '../../../../assets/svgs/edit.svg';
import LeftArrowSvg from '../../../../assets/svgs/left-arrow.svg';
import ShareSvg from '../../../../assets/svgs/share.svg';
import {useGoalId} from '../../../../hooks/useGoalId';
import {HomeStackNavigationType} from '../../../navigators/HomeStackNavigator';

export default function Header() {
  const theme = useTheme();
  const {navigate, goBack} = useNavigation<HomeStackNavigationType>();
  const goalId = useGoalId();

  return (
    <Container>
      <StyledButton onPress={goBack}>
        <LeftArrowSvg fill={theme.text} width={20} height={20} />
      </StyledButton>
      <Row>
        <StyledButton>
          <ShareSvg fill={theme.text} />
        </StyledButton>
        <StyledButton onPress={() => navigate('EditGoal', {id: goalId})}>
          <EditSvg fill={theme.text} />
        </StyledButton>
      </Row>
    </Container>
  );
}

const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 10px 20px;
`;

const StyledButton = styled.TouchableOpacity`
  padding: 7px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme}) => theme.secondary[1]};
`;

const Row = styled.View`
  flex-direction: row;
  gap: 5px;
`;
