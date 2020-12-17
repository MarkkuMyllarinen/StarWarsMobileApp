import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./components/HomePage"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import PeopleList from './components/PeopleList';
import PeopleAbout from './components/about-page/PeopleAbout'
import PlanetsList from './components/PlanetsList';
import VehiclesList from './components/VehiclesList';
import MoviesList from './components/MoviesList';
import SpeciesList from './components/SpeciesList';
import SelectRandom from './components/SelectRandom'


const Stack = createStackNavigator();


export default function App() {

  return (

    <NavigationContainer >
      <Stack.Navigator headerMode="none" style={styles.container}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="People" component={PeopleList} />
        <Stack.Screen name="PeopleAbout" component={PeopleAbout} />

        <Stack.Screen name="Random" component={SelectRandom} />


        <Stack.Screen name="Planets" component={PlanetsList} />

        <Stack.Screen name="Vehicles" component={VehiclesList} />

        <Stack.Screen name="Movies" component={MoviesList} />

        <Stack.Screen name="Species" component={SpeciesList} />


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
