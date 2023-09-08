// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage, HomePage } from '../../pages';
import { ProfilePage } from '../../pages/profile/ProfilePage.component';
import { TrombinoscopePage } from '../../pages/trombinoscope/TrombinoscopePage';
import { EmailPage } from '../../pages/email/EmailPage.component';
import { ChatPage } from '../../pages/chat/ChatPage.component';
import { EmployeeDetail } from '../../api/api';
import { CurrentChat } from '../../pages/currentChat/CurrentChat.component';

export type RootStackParamList = {
  Home: { token: string };
  Login: undefined;
  Settings: undefined;
  Profile: {
    token: string;
    id?: number;
  };
  Trombinoscope: {
    token: string;
  };
  Email: { token: string; unread?: number };
  Chat: { token: string; targetEmployee: EmployeeDetail; fromChat: boolean };
  CurrentChat: { token: string };
};

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Trombinoscope" component={TrombinoscopePage} />
        <Stack.Screen name="Email" component={EmailPage} />
        <Stack.Screen name="Chat" component={ChatPage} />
        <Stack.Screen name="CurrentChat" component={CurrentChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
