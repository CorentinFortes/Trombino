// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage, HomePage } from '../../pages';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Settings: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
