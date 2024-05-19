//import liraries
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/Screens/Home';
import SlidingPuzzle from './scr/Screens/SlidingPuzzle';
import Levels from './scr/Screens/Levels';
import TileTest from './scr/Screens/TileTest';
import SlidingPuzzle4 from './scr/Screens/SlidingPuzzle4';
const Stack = createNativeStackNavigator();
import Card from './scr/Screens/cards';
import CardFlip from './scr/Screens/CardFlip';

// create a component
const App = () => {
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="puzzle" component={SlidingPuzzle} />
      <Stack.Screen name="Levels" component={Levels} />
    </Stack.Navigator>
  </NavigationContainer>

  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
