import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    //const [] = useState([]);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
<<<<<<< HEAD
            <ColorCounter color="Red" />
            <ColorCounter color="Blue"/>
            <ColorCounter color="Green" />
=======
            <ColorCounter 
                onIncrease={() => setRed(red + COLOR_INCREMENT)} 
                onDecrease={() => setRed(red - COLOR_INCREMENT)}
                color="Red" 
            />
            <ColorCounter  
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)} 
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
                color="Blue" 
            />
            <ColorCounter 
                onIncrease={() => setGreen(green + COLOR_INCREMENT)} 
                onDecrease={() => setGreen(green - COLOR_INCREMENT)}
                color="Green"
            />

            <View 
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }} 
            />
>>>>>>> 301cbc00197d854b7b75846e48a4b0d4d8587fb8
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