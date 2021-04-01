import React from 'react';
import { ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../config/styles';
import colors from '../config/colors';



function GameBoard({ navigation }) {
    return (
        <SafeAreaView style={styles.redBackground}>
            <View style={{backgroundColor:colors.red, flex:1/15, flexDirection:"row", width:'100%', alignSelft:"flex-start", padding:"2%"}}>
                    <Text style={styles.whiteText}>game code: </Text>
                    <Text style={styles.whiteText}>playerID</Text>
                    <Text style={styles.yellowText}> | </Text>
                    <TouchableOpacity>
                    <Text style={styles.yellowText}>money</Text>
                    </TouchableOpacity>      
            </View>
            <View style={{flex:13/15, flexDirection:"column", width:'100%', padding:"2%"}}>
                <View style={{flexDirection:"row", flex:1/10, width:"100%"}}>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.red, borderWidth:1}}>
                        <Text style={styles.boardText}>GO DUCKS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.brown, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.brown, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.lightblue, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.lightblue, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                   
                </View>
                <View style={{flexDirection:"row", flex:8/10, backgroundColor:colors.green}}>
                    <View style={{flexDirection:"column", flex:1/9, backgroundColor: colors.orange, justifyContent:"flex-start"}}>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.purple, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.purple, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.purple, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.orange, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.orange, borderWidth:1}}></TouchableOpacity>
                    
                    </View>
                    <View style={{backgroundColor: colors.gray, flex:7/9,borderWidth:1,borderColor:colors.black, padding:"5%"}}>
                        <View style={{padding:".5%", flex:1/3, flexWrap: "wrap"}}>
                            <Text style={{color: colors.lightblue, fontSize:20, textAlign:"left", textAlignVertical:"center", transform: [{ rotate: "0deg" }]}}>CHANCE</Text>
                        </View>
                        <View style={{padding:".5%", flex:1/3, flexWrap: "wrap", borderWidth: 2, alignSelf: 'center', justifyContent: 'center'}}>
                            <Text style={{color: colors.red, fontSize:40, textAlign:"center", textAlignVertical:"center", transform: [{ rotate: "0deg" }]}}>DUCKOPOLY</Text>
                        </View>
                        <View style={{ flex:1/3,  padding:".5%", borderWidth: 2, alignSelf: 'center', justifyContent: 'center'}}>
                            <Text style={{color: colors.yellow, fontSize:20, textAlign:"center",  transform: [{ rotate: "0deg" }]}}>COMMUNITY CHEST</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"column", flex:1/9, height:"100%"}}>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.red, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.red, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.yellow, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.yellow, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/8, backgroundColor: colors.yellow, borderWidth:1}}></TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:"row", flex:1/10, width:"100%"}}>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.darkblue, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.darkblue, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.green, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.green, borderWidth:1}}></TouchableOpacity>
                    <TouchableOpacity style={styles.Square} style={{flex:1/10, backgroundColor: colors.white, borderWidth:1}}></TouchableOpacity>
                   
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