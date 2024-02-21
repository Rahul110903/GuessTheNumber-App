import React from "react" 
import {StyleSheet, Text,View} from "react-native"

const ShowNumbers=({children})=>{
    return(
        <View style={styles.numbers}>
        <Text style={styles.texting}>{children}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    numbers:{
        margin:10,
        borderColor:"black",
        backgroundColor:"orange",
        padding:10,
        borderRadius:20,
        shadowColor:"black",
        elevation:5,
        borderWidth:2
    },
    texting:{
        textAlign:"center",
        fontWeight:"bold",
        color:"black"
    }
})

export default ShowNumbers