import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Logo } from '../svg/Logo';
import {
  ConnectButton,
  ConnectButtonText,
  ConnexionContainer,
  CreditsContainer,
  GreyText,
  InputContainer,
  LoginInput,
  LoginPageContainer,
} from './LoginScreen.style';
import { UserIcon } from '../svg/User';
import { LockIcon } from '../svg/Lock';

function LoginScreen() {
  return (
    <LoginPageContainer>
      <Logo />
      <ConnexionContainer>
        <InputContainer>
          <UserIcon />
          <LoginInput placeholder="E-mail" autoCapitalize="none" />
        </InputContainer>
        <InputContainer>
          <LockIcon />
          <LoginInput
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </InputContainer>
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
