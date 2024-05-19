//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageComponent ,Image} from 'react-native';
import {AwesomeButton,ThemedButton} from "react-native-really-awesome-button";
// create a component
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.header,{justifyContent:'center',alignItems:'center'}]}>
  <Text style={[styles.timerText,{fontSize:60,fontWeight:'600'}]}>8 tap</Text>
  </View>
      <View style={styles.button}>
      <ThemedButton 
      name="bruce" 
      type="primary" 
      width={250}
      borderRadius= {15}
      raiseLevel ={15}
      onPressOut={ () => navigation.navigate("puzzle") } 
      style={styles.button}>Resume</ThemedButton>
      </View>
      <View style={styles.button}>
      <ThemedButton 
      name="bruce" 
      type="secondary" 
      width={250}
      borderRadius= {15}
      raiseLevel ={15}
      onPressOut={ () => navigation.navigate("Levels")}>New Game</ThemedButton>
      </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header:{
        height:150
      },
      timerText: {
        fontSize: 20,
        color:'black'
      },
      button:{
        margin:10
      }
});

//make this component available to the app
export default Home;
