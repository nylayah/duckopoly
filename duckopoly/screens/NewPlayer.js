import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../config/styles';
import colors from '../config/colors';



function NewPlayer({ navigation }) {
    
    return (
        <SafeAreaView style={styles.redBackground}>
            <Image source={require("../assets/logo.png")} style={{height: 100, width:100}} />
            <Text style={styles.slogan}>Welcome to Duckopoly!</Text>
            <Text style={{textAlign:"center", color: colors.white, fontSize:25}}>Choose your player ID...</Text>
            <TextInput style={styles.textInputPlayerID} placeholder="player id"></TextInput>
            <TouchableOpacity style={styles.whiteButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.redText}>Enter Game</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Returning Player')}>
                <Text style={{fontSize:12, color:colors.white, textAlign:"center"}}>Returning Player</Text>
            </TouchableOpacity>


        </SafeAreaView>);

}


export default NewPlayer;




