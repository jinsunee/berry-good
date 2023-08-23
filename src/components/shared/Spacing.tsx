import styled from 'styled-components/native';

export const Spacing = styled.View<{size: number}>`
  width: 100%;
  height: ${({size}) => size}px;
`;
