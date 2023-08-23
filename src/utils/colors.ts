const colors = {
  white: '#fff',
  dark: '#474747',
  gray: ['#F2F2F2', '#CBCBCB', '#8B8B8B'],
};

const lightTheme = {
  background: colors.white,
  text: colors.dark,
  secondary: colors.gray,
};

const darkTheme = {
  background: colors.dark,
  text: colors.white,
  secondary: colors.gray,
};

type Theme = typeof lightTheme;

export {darkTheme, lightTheme};
export type {Theme};
export default colors;
