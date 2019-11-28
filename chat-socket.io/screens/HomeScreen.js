
import React, { useEffect, useState, useRef } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import io from 'socket.io-client';
import { GiftedChat } from "react-native-gifted-chat";
export default function HomeScreen() {

    const [recvMessage, setRecvMessage] = useState([]);
    const socket = useRef(null);
    useEffect(() => {
        socket.current = io("http://10.213.224.58:3001");
        socket.current.on("message", message => {

            setRecvMessage(prevState => GiftedChat.append(prevState, message));
        });

    }, [])

    const onSend = (messages) => {
        console.log(messages);
        socket.current.emit("message", messages[0].text);
        setRecvMessage(prevState => GiftedChat.append(prevState, messages));

    }



    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                messages={recvMessage}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
            {
                Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
            }
        </View>
    );
}


