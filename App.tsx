/* eslint-disable global-require */
import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import HomeStack from './routes/homeStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <HomeStack />;
}
