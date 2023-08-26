import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {Goal} from '../../../../types';
import {HomeStackNavigationType} from '../../../navigators/HomeStackNavigator';

export default function GoalItem({title, id}: Goal) {
  const {navigate} = useNavigation<HomeStackNavigationType>();

  return (
    <StyledPressable onPress={() => navigate('Goal', {id})}>
      <Image source={require('../../../../assets/images/flag.png')} />
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
}

const StyledPressable = styled.Pressable`
  border-radius: 30px;
  background-color: #f8f8f8;
  padding: 20px;
  flex-direction: row;
  gap: 10px;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 16px;
  font-weight: bold;
  flex: 1;
`;
