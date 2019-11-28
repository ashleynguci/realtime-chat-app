
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import io from 'socket.io-client';

export default function HomeScreen() {
    const [sentMessage, setSentMessage] = useState("");
    const [recvMessage, setRecvMessage] = useState([]);
    const socket = useRef(null);
    useEffect(() => {
        socket.current = io("http://10.213.224.58:3001");
        socket.current.on("message", message => {
            setRecvMessage(prevState => [...prevState, message]);
        })
    }, [])

    const sendMessage = () => {
        socket.current.emit("message", sentMessage);
        setSentMessage("");
    }

    const showRecvMessage = recvMessage.map(msg => (<Text key={msg}>{msg}</Text>))

    return (
        <View style={styles.container}>
            {showRecvMessage}
            <TextInput value={sentMessage} onChangeText={(text) => setSentMessage(text)} placeholder="Enter chat message..." onSubmitEditing={sendMessage} />
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
