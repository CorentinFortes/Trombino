import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Input } from '../../components/Input';
import { LockIcon } from '../../svg/Lock';
import { Logo } from '../../svg/Logo';
import { UserIcon } from '../../svg/User';
import {
  ConnectButton,
  ConnectButtonText,
  ConnexionContainer,
  CreditsContainer,
  GreyText,
  LoginPageContainer,
} from './LoginScreen.style';
import {
  GetEmployee,
  GetEmployeeImage,
  GetEmployees,
  Login,
  getLeaders,
  getMe,
} from '../../api/api';

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
        <Input
          icon={<UserIcon />}
          type="text"
          placeholder="E-mail"
          onChangeText={setEmail}
        />
        <Input
          icon={<LockIcon />}
          type="password"
          placeholder="Password"
          onChangeText={setPassword}
        />
        <ConnectButton onPress={() => handleLogin(email, password)}>
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
