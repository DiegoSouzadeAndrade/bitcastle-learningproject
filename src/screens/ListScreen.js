import React from 'react';
import {View , Text, StyleSheet, FlatList}  from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: 20},
        {name: 'Friend 2', age: 45},
        {name: 'Friend 3', age: 90},
        {name: 'Friend 4', age: 72},
        {name: 'Friend 5', age: 5},
        {name: 'Friend 6', age: 14},
        {name: 'Friend 7', age: 12},
        {name: 'Friend 8', age: 70},
        {name: 'Friend 9', age: 50},
        {name: 'Friend 10', age: 30}
    ];

    return (
        <FlatList
            keyExtractor={friend=> friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={Styles.textStyle}>{item.name + ' - Age ' + item.age}</Text>;
            }}
        />
    );
};

const Styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;