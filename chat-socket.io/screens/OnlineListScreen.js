import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

export default function OnlineListScreen() {
    const onlineList = useSelector(state => state.onlineList);

    console.log("why", onlineList);
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <FlatList data={onlineList} renderItem={({ item }) => { console.log("item", item); return <Text>{item.username}</Text> }}
                keyExtractor={item => item.username}

            ></FlatList>

        </View>
    )
}

