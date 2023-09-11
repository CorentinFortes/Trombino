// Navigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { EmployeeDetail } from '../../api/api';
import { HomePage, LoginPage } from '../../pages';
import { ChatPage } from '../../pages/chat/ChatPage.component';
import { EmailPage } from '../../pages/email/EmailPage.component';
import { ProfilePage } from '../../pages/profile/ProfilePage.component';
import { TrombinoscopePage } from '../../pages/trombinoscope/TrombinoscopePage';
import { TodoPage } from '../../pages/todo/TodoPage.component';
import { TodoType } from '../../types/todo';

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
  Todo: { token: string; profile: EmployeeDetail; todos: TodoType[] };
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
        <Stack.Screen name="Todo" component={TodoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
