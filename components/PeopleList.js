import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, ActivityIndicator } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import PeopleCard from './cards/PeopleCard';

import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PeopleList({ navigation, route }) {
    const [peopleList, setPeopleList] = useState([])
    const [done, isDone] = useState(false)

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            console.log("Data saved")
            await AsyncStorage.setItem("data", jsonValue.toString())
        } catch (e) {
            console.log(e, "   Error")
        }
    }

    const fetchData = url => {
        console.log("Fetch data")
        console.log(peopleList.length)
        if (!done) {
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    let newList = peopleList
                    response.results.map(item => newList.push(item))
                    setPeopleList(newList)
                    if (response.next !== null) {
                        console.log("next not null")
                        fetchData(response.next)
                    } else {
                        console.log("else fetch")
                        storeData(peopleList)
                        isDone(true)
                    }
                })
        }
    }

    const getData = async () => {
        console.log("Get data")
        try {
            const value = await AsyncStorage.getItem("data")
            console.log(JSON.parse(value))
            if (value !== null) {
                setPeopleList(JSON.parse(value))
                console.log("Data fetched from Async storage")
                isDone(true)
            }else {
                fetchData("https://swapi.dev/api/people/")
            }
        } catch (e) {
            console.log("Key Not Found")
        }
    }

    useEffect(() => {
        console.log("Use effect")
        getData();
    }, [])

    const renderItem = item => {
        let person = item
        return (<TouchableOpacity activeOpacity={0.8} onPress={() =>
            navigation.navigate("PeopleAbout", { person: item })}>
            <PeopleCard route={item} />
        </TouchableOpacity>)
    }

    if (!done) {
        return (
            <View style={styles.bgImageWrapper}>
                <ImageBackground
                    source={require("../assets/images/starWarsBackground.png")}
                    style={styles.indicatorWrapper}
                >
                    <ActivityIndicator style={{ marginVertical: windowHeight / 2 }} size="large" color="#00ff00" />
                </ImageBackground>

            </View>
        )
    } else {
        return (
            <View>
                <View style={styles.bgImageWrapper}>
                    <ImageBackground
                        source={require("../assets/images/starWarsBackground.png")}
                        style={styles.image}
                    >
                    </ImageBackground>
                </View>
                <View style={styles.imageCardStack}>
                    <FlatList
                        data={peopleList}
                        extraData={done}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={item => renderItem(item)}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    }, imageCardStack: {
        flexDirection: "column",
        width: windowWidth,
        alignItems: 'center'
    },
    indicatorWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
        transform: [
            {
                rotate: "90.00deg"
            }
        ]
    },
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
        transform: [
            {
                rotate: "90.00deg"
            }
        ]
    },
    image: {
        flex: 1,
        resizeMode: "stretch",
        transform: [
            {
                rotate: "90.00deg"
            }
        ]
    },
});
