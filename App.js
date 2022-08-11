import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView  } from 'react-native';
import Colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOver';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  function gameOverHandler(roundsNum){
    setGuessRounds(roundsNum);
    setGameOver(true);
  }

  function startNewGameHandler(){
    setUserNumber(null)
    setGameOver(false)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if (userNumber){
      screen = <GameScreen pickedNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }


  return (
    <LinearGradient colors = {[Colors.primary700 , Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
            source={require('./images/background.jpg')}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
