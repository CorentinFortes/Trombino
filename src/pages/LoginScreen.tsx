import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Logo } from '../svg/Logo';
import {
  ConnectButton,
  ConnectButtonText,
  ConnexionContainer,
  CreditsContainer,
  GreyText,
  LoginInput,
  LoginPageContainer,
} from './LoginScreen.style';

function LoginScreen() {
  return (
    <LoginPageContainer>
      <Logo />
      <ConnexionContainer>
        <LoginInput placeholder="E-mail" />
        <LoginInput placeholder="Password" />
        <ConnectButton>
          <ConnectButtonText>Connect</ConnectButtonText>
        </ConnectButton>
        <TouchableOpacity>
          <GreyText>Forgot password ?</GreyText>
        </TouchableOpacity>
      </ConnexionContainer>
      <CreditsContainer>
        <GreyText>Trombino</GreyText>
        <GreyText>1.0</GreyText>
      </CreditsContainer>
    </LoginPageContainer>
  );
}

export default LoginScreen;
