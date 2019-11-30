import React, { useState } from 'react'
import { View, TextInput, Image, Button, Platform, KeyboardAvoidingView } from 'react-native'
import { useDispatch } from 'react-redux';

export default function SignInScreen({ signIn }) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image resizeMode="contain" style={{ flex: 1, width: 200, height: 200 }}
                source={require("../assets/chat-logo.jpg")} />
            <View style={{ flex: 1 }}>
                <TextInput
                    onChangeText={text => setUsername(text)}
                    value={username}
                    style={{
                        fontSize: 25, textAlign: "center"
                    }} placeholder="Enter username..." />
                <Button title="Sign in" onPress={() => dispatch({ type: "server/signin", data: username })} />
            </View>
            {
                Platform.OS === 'ios' && <KeyboardAvoidingView behavior="padding" />
            }
        </View>
    )

}
