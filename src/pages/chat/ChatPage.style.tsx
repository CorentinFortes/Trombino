import styled from 'styled-components/native';

export const PageContainer = styled.View`
  background-color: #fffafa;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px 20px;
  gap: 25px;
`;

export const InputMessage = styled.TextInput`
  font-family: 'Rubik_Medium';
  width: 100%;
  padding-left: 10px;
  color: #1e1e1e;
`;

export const ConnectButton = styled.TouchableOpacity`
  background-color: #1e1e1e;
  border-radius: 10px;
`;

export const ConnectButtonText = styled.Text`
  color: #fafaff;
  font-size: 20px;
  padding: 10px;
  font-family: 'Rubik_Medium';
  font-weight: 500;
  padding: 8px 33px;
`;
