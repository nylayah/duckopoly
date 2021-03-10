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
        padding: 15,
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
    whiteText: {
        fontSize: 25,
        color: colors.white,
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
    Square: {   
        padding:10,
        borderColor: colors.black,
        borderWidth:1, 
        flexWrap: "wrap",
    },
    boardText: {
        fontSize: 12,
        color: colors.black,
        textAlign:"center",
        
    },
    
})
export {styles,colors}
