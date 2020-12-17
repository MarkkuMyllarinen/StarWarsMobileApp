import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function PeopleAbout({ navigation, route }) {

    let { person } = route.params

    console.log(person.item.name,"person")

    return (
        <View>
            <View style={styles.bgImageWrapper}>
                <ImageBackground
                    source={require("../../assets/images/starWarsBackground.png")}
                    style={styles.bgImage}
                >
                </ImageBackground>
            </View>
            <View style={styles.infoText}>
                <Text style={{ color: "white" }} >{person.item.name}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bgImageWrapper: {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        top: 0, bottom: 0, left: 0, right: 0,
        transform: [
            {
                rotate: "90.00deg"
            }
        ]
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch",
        transform: [
            {
                rotate: "90.00deg"
            }
        ]
    },
    infoText: {
        color: "white",
        marginLeft: 0,
        marginTop: 10,
        paddingTop: 5,
        fontFamily: "soloist1"
    },
});
