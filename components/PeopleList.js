import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import PeopleCard from './Cards/PeopleCard';


export default function PeopleList({ navigation, route }) {

    const [peopleList, setPeopleList] = useState([])
    const [done, isDone] = useState(false)




    const fetchData = url => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                let newList = peopleList
                response.results.map(item => newList.push(item))
                setPeopleList(newList)
                if (response.next !== null) {
                    fetchData(response.next)
                }else{
                    isDone(true)
                }
            })
    }

    useEffect(() => {
        fetchData("https://swapi.dev/api/people/")
    }, [])

    const renderItem = item => {
        return <PeopleCard route={item} />
    }


    return (
        <View>
            <Text>PeoplePage</Text>
            <FlatList
                data={peopleList}
                extraData={done}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item => renderItem(item)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
