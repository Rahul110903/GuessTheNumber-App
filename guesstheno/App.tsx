/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameOver,setGameOver]=useState(false)
  const [counting,setcounting]=useState(1)


  const pickedNumberedHandler = number => {
    setUserNumber(number);
  };
  const Over=()=>{
    return setGameOver(true)
  }
  const count=()=>{
    return setcounting(counting+1);
  }

  const startnewgameHandler=()=>{
    setUserNumber(null);
    setGameOver(false);
    setcounting(1)
  }
  

  let screen = (
    <StartGameScreen
      pickednumberhandler={number => pickedNumberedHandler(number)}
    />
  );

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} Over={Over} count={count} counting={counting} />;
  }
  if(gameOver){
    screen = <GameOverScreen userNumber={userNumber} startnewgameHandler={startnewgameHandler} >Game Over</GameOverScreen>
  }
  

  return (
    <LinearGradient
      style={styles.wholeContainer}
      colors={['#4e0329', '#ddb52f']}>
      <ImageBackground
        source={require('./assests/dicephoto.webp')}
        imageStyle={styles.backgroundimage}
        style={styles.wholeContainer}
        resizeMode="cover">
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
  },
  backgroundimage: {
    opacity: 0.15,
  },
});
export default App;
