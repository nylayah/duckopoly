import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../config/styles';
import colors from '../config/colors';



function HomePage({ navigation }) {
    
    return (
        <SafeAreaView style={styles.whiteContainer}>
            <TouchableOpacity style={styles.whiteButton} onPress={() => navigation.navigate('Game Board')}>
                <Text style={styles.redText}>New Game</Text>
            </TouchableOpacity>


        </SafeAreaView>);

}


export default HomePage;