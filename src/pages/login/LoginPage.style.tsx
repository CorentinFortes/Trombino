import styled from 'styled-components/native';

export const LoginPageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: 100px;
  background-color: #fffafa;
`;

export const ConnexionContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 25px;
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

export const GreyText = styled.Text`
  font-size: 12px;
  font-family: 'Rubik_Light';
  color: #1e1e1e;
  opacity: 0.4;
`;

export const CreditsContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: clolumn;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 35px;
`;
