import React from 'react'
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';


export default function OnlineListScreen({ navigation }) {
    const onlineList = useSelector(state => state.onlineList);
    const { itemContainerStyle, imageStyle, usernameStyle } = styles;

    return (

        <View style={{ flex: 1 }}>
            <FlatList data={onlineList} renderItem={({ item }) => {
                console.log("item", item); return <TouchableOpacity onPress={() => navigation.navigate("Chat", { name: item.username, userId: item.userId })}><View style={itemContainerStyle}>
                    <Image style={imageStyle} source={{ uri: item.avatar }} />
                    <View style={usernameStyle}><Text>{item.username}</Text></View></View></TouchableOpacity>
            }}
                keyExtractor={item => item.userId}

            ></FlatList>

        </View>

    )
}

const styles = StyleSheet.create({
    itemContainerStyle: { flex: 1, flexDirection: 'row' },
    imageStyle: { width: 100, height: 100, borderRadius: 50 },
    usernameStyle: { flex: 1, justifyContent: "center", alignItems: "center", fontSize: 20 }
});


