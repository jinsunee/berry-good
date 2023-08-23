import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import ShareSvg from '../../../assets/svgs/share.svg';
import useIsOpen from '../../../hooks/useIsOpen';
import {Dialog} from '../../shared/Dialog';

export default function FirstMain() {
  const {isOpen, toggle} = useIsOpen();

  return (
    <StyledSafeAreaView>
      <StyledText>FirstMain</StyledText>
      <Pressable
        onPress={() => {
          toggle();
        }}>
        <ShareSvg fill="black" />
        <StyledText> 테마 바꾸기</StyledText>
      </Pressable>
      <Dialog isOpen={isOpen} onClose={toggle}>
        <StyledText>기록을 삭제하시겠습니까?</StyledText>
      </Dialog>
    </StyledSafeAreaView>
  );
}

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
`;
