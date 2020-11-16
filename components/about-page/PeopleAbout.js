import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function PeopleAbout({ navigation, route }) {

    let { item } = route.params.person

    console.log(item)

    return (
        <View>
            <View style={styles.bgImageWrapper}>
                <ImageBackground
                    source={require("../../assets/images/starWarsBackground.png")}
                    style={styles.bgImage}
                >
                </ImageBackground>
            </View>
            <View>
                <Text style={{ color: "white" }} >{item.name}</Text>
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
