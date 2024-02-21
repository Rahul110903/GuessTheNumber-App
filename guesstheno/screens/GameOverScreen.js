import React from "react"
import {StyleSheet, Text,View} from "react-native"
import Title from "../components/ui/Title"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"

const GameOverScreen=({userNumber,counting,startnewgameHandler})=>{
    return(
        <View style={styles.gameoverscreen}>
            <NumberContainer>Game Over</NumberContainer>
            <View>
                <Text style={styles.maintext}>
                    Your Phone needed <Text style={styles.bolding}>{counting}</Text> rounds to guess the number <Text style={styles.bolding}>{userNumber}</Text>.
                </Text>
            </View>
            <PrimaryButton onPress={()=>startnewgameHandler()}>Start New Game</PrimaryButton>
        </View>
    )
}
const styles=StyleSheet.create({
    gameoverscreen:{
        justifyContent:"center",
        marginVertical:70,
        padding:24
    },
    bolding:{
        fontWeight:"bold",
        fontSize:30
    },
    maintext:{
        fontSize:25,
        color:"black",
    }
})
export default GameOverScreen