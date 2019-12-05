import React from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";
import { Header } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';

ChatScreen.navigationOptions = screenProps => ({
    title: screenProps.navigation.getParam("name")
})
export default function ChatScreen({ navigation }) {
    //66159148

    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                renderUsernameOnMessage
                messages={[]}
                onSend={messages => dispatch({ type: "server/private-message", data: { text: messages[0].text, to: navigation.getParam("userId") } })}
                user={{
                    _id: 1,
                }}
            />
            {
                Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Header.HEIGHT + 20} />
            }
        </View>
    );
}


