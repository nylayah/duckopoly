import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './duckopoly/screens/WelcomeScreen';
import HomePage from './duckopoly/screens/HomePage.js';
import ReturningPlayer from './duckopoly/screens/ReturningPlayer';
import NewPlayer from './duckopoly/screens/NewPlayer';
import GameBoard from './duckopoly/screens/GameBoard';

const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerMode="false">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Returning Player" component={ReturningPlayer} />
        <Stack.Screen name="New Player" component={NewPlayer} />
        <Stack.Screen name="Game Board" component={GameBoard} />
      </Stack.Navigator>
    </NavigationContainer>);



}

