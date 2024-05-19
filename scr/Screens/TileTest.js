//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// create a component
const TileTest = () => {
    return (
        <View style={styles.container}>
            <View style={{height:moderateScale(800)}}></View>
        <View style={styles.container2} >  
             <TouchableOpacity style={styles.tile}>
             <Image source={require('../assests/T1.png')} resizeMode="cover"></Image> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile}>
             <Image source={require('../assests/T3.png')} resizeMode="cover"></Image> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile}>
             <Image source={require('../assests/T2.png')} resizeMode="cover"></Image> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile}>
             <Image source={require('../assests/T4.png')} resizeMode="cover"></Image> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile}>
             <Image source={require('../assests/T6.png')} resizeMode="cover"></Image> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile}>
             <Image source={require('../assests/T5.png')} resizeMode="cover"></Image> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile}>
             <Image source={require('../assests/T7.png')} resizeMode="cover"></Image> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile}>
             <Image source={require('../assests/T8.png')} resizeMode="cover"></Image> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.tile}>
             <Image source={require('../assests/T1.png')} resizeMode="cover"></Image> 
            </TouchableOpacity>
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
        flexWrap:'wrap',
        flexDirection:'row'

    },  container2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        padding: 3,
        borderColor: 'black',
        borderWidth: 3
      },tile: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: moderateScale(-5),
      }
});

//make this component available to the app
export default TileTest;
