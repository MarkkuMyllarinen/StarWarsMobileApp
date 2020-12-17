import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowHeight, windowWidth)


export default function InfoCard({ navigation, route }) {

    console.log(route)

    let [fontsLoaded] = useFonts({
        'soloist1': require('../../assets/fonts/soloist1.ttf'),
    });

    const planets = (() => {                   //Jos tulee movie niin nimi asetetaan title ja muu on name
        console.log("planet")
        if (route.item.name && route.item.population) {
            return (<View style={{ flexDirection: "column" }}>
                <Text style={styles.infoText}>Name: {route.item.name}</Text>
                <Text style={styles.infoText}>Population: {route.item.population}</Text>
                <Text style={styles.infoText}>Terrain: {route.item.terrain}</Text>
                <Text style={styles.infoText}>Climate: {route.item.climate}</Text>
            </View>)
        } else if (route.item.title) {
            return (<View style={{ flexDirection: "column" }}>
                <Text style={styles.infoText}>Name: {route.item.title}</Text>
                <Text style={styles.infoText}>Director: {route.item.director}</Text>
                <Text style={styles.infoText}>Release: {route.item.release_date}</Text>
            </View>)
        } else if (route.item.model && route.item.manufacturer) {
            return (<View style={{ flexDirection: "column" }}>
                <Text style={styles.infoText}>Name: {route.item.name}</Text>
                <Text style={styles.infoText}>Model: {route.item.model}</Text>
                <Text style={styles.infoText}>Manufacturer: {route.item.manufacturer}</Text>
            </View>)
        } else if (route.item.classification && route.item.language) {
            return (<View style={{ flexDirection: "column" }}>
                <Text style={styles.infoText}>Type: {route.item.classification}</Text>
                <Text style={styles.infoText}>Language: {route.item.language}</Text>
                <Text style={styles.infoText}>Name: {route.item.name}</Text>
                <Text style={styles.infoText}>Lifespan: {route.item.average_lifespa}</Text>
            </View>)
        } 
    })();

    
    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    } else {
        return (
            <View>

                <ImageBackground
                    source={require("../../assets/images/peopleCard.png")}
                    resizeMode="contain"
                    style={styles.peopleCard}
                >

                    <View style={{ flexDirection: "row", marginTop: 40 }}>
                        {planets}
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    peopleCard: {
        width: windowWidth - 10,
        marginHorizontal: 5,
        height: 200,
        marginVertical: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 200 / 2,
        marginLeft: windowWidth / 10,
        // marginTop: windowWidth / 8

    },
    infoText: {
        color: "white",
        marginLeft: 50,
        marginTop: 10,
        paddingTop: 5,
        fontFamily: "soloist1"
    },
});
