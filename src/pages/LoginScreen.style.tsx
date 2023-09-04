import styled from 'styled-components/native';

export const LoginPageContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 230px;
    padding-top: 120px;
`;

export const ConnexionContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 25px;
    padding-top: 10px;
`;

export const LoginInput = styled.TextInput`
    width: 80%;
    height: 40px;
    border: 1px solid #9A9797;
    border-radius: 20px;
    padding: 10px;
`;

export const ConnectButton = styled.TouchableOpacity`
    background-color: #1E1E1E;
    border-radius: 10px;
`;

export const ConnectButtonText = styled.Text`
    color: #FAFAFF;
    font-size: 20px;
    padding: 10px;
    font-family: 'Rubik';
    font-weight: 500;
    padding: 8px 33px;
`;

export const GreyText = styled.Text`
    font-size: 12px;
    font-family: 'Rubik';
    font-weight: 300;
    color: #1E1E1E;
    opacity: 0.4;
`;

export const CreditsContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
