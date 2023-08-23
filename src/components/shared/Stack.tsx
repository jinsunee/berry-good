import styled from 'styled-components/native';

export const Stack = styled.View<{
  spacing?: number;
  direction?: 'row' | 'column';
}>`
  display: flex;
  flex-direction: ${({direction}) => direction};
  gap: ${({spacing}) => spacing}px;
`;
