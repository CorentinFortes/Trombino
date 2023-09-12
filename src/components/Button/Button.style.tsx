import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const ButtonContainer = styled(Button)<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 16px;
  text-align: center;
`;
