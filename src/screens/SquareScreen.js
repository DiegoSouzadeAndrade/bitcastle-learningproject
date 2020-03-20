import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';


const SquareScreen = () => {
    const [] = useState([]);

    return (
        <View>
            <ColorCounter color="Red" />
            <ColorCounter color="Blue" />
            <ColorCounter color="Green"/>
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default SquareScreen;