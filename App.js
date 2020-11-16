import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./components/HomePage"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import PeopleList from './components/PeopleList';
import PeopleAbout from './components/about-page/PeopleAbout'

const Stack = createStackNavigator();


export default function App() {

  return (

    <NavigationContainer >
      <Stack.Navigator headerMode="none" style={styles.container}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="People" component={PeopleList} />
        <Stack.Screen name="PeopleAbout" component={PeopleAbout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
