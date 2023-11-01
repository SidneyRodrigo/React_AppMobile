import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import CurriculumScreen from './CurriculumScreen';
import PortfolioScreen from './PortfolioScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Curriculum' component={CurriculumScreen} />
        <Stack.Screen name='Portfolio' component={PortfolioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} ;
