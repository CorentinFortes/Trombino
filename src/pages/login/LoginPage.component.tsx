import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import * as Location from 'expo-location';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Login } from '../../api/api';
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

type ProfileProps = StackScreenProps<RootStackParamList, 'Login'>;

export const LoginPage: React.FC<ProfileProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>('oliver.lewis@masurao.jp');
  const [password, setPassword] = React.useState<string>('password');
  const [token, setToken] = React.useState<string | null>('');
  const [location, setLocation] = React.useState<Location.LocationObject>();

  async function handleLogin(email: string, password: string) {
    setToken(null);
    Login(email, password).then(async (res) => {
      if (res) {
        const tokenFromStorage = await AsyncStorage.getItem('token');
        setToken(tokenFromStorage);
      } else {
        setToken(null);
        const error = await AsyncStorage.getItem('error');
        if (error === '401') alert('Wrong email or password, please try again');
        else alert('An error occured, please try again');
      }
    });
  }

  React.useEffect(() => {
    if (token) {
      navigation.navigate('Home', { token });
    }
  }, [token]);

  React.useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }

        const locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);
        AsyncStorage.setItem(
          'lat',
          JSON.stringify(locationData.coords.latitude),
        );
        AsyncStorage.setItem(
          'long',
          JSON.stringify(locationData.coords.longitude),
        );
      } catch (error) {
        console.error('Error getting location:', error);
      }
    })();
  }, []);

  return (
    <LoginPageContainer>
      <Logo />
      <ConnexionContainer>
        <InputContainer>
          <Input
            icon={<UserIcon />}
            type="text"
            placeholder="E-mail"
            onChangeText={setEmail}
            value={email}
          />
          <Input
            icon={<LockIcon />}
            type="password"
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
        </InputContainer>
        <ConnectButton onPress={() => handleLogin(email, password)}>
          <ConnectButtonText>Connect</ConnectButtonText>
        </ConnectButton>
      </ConnexionContainer>
      <CreditsContainer>
        <GreyText>Trombino</GreyText>
        <GreyText>1.0</GreyText>
      </CreditsContainer>
    </LoginPageContainer>
  );
};
