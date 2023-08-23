import {atom} from 'recoil';

type ThemeType = 'light' | 'dark';
const themeAtom = atom<ThemeType>({
  key: 'theme',
  default: 'light',
});

export default themeAtom;
