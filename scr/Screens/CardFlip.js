import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const CardFlip = () => {
  const isFlipped = useSharedValue(false);
  const rotation = useSharedValue(0);

  const flipCard = () => {
    isFlipped.value = !isFlipped.value;
    rotation.value = withTiming(isFlipped.value ? 180 : 0, {
      duration: 500,
      easing: Easing.linear,
    });
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startRotation = rotation.value;
    },
    onActive: (event, ctx) => {
      rotation.value = ctx.startRotation + event.translationX / 5;
    },
    onEnd: () => {
      if (rotation.value > 90) {
        isFlipped.value = !isFlipped.value;
        rotation.value = withSpring(180);
      } else {
        rotation.value = withSpring(0);
      }
    },
  });

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.card, cardStyle]}>
          <TouchableOpacity style={styles.cardContent} onPress={flipCard}>
            <Text style={styles.text}>{isFlipped.value ? 'Back' : 'Front'}</Text>
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 200,
    height: 300,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    backfaceVisibility: 'hidden',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CardFlip;
