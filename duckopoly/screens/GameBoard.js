import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../config/styles';
import colors from '../config/colors';



function GameBoard({ navigation }) {
    
    return (
        <SafeAreaView style={styles.whiteContainer}>
            <Image source={require("../assets/monop.png")} style={{flex:1}} />

        </SafeAreaView>);

}


export default GameBoard;