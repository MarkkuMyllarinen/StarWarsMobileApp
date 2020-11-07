import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,

} from "react-native";

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomePage({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <StatusBar hidden />
      <View style={styles.bgImageWrapper}>
        <ImageBackground
          source={require("../assets/images/starWarsBackground.png")}
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
        </ImageBackground>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.imageStack}>
          <Image
            source={require("../assets/images/starWarsLogo.png")}
            resizeMode="contain"
            style={styles.starWarsLogo}
          ></Image>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("People")}>
            <Image
              source={require("../assets/images/peopleButton.png")}
              resizeMode="contain"
              style={styles.menuButton}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require("../assets/images/planetsButton.png")}
              resizeMode="contain"
              style={styles.menuButton}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require("../assets/images/vehiclesButton.png")}
              resizeMode="contain"
              style={styles.menuButton}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require("../assets/images/moviesButton.png")}
              resizeMode="contain"
              style={styles.menuButton}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} >
            <Image
              source={require("../assets/images/speciesButton.png")}
              resizeMode="contain"
              style={styles.menuButton}
            ></Image>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  image_imageStyle: {},
  menuButton: {
    width: windowWidth,
    height: 150,
  },
  touchOpacity: {
    width: windowWidth,
    height: 100,
  },

  starWarsLogo: {
    top: 0,
    width: windowWidth,
  },
  imageStack: {
    flex: 1,
    flexDirection: "column",
    width: windowWidth,
    height: 1200
  }
});
export default HomePage;
