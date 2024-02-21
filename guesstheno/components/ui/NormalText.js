import {StyleSheet, Text, View} from "react-native"

const NormalText=({children})=>{
    return(
         <Text style={styles.uppertitle}>{children}</Text>
    )
}

const styles=StyleSheet.create({
    uppertitle:{
        fontSize:25,
        textAlign:"center",
        color:"#ddb52f",
        fontWeight:"bold"
    },
})
export default NormalText