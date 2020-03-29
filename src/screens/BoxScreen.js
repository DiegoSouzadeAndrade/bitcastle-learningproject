import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={Styles.viewStyle}>
            <Text style={Styles.textStyle}>Box Screen</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor:'black'
    },
    textStyle:{
        borderWidth: 1,
        borderColor: 'red',
        margin:20
    }

});

export default BoxScreen;