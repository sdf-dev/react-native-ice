import React from 'react';
import { Modal, View, Button, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';

export default function TitleModal({ visible, onClose }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
        <BlurView intensity={50} style={styles.blurView}>
            <View style={styles.modalView}>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Iceland Shopping List</ThemedText>
                    <HelloWave />
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Step 1: Get ready for massive savings</ThemedText>
                    <ThemedText type="defaultSemiBold">Gather your weekly requirements</ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Step 2: Create your list</ThemedText>
                    <ThemedText>
                        Tap the List tab to get started with your list.
                    </ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Step 3: Build your basket</ThemedText>
                    <ThemedText>
                        Hop into the Basket tab to get your basket started!
                    </ThemedText>
                </ThemedView>
                <Button title="Close" onPress={onClose} />
            </View>
        </BlurView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    blurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Light background with transparency
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    reactIceland: {
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    cogContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 28,
        lineHeight: 32,
        marginRight: 8,
    },
});