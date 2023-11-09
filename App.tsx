import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorApp } from './src/navigator/NavigatorApp';

function App() {
  return (

    <NavigationContainer>
      <NavigatorApp />
    </NavigationContainer>
  )
}

export default App;