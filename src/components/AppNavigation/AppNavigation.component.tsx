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
import { CalendarPage } from '../../pages/calendar/CalendarPage';
import { WeatherPage } from '../../pages/weather/weatherPage.component';
import { WeatherData } from '../../api/weather';
import { WeatherModeType } from '../../types/Widget/weather';

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
  Calendar: { token: string };
  Chat: { token: string; targetEmployee: EmployeeDetail; fromChat: boolean };
  Weather: {
    token: string;
    weather: WeatherData | undefined;
    weathermode: WeatherModeType;
  };
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
        <Stack.Screen name="Calendar" component={CalendarPage} />
        <Stack.Screen name="Chat" component={ChatPage} />
        <Stack.Screen name="Weather" component={WeatherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
