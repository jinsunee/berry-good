// styled.d.ts
import 'styled-components';
import {Theme} from './src/utils/colors'; // Your theme type definition

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
