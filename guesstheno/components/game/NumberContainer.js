import React from "react"
import {StyleSheet, Text,View} from "react-native"

const NumberContainer=({children})=>{
    return(
        <View style={styles.box}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    box:{
        padding:24,
        borderWidth:3,
        borderColor:"#ddb52f",
        marginVertical:50,
        width:200,
        alignSelf:"center"
    },
    text:{
        fontSize:30,
        color:"#ddb52f",
        fontWeight:"bold",
        textAlign:"center"
    }
})
export default NumberContainer