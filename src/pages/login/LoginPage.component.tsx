import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
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
  InputContainer,
  LoginPageContainer,
} from './LoginPage.style';
import {
  GetEmployee,
  GetEmployeeImage,
  GetEmployees,
  Login,
  getLeaders,
  getMe,
} from '../../api/api';

type ProfileProps = StackScreenProps<RootStackParamList, 'Login'>;

export const LoginPage: React.FC<ProfileProps> = ({ navigation }) => {
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
          <Input icon={<UserIcon />} type="text" placeholder="E-mail" />
          <Input icon={<LockIcon />} type="password" placeholder="Password" />
        </InputContainer>
        {/* <ConnectButton onPress={() => handleLogin(email, password)}> */}
        <ConnectButton onPress={() => navigation.navigate('Home')}>
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
};
