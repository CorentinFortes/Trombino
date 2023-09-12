import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const ButtonContainer = styled(Button)<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#1E1E1E'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<{ color?: string }>`
  font-family: 'Rubik_Medium';
  font-size: 16px;
  color: ${({ color }) => color || '#fff'};
  text-align: center;
`;
