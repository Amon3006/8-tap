import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native';
import Sound from 'react-native-sound';
import {AwesomeButton,ThemedButton} from "react-native-really-awesome-button";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const BOARD_SIZE = 3;

// Define the sound file path
const clickSound = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.error('Failed to load sound', error);
  }
});

const generateInitialState = () => {
  const numbers = Array.from({ length: BOARD_SIZE * BOARD_SIZE - 1 }, (_, index) => index + 1);
  numbers.push(null); // Represents the empty space
  return shuffle(numbers);
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


const SlidingPuzzle = () => {
  const [board, setBoard] = useState(generateInitialState());
  const [time, setTime] = useState(0);


  const handleShuffle = () => {
    setBoard(generateInitialState());
    setCount(0);
    setStart(true);
    resetStopwatch();
  };

  const size = Dimensions.get('window').width / 3.2;
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  useEffect(() => {
    // Check if the puzzle is solved

    if (board.every((value, index) => (value === null ? index + 1 === board.length : value === index + 1))) {
      alert(`Congratulations! Puzzle Solved! in ${count} moves and ${formatTime(time)} time` );
      setStart(false);
      setStop(true);
    };
    if (count > 8) {
      alert('You are out of moves');
      handleShuffle();
    };
  }, [board]);



const [start,setStart] = useState(false);
const [stop,setStop] = useState(false);

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 100); // Increment time by 100 milliseconds
      }, 100);
    } else if (stop) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, stop]);

  const [count, setCount] = useState(0);

  const resetStopwatch = () => {
    setTime(0);
  };

  const formatTime = milliseconds => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}.${String(milliseconds % 1000).padStart(3, '0')}`;
    return formattedTime;
  };


  const handlePress = (index) => {
    const emptyIndex = board.indexOf(null);
    clickSound.play();
    setCount(count + 1);
    const newBoard = [...board];
    [newBoard[index], newBoard[emptyIndex]] = [newBoard[emptyIndex], newBoard[index]];
    setBoard(newBoard);
  };


  return (<View style={styles.header}>
    <View style={[styles.header, { justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }]}>
    <Text style={styles.timerText}>{formatTime(time)}</Text>
      <Text style={[styles.tileText, { flex: 1, fontSize: 60, fontWeight: '600' }]}>{count}</Text>
    </View>
    <View style={[styles.container, { height: width }]}>
      {board.map((value, index) => (
        <TouchableOpacity
        key={index}
        style={[styles.tile, { height: size, width: size }]}
        onPress={() => handlePress(index)}
        disabled={value === null}
        >
          <Text style={styles.tileText}>{value}</Text>
        </TouchableOpacity>
         
      ))}
    </View>
      <View style={{justifyContent:'center', alignItems:'center',margin:20}}>
      <ThemedButton 
      name="bruce" 
      type="secondary" 
      width={size * 2.5}
      height={height / 4.7}
      borderRadius= {15}
      raiseLevel ={15}
      textSize ={30}
      onPressOut={handleShuffle}>Shuffle</ThemedButton>
      </View>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: moderateScale(10),
    padding: moderateScale(3),
    borderColor: 'black',
    borderWidth: moderateScale(3)
  },
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
  },
  tileText: {
    color: 'black',
    fontSize: moderateScale(24),
    textAlign: 'center'
  },
  header: {
    flex: 1,
    backgroundColor: 'white'
  },
  startButton: {
    backgroundColor: 'white',
    margin: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderBottomWidth: moderateScale(15),
    borderRightWidth: moderateScale(10)
  },
  timerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'black',
    padding:20
    
  }

});

export default SlidingPuzzle;
