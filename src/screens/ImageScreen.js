import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} score={6} />
            <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={4}/>
            <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score={10}/>
        </View>
    );
};

const Styles = StyleSheet.create({});

export default ImageScreen;