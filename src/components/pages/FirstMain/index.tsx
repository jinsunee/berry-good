import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import {FirstStackNavigationType} from '../../navigators/FirstStackNavigator';
import {Spacing} from '../../shared/Spacing';

export default function FirstMain() {
  const {navigate} = useNavigation<FirstStackNavigationType>();
  return (
    <StyledSafeAreaView>
      <StyledImage
        source={require('../../../assets/images/first-circles.png')}
      />
      <Wrapper>
        <Title>
          원하는 모습,{'\n'}
          목표 이루기!
        </Title>
        <Spacing size={10} />
        <SubTitle>
          <Bold>베리굿</Bold>은{'\n'}
          여러분의 마음 속에만 있는 목표에{'\n'}
          가까워질 수 있도록{'\n'}
          함께 합니다
        </SubTitle>
        <Spacing size={100} />
      </Wrapper>
      <Center>
        <StartButton onPress={() => navigate('AddUserInformation')}>
          <StartText>시작하기</StartText>
        </StartButton>
      </Center>
    </StyledSafeAreaView>
  );
}

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;

const Wrapper = styled.View`
  padding: 80px 20px 0 20px;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 25px;
  font-weight: bold;
  line-height: 35px;
`;

const Bold = styled.Text`
  font-weight: bold;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.secondary[2]};
  font-weight: 400;
  line-height: 20px;
`;

const StyledImage = styled.Image`
  position: absolute;
`;

const Center = styled.View`
  position: absolute;
  bottom: 100px;
  left: 30%;
`;

const StartButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.text};
  border-radius: 30px;
  padding: 15px 40px;
`;

const StartText = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.background};
  font-size: 16px;
`;
