import {StyleSheet} from 'react-native';
import colors from './colors';

export default{
    colors,
}
const styles= StyleSheet.create({
    redBackground: {
        flex:1,
        backgroundColor:colors.red,
        alignItems: "center",
        justifyContent:"center",
        padding: 10,
    },
    grayButton: {
        width: '80%',
        height: 60,
        backgroundColor:colors.gray,
        alignItems: "center",
        justifyContent:"center",
        padding: 2,
        borderRadius:15,
        margin:25,
    },
    whiteButton: {
        width: '80%',
        height: 60,
        backgroundColor:colors.white,
        alignItems: "center",
        justifyContent:"center",
        padding: 2,
        borderRadius:15,
        margin:25,
    },
    slogan: {
        fontSize: 40,
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center",
        margin:30,
    },
    redText: {
        fontSize: 25,
        color: colors.red,
        textAlign:"center",
        marginTop: 10,
        marginBottom: 10,
    },
    blueText: {
        fontSize: 25,
        color: colors.blue,
        textAlign:"center",
        marginTop: 10,
        marginBottom: 10,
    },
    yellowText: {
        fontSize: 25,
        color: colors.yellow,
        textAlign:"center",
        marginTop: 10,
        marginBottom: 10,
    },
    textInputPlayerID:{
        width:"80%",
        height:45,
        borderRadius:15,
        backgroundColor:colors.white,
        padding: 7,
        margin:40,
    },
    redContainer: {
        backgroundColor:colors.red, 
        flex:1, 
        alignItems:"center", 
        justifyContent:"center", 
        padding:10,
    },
    whiteContainer: {
        backgroundColor:colors.white, 
        flex:1, 
        alignItems:"center", 
        justifyContent:"center", 
        padding:10,
    },
    grayContainer: {
        backgroundColor:colors.red, 
        flex:1, 
        alignItems:"center", 
        justifyContent:"center", 
        padding:10,
    },
    blueContainer: {
        backgroundColor:colors.red, 
        flex:1, 
        alignItems:"center", 
        justifyContent:"center", 
        padding:10,
    },

    
})
export {styles,colors}
