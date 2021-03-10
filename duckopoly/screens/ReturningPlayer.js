import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../config/styles';
import colors from '../config/colors';



function ReturningPlayer({ navigation }) {
    
    return (
        <SafeAreaView style={styles.redBackground}>
            <Image source={require("../assets/logo.png")} style={{height: 100, width:100}} />
            <Text style={styles.slogan}>Welcome Back!</Text>
            <Text style={{textAlign:"center", color: colors.white, fontSize:25}}>Enter your player ID...</Text>
            <TextInput 
                style={styles.textInputPlayerID} 
                placeholder="player id"
                ></TextInput>
            <TouchableOpacity style={styles.whiteButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.redText}>Enter Game</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("New Player")}>
                <Text style={{fontSize:12, color:colors.yellow, textAlign:"center", margin:10}}>New Player</Text>
            </TouchableOpacity>


        </SafeAreaView>);

}


export default ReturningPlayer;




