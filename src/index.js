import React from 'react';

import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'; // é melhor importar arquivos depois do reactotron

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
