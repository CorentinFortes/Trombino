import { useFonts } from '@expo-google-fonts/rubik';
import React from 'react';
import AppNavigation from './src/components/AppNavigation/AppNavigation.component';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_Medium: require('./assets/fonts/Rubik-Medium.ttf'),
    Rubik_Black: require('./assets/fonts/Rubik-Black.ttf'),
    Rubik_Bold: require('./assets/fonts/Rubik-Bold.ttf'),
    Rubik_Regular: require('./assets/fonts/Rubik-Regular.ttf'),
    Rubik_Light: require('./assets/fonts/Rubik-Light.ttf'),
    Rubik_Italic: require('./assets/fonts/Rubik-Italic.ttf'),
    Rubik_SemiBold: require('./assets/fonts/Rubik-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return <AppNavigation />;
  }
}
