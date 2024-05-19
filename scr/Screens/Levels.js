//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import {ThemedButton} from "react-native-really-awesome-button";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// create a component
const Levels = () => {
    return (
       <ScrollView>
        <ImageBackground source={require('../assests/A7.png')}>
        <View style={{height:2000}}>

            <ThemedButton name="bruce" type="secondary" borderRadius={50} width={100} activityColor={'red'} style={{top:moderateScale(20),left:moderateScale(160)}}>1</ThemedButton>
            <ThemedButton name="bruce" type="secondary" borderRadius={50} width={100} style={{top:moderateScale(20),left:moderateScale(160)}}>2</ThemedButton>
            <ThemedButton name="bruce" type="secondary" borderRadius={50} width={100}>3</ThemedButton>
            <ThemedButton name="bruce" type="secondary" borderRadius={50} width={100}>4</ThemedButton>
            <ThemedButton name="bruce" type="secondary" borderRadius={50} width={100}>5</ThemedButton>
        </View>
        </ImageBackground>

       </ScrollView>
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
    rectangle:{
        width:1000,
        height:1000,
        backgroundColor:'red'
    }
});

//make this component available to the app
export default Levels;
