import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../config/styles';
import colors from '../config/colors';



function GameBoard({ navigation }) {
    return (
        <SafeAreaView style={styles.redBackground}>
            <View style={{backgroundColor:colors.red, flex:1/15, flexDirection:"row", width:'100%', alignSelft:"flex-start"}}>
                    <Text style={styles.whiteText}>game code: </Text>
                    <Text style={styles.whiteText}>playerID</Text>
                    <Text style={styles.yellowText}> | </Text>
                    <TouchableOpacity>
                    <Text style={styles.yellowText}>money</Text>
                    </TouchableOpacity>
                      
            </View>
            <View style={styles.whiteContainer} style={{flex:13/15, flexDirection:"column"}}>
                <View style={{flexDirection:"row", width:'100%', height:45}}>
                    <TouchableOpacity style={styles.cornerSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.yellowSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.yellowSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.chanceSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.yellowSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.railRoadSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.cornerSquare}></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", width:'100%',flex:9/10}}>
                    <View style={{flexDirection:"column",alignSelf:"flex-start",flex:1}}>
                        <TouchableOpacity style={styles.greenSquare} ></TouchableOpacity>
                        <TouchableOpacity style={styles.greenSquare} ></TouchableOpacity>
                        <TouchableOpacity style={styles.chanceSquare} ></TouchableOpacity>
                        <TouchableOpacity style={styles.greenSquare} ></TouchableOpacity>
                        <TouchableOpacity style={styles.purpleSquare} ></TouchableOpacity>
                        <TouchableOpacity style={styles.purpleSquare} ></TouchableOpacity>
                        <TouchableOpacity style={styles.railRoadSquare} ></TouchableOpacity>
                        <TouchableOpacity style={styles.purpleSquare} ></TouchableOpacity>
                        <TouchableOpacity style={styles.lightblueSquare} ></TouchableOpacity>
                        <TouchableOpacity style={styles.lightblueSquare} ></TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: colors.gray, flex:1,borderWidth:1,borderColor:colors.black,}}>
                        <Text style={styles.redText}>Duckopoly</Text>
                    </View>
                    <View style={{flexDirection:"column", flex:1,alignSelf:"flex-start",}}>
                        <TouchableOpacity style={styles.redSquare}></TouchableOpacity>
                        <TouchableOpacity style={styles.redSquare}></TouchableOpacity>
                        <TouchableOpacity style={styles.chanceSquare}></TouchableOpacity>
                        <TouchableOpacity style={styles.brownSquare}></TouchableOpacity>
                        <TouchableOpacity style={styles.brownSquare}></TouchableOpacity>
                        <TouchableOpacity style={styles.brownSquare}></TouchableOpacity>
                        <TouchableOpacity style={styles.railRoadSquare}></TouchableOpacity>
                        <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                        <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                        <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:"row", width:'100%', height:45, flex:1/10, alignSelf:"flex-end"}}>
                    <TouchableOpacity style={styles.cornerSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.lightblue}></TouchableOpacity>
                    <TouchableOpacity style={styles.yellowSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.chanceSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.yellowSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.railRoadSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.orangeSquare}></TouchableOpacity>
                    <TouchableOpacity style={styles.cornerSquare}></TouchableOpacity>
                </View>

        </View>
            <View style={{backgroundColor:colors.red, flex:1/15, flexDirection:"row", width:'100%', alignSelft:"flex-start"}}>
                    <Text style={styles.whiteText}>playerID</Text>
                    <Text style={styles.yellowText}> | </Text>
                    <TouchableOpacity>
                        <Text style={styles.yellowText}>options</Text> 
                    </TouchableOpacity> 
            </View>
        </SafeAreaView>);

}


export default GameBoard;