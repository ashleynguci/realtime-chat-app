import React, { useState } from 'react'
import { Text, View, TextInput, ImageBackground, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SignInScreen({ navigation }) {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const { signInText, descriptionText, signInImage, usernameInput, textButton, signInButton, backgroundImage } = styles;

    return (
        <ImageBackground source={require("../assets/background.png")} style={backgroundImage}>
            <View style={{ flex: 1 }}>
                <Image resizeMode="contain" style={signInImage}
                    source={require("../assets/signIn_cat.png")} />
                <View style={{ flex: 1 }}>
                    <Text style={signInText}>Sign In</Text>
                    <Text style={descriptionText}>Please enter a username to start</Text>
                    <TextInput
                        onChangeText={text => setUsername(text)}
                        value={username}
                        style={usernameInput} placeholder="Enter username..." />
                    <TouchableOpacity style={signInButton} onPress={() => {
                        dispatch({ type: "server/join", data: username });
                        navigation.navigate("App")
                    }}>
                        <Text style={textButton}>Get Started</Text>
                    </TouchableOpacity>
                </View>

                <KeyboardAvoidingView behavior="padding" />

            </View>
        </ImageBackground>

    )

}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    signInImage: {
        flex: 1,
        width: '80%',
        alignSelf: 'center',
    },

    signInText: {
        marginLeft: 25,
        fontWeight: 'bold',
        fontSize: 35,
        color: '#333333'
    },

    descriptionText: {
        color: '#333333',
        fontSize: 14,
        marginLeft: 25,
        marginTop: 5,
    },

    usernameInput: {
        marginTop: 40,
        width: '80%',
        marginLeft: 25,
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomColor: '#E2E2E2',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    signInButton: {
        alignSelf: 'center',
        backgroundColor: '#CF7C77',
        color: '#333',
        marginTop: 50,
        width: '45%',
        height: 50,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    }

});
