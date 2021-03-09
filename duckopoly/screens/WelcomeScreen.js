import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../config/styles';
import colors from '../config/colors';



function WelcomeScreen({ navigation }) {
    
    return (
        <SafeAreaView style={styles.redContainer}>
            <Image source={require("../assets/logo.png")} style={{height: 100, width:100}} />
            <Text style={styles.slogan}>Duckopoly</Text>
            <TouchableOpacity style={styles.whiteButton} onPress={() => navigation.navigate('Returning Player')}>
                <Text style={styles.redText}>Returning Player</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.grayButton} onPress={() => navigation.navigate('New Player')}>
                <Text style={styles.yellowText}>New Player</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: "flex-end", marginTop: 20, }}>
                <Text style={styles.copyright}>***</Text>
            </View>


        </SafeAreaView>);

}


export default WelcomeScreen;




