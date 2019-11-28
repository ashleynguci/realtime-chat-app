
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import io from 'socket.io-client';

export default function HomeScreen() {
    const [sendMessage, setSendMessage] = useState("");

    useEffect(() => {
        io("http://10.213.224.58:3001")
    }, [])
    return (
        <View style={styles.container}>
            <Text>Real time chat App!</Text>
            <TextInput value={sendMessage} onChangeText={(text) => setSendMessage(text)} placeholder="Enter chat message..." />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
