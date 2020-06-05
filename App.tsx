import React from 'react';
import { StyleSheet,StatusBar } from 'react-native';
import Home from './src/pages/Home'

import {AppLoading} from 'expo'
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu'

import Routes from './src/routes'

export default function App() {
  const [fontsloaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsloaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent"
       translucent ></StatusBar>
      <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
