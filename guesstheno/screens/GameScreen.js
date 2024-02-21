import React, { useEffect, useState } from "react"
import {Alert, FlatList, ScrollView, StyleSheet, Text,View} from "react-native"
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import NormalText from "../components/ui/NormalText";
import ShowNumbers from "../components/game/ShowNumbers";
const generateRandomNumber=(max,min,execute)=>{
    const ranNum=Math.floor(Math.random()*(max-min))+min;

    if(ranNum===execute){
        return generateRandomNumber(max,min,execute)
    }
    else{
        return ranNum;
    }
}

const GameScreen=({userNumber,Over,count})=>{
    let min=1;
    let max=100;

    const initialnumber=generateRandomNumber(min,max,userNumber)
    const [guess,setGuess]=useState(initialnumber)
    const [showguess,setshowguess]=useState([])

    const nextGuessHandler=(direction)=>{
        if(direction==="lower" && guess<userNumber || direction==="higher" && guess>userNumber){
            Alert.alert("Don't lie", "You Know that this is wrong...",[
                {text:"Sorry!",style:"cancel"}
            ])
        }
        if(direction==="lower"){
            max=guess;
            count();
        }
        else{
            min=guess+1;
            count();
        }
        const newGenerateNumber=generateRandomNumber(min,max,guess)
        setGuess(newGenerateNumber);
        setshowguess((prevguess)=>[...prevguess,newGenerateNumber])
    }

    userNumber=parseInt(userNumber)

    useEffect(()=>{
        if(userNumber===guess){
            Over();
        }
        console.log(showguess)
    })
    

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guess}</NumberContainer>
            <Card>
                <NormalText>Higher or Lower ?</NormalText>
                <View style={styles.buttonOuterContainer}>
                    <View style={styles.buttonInnerConatiner}>
                        <PrimaryButton onPress={()=>nextGuessHandler("lower")}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonInnerConatiner}>
                        <PrimaryButton onPress={()=>nextGuessHandler("higher")}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.list}>
                <FlatList 
                    data={showguess}
                    renderItem={(element)=>{
                        return(
                            <ShowNumbers><Text>#{element.index+1}</Text> Opponent Guess - {element.item}</ShowNumbers>
                        )
                    }}
                    keyExtractor={(item)=>item}
                />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        padding:12,
        height:"100%"
    },
     buttonOuterContainer:{
       flexDirection:"row",
       justifyContent:"center"
    },
    buttonInnerConatiner:{
        flex:1,
    },
    list:{
        padding:16,
        flex:1,
        
    }
})
export default GameScreen