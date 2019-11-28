import React, { useState } from 'react'
import { Text, View, TextInput, Image, Button, Platform, KeyboardAvoidingView } from 'react-native'

export default function SignInScreen({ signIn }) {
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
                <Button title="Sign in" onPress={() => signIn(username)} />
            </View>
            {
                Platform.OS === 'ios' && <KeyboardAvoidingView behavior="padding" />
            }
        </View>
    )

}
