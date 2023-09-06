// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage, HomePage } from '../../pages';
import { ProfilePage } from '../../pages/profile/ProfilePage.component';
import { TrombinoscopePage } from '../../pages/trombinoscope/TrombinoscopePage';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Settings: undefined;
  Profile: {
    token: string;
  };
  Trombinoscope: {
    token: string;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
