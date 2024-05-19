//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card'



// create a component
const Card = () => {
    const [state,setState] = useState(false);

    useEffect(() =>{

        setInterval(() => {
            setState(!state); // Increment time by 100 milliseconds
          }, 1000);}
    )


    
    return (
        <FlipCard 
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={state}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
      >
        {/* Face Side */}
        <View style={styles.face}>
          <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View style={styles.back}>
          <Text style={{ color:'white'}}>The Back</Text>
        </View>
      </FlipCard>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    face:{flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'black',
        borderRadius:14,

    },
    back:{flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'white',
        borderRadius:14,
    }
});

//make this component available to the app
export default Card;
