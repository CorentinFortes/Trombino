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
import { GetEmployee, GetEmployeeImage, GetEmployees, Login, getLeaders, getMe } from '../api/api';

function LoginScreen() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [token, setToken] = React.useState<string>('');

  function handleLogin(email: string, password: string) {
    Login(email, password).then((token) => {
      setToken(token!);
    });
  }

  return (
    <LoginPageContainer>
      <Logo />
      <ConnexionContainer>
        <InputContainer>
          <UserIcon />
          <LoginInput
            placeholder="E-mail"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
        </InputContainer>
        <InputContainer>
          <LockIcon />
          <LoginInput
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={setPassword}
          />
        </InputContainer>
        <ConnectButton>
          <ConnectButtonText onPress={() => handleLogin(email, password)}>
            Connect
          </ConnectButtonText>
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
