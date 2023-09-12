import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  flex-direction: row;
  border: 2px solid #c2bfbf;
  border-radius: 10px;
  width: 100%;
  padding: 10px 15px;
  gap: 10px;
`;

export const LoginInput = styled(TextInput)`
  font-family: 'Rubik_Light';
  width: 100%;
  color: #1e1e1e;
  width: 100%;
`;
