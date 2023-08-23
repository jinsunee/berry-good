import React from 'react';
import {Pressable} from 'react-native';
import {useRecoilState} from 'recoil';
import styled from 'styled-components/native';
import ShareSvg from '../../../assets/svgs/share.svg';
import themeAtom from '../../../states/theme';

export default function FirstMain() {
  const [theme, setTheme] = useRecoilState(themeAtom);
  return (
    <StyledSafeAreaView>
      <StyledText>FirstMain</StyledText>
      <Pressable
        onPress={() => {
          if (theme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        }}>
        <ShareSvg fill="black" />
        <StyledText> 테마 바꾸기</StyledText>
      </Pressable>
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
