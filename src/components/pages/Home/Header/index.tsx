import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import MenuSvg from '../../../../assets/svgs/menu.svg';
import PlusSvg from '../../../../assets/svgs/plus.svg';
import {HomeStackNavigationType} from '../../../navigators/HomeStackNavigator';

export default function Header() {
  const theme = useTheme();
  const {navigate} = useNavigation<HomeStackNavigationType>();

  return (
    <Container>
      <StyledButton onPress={() => navigate('Setting')}>
        <MenuSvg fill={theme.text} />
      </StyledButton>
      <StyledButton onPress={() => navigate('EditGoal', {})}>
        <PlusButtonCircle>
          <PlusSvg fill={theme.text} />
        </PlusButtonCircle>
      </StyledButton>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const StyledButton = styled.TouchableOpacity`
  padding: 20px;
`;

const PlusButtonCircle = styled.View`
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme}) => theme.secondary[1]};
  padding: 7px 6px 5px 6px;
`;
