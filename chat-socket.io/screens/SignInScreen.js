import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button, Platform, KeyboardAvoidingView } from 'react-native'

export default class SignInScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image resizeMode="contain" style={{ flex: 1, width: 200, height: 200 }}
                    source={require("../assets/chat-logo.jpg")} />
                <View style={{ flex: 1 }}>
                    <TextInput placeholder="Enter username..." />
                    <Button title="Sign in" />
                </View>
                {
                    Platform.OS === 'ios' && <KeyboardAvoidingView behavior="padding" />
                }
            </View>
        )
    }
}
