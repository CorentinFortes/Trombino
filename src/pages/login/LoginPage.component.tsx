import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
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
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FIRESTORE_DB } from '../../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

type ProfileProps = StackScreenProps<RootStackParamList, 'Login'>;

export const LoginPage: React.FC<ProfileProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>('oliver.lewis@masurao.jp');
  const [password, setPassword] = React.useState<string>('password');
  const [token, setToken] = React.useState<string>('');
  const [location, setLocation] = React.useState<Location.LocationObject>();

  function handleLogin(email: string, password: string) {
    Login(email, password).then((token) => {
      setToken(token!);
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
        await AsyncStorage.getItem('token').then((token) => {
          if (token) {
            navigation.navigate('Home', { token });
          }
        });
      } catch (error) {
        console.error('Error getting location:', error);
      }
    })();
  }, []);

  const testFirebase = async () => {
    const doc = addDoc(collection(FIRESTORE_DB, 'message'), {
      sender: 'oliver',
      done: false,
    });
    console.log(`doc: ${doc}`);
  };

  return (
    <LoginPageContainer>
      <Logo />
      <ConnexionContainer>
        <InputContainer>
          <View>
            <Button title="Try to crash" onPress={() => testFirebase()} />
          </View>
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
