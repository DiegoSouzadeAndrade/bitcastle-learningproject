import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={()=>navigation.navigate('Components')}
        title="Go to components Demo"></Button>
      <Button 
        onPress={()=>navigation.navigate('Lists')}
        title="Go to List Demo"></Button>
      <Button 
        onPress={()=>navigation.navigate('Images')}
        title="Go to Images Demo"></Button>
      <Button 
        onPress={()=>navigation.navigate('Counter')}
        title="Go to Counter Demo">
      </Button>
      <Button 
        onPress={()=>navigation.navigate('Colors')}
        title="Go to Colors Demo">
      </Button>
      <Button 
        onPress={()=>navigation.navigate('Square')}
        title="Go to Squares Demo">
      </Button>
      <Button 
        onPress={()=>navigation.navigate('Texts')}
        title="Go to Texts Demo">
      </Button>
        
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;