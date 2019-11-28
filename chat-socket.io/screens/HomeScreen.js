
import React, { useEffect, useState, useRef } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import io from 'socket.io-client';
import { GiftedChat } from "react-native-gifted-chat";
import SignInScreen from './SignInScreen';
export default function HomeScreen() {
    const [hasSignIn, setHasSignIn] = useState(false);
    const [recvMessage, setRecvMessage] = useState([]);
    const socket = useRef(null);
    useEffect(() => {
        socket.current = io("http://192.168.0.101:3001");
        socket.current.on("message", message => {
            setRecvMessage(prevState => GiftedChat.append(prevState, message));
        });

    }, []);

    const onSend = (messages) => {
        console.log(messages);
        socket.current.emit("message", messages[0].text);
        setRecvMessage(prevState => GiftedChat.append(prevState, messages));

    }
    //66159148


    return (
        <View style={{ flex: 1 }}>
            {hasSignIn ? (<GiftedChat
                messages={recvMessage}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />) : (<SignInScreen />)}
            {
                Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
            }
        </View>
    );
}


