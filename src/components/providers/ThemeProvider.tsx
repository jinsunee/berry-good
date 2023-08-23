import React from 'react';
import {useRecoilValue} from 'recoil';
import {ThemeProvider as SharedThemeProvider} from 'styled-components/native';
import themeAtom from '../../states/theme';
import {darkTheme, lightTheme} from '../../utils/colors';

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({children}: Props) {
  const theme = useRecoilValue(themeAtom);

  const themeObject = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <SharedThemeProvider theme={themeObject}>{children}</SharedThemeProvider>
  );
}
