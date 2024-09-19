import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';
import { ThemedText } from '@/components/ThemedText';

export function RotatingCog() {
    const rotationAnimation = useSharedValue(0);

    // Start the rotation animation
    rotationAnimation.value = withRepeat(
        withTiming(360, { duration: 2000 }), // Rotate 360 degrees in 2 seconds
        -1, // Repeat indefinitely
        false // Do not reverse the animation
    );

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotationAnimation.value}deg` }],
    }));

    return (
            <Animated.View style={[animatedStyle]}>
                <ThemedText style={styles.text}>⚙️</ThemedText>
            </Animated.View>
    );
}

const styles = StyleSheet.create({
    // animatedView: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    text: {
        fontSize: 20,
        lineHeight: 32,
    },
});