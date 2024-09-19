import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import uuid from 'react-native-uuid';
import { Swipeable } from 'react-native-gesture-handler';

export default function ShoppingList() {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const addItem = () => {
        if (item.trim()) {
            setList([...list, { key: uuid.v4(), value: item }]);
            setItem('');
        }
    };

    const deleteItem = (key) => {
        setList(list.filter(item => item.key !== key));
    };

    const renderRightActions = (key) => (
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(key)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    );

    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={styles.listTitle}>Shopping List</ThemedText>
            <TextInput
                style={styles.input}
                placeholder="Add Item"
                value={item}
                onChangeText={setItem}
            />
            <TouchableOpacity style={styles.listButton} onPress={addItem}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <Swipeable renderRightActions={() => renderRightActions(item.key)}>
                        <View style={styles.listItem}>
                            <Text>{item.value}</Text>
                        </View>
                    </Swipeable>
                )}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
    },
    listTitle: {
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    listButton: {
        borderRadius: 5,
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    listItem: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        borderRadius: 5,
        marginBottom: 3,
        marginTop: 3,
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: '100%',
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});