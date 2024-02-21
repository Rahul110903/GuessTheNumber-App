import React from "react"
import {Text,View,StyleSheet} from "react-native"

const Title=({children})=>{
    return(
        <Text style={styles.title}>{children}</Text>
    )
}
const styles=StyleSheet.create({
    title:{
        fontSize:18,
        borderColor:"white",
        borderWidth:2,
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
        padding:12,
    }
})
export default Title