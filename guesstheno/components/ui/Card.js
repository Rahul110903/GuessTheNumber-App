import React from "react"
import {StyleSheet, Text,View} from "react-native"

const Card=({children})=>{
    return(
        <View style={styles.box}>{children}</View>
    )
}
const styles=StyleSheet.create({
    box:{
        backgroundColor:"#4e0329",
        marginTop:40,
        marginHorizontal:24,
        padding:16,
        borderRadius:8,
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0,height:4},
        shadowRadius:6,
        shadowOpacity:0.25,
    },
})

export default Card