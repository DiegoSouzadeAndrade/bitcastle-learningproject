import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const name = 'My name is Diego Souza';

const ComponentsScreen = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.textStyle}>Getting started with React Native!</Text>
            <Text style={Styles.subHeaderStyle}>{name}</Text>
            <Button title='First Button' icon={{name: 'code'}} />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7d33ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;