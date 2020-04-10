import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={Styles.viewStyle}>
            <Text style={Styles.textOneStyle}>Child #1</Text>
            <Text style={Styles.textTwoStyle}>Child #2</Text>
            <Text style={Styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor:'black',
        alignItems: 'center'
    },
    textOneStyle:{
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle:{
        borderWidth: 3,
        borderColor: 'red',
    },
    textThreeStyle:{
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;