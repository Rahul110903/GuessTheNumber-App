import React, { useState } from "react"
import {Alert, StyleSheet, Text,TextInput,View} from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import GameScreen from "./GameScreen"
import Title from "../components/ui/Title"
import NormalText from "../components/ui/NormalText"
import Card from "../components/ui/Card"


const StartGameScreen=(props)=>{
    const [number,setnumber]=useState();

    const resetinputhandler=()=>{
       setnumber("")
    }

    const confirmInputHandler=()=>{
        const chosenNumber = parseInt(number)
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert(
                "Invalid Number!",
                "Number has to be number between 1 to 99",
                [{text:"Okay",style:"destructive",onPress:resetinputhandler}]
            )
        }
        else{
            props.pickednumberhandler(number)
        }
    }
    return(
        <View style={styles.root}>
            <Title>Guess My Number</Title>
            <Card>
                <NormalText>Enter a Number</NormalText>
                <TextInput 
                    style={styles.numberinput} 
                    maxLength={2} 
                    keyboardType="number-pad" 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    value={number}
                    onChangeText={(text)=>setnumber(text)}
                    ></TextInput>
                <View style={styles.buttonOuterContainer}>
                    <View style={styles.buttonInnerConatiner}>
                        <PrimaryButton onPress={resetinputhandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonInnerConatiner}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}
const styles=StyleSheet.create({
    numberinput:{
        height:53,
        width:50,
        color:"#ddb52f",
        borderBottomColor:"#ddb52f",
        fontSize:32,
        borderBottomWidth:2,
        marginVertical:8,
        fontWeight:"bold",
        alignSelf:"center"
    },
    buttonOuterContainer:{
       flexDirection:"row",
       justifyContent:"center"
    },
    buttonInnerConatiner:{
        flex:1,
    },
    root:{
        padding:15,
    }
})

export default StartGameScreen