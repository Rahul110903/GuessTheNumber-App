import React from "react"
import {Pressable, StyleSheet, Text,View} from "react-native"

const PrimaryButton=({children,onPress})=>{
    return(
        <View style={styles.outercontainer}>
            <Pressable onPress={onPress} android_ripple={{color:"#640233"}} style={({pressed})=> pressed ?[styles.inputContainer,styles.pressed] : styles.inputContainer}>
                <Text style={styles.inputcontainertext}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({
    inputContainer:{
        backgroundColor:"#72064c",
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        marginVertical:5
    },
    inputcontainertext:{
        color:"white",
        textAlign:"center",
        fontSize:20,
    },
    outercontainer:{
        overflow:"hidden",
        margin:4,
        borderRadius:28,

    },
    pressed:{
        opacity:0.75
    }
})
export default PrimaryButton