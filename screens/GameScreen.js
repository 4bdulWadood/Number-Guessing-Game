import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude){
    var rndNum = Math.floor(Math.random() * (max - min)) + min;
    
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ pickedNumber, onGameOver }){
    const initialGuess = generateRandomBetween(1, 100, pickedNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(()=>{
        if(currentGuess === pickedNumber){
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, pickedNumber, onGameOver]);

    useEffect(()=>{
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction){
        if((direction==="lower" && currentGuess < pickedNumber) || (direction==="higher" && currentGuess > pickedNumber)){
                Alert.alert("Don't lie!", "You know that this is wrong...", [
                        {text: 'Sorry!', style: 'cancel'}
                ]);
                return ;
        }

        if(direction==="lower"){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [...prevGuessRounds, newRndNumber])
    }

    //The 'this' keyword is undefined in an event handler, that is the reason why we must sent 'this' as a parameter after doing .bind to the function. the second parameter of the .bind function will be the arguments that we want to be passed in. 

    return (
    <View style={styles.mainContainer}>
        <Title> Opponent's Guess </Title>
        <View style={styles.num}><NumberContainer>{currentGuess}</NumberContainer></View>
        <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,"lower")}><Ionicons name="md-remove" size={24} color="white"/></PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,"higher")}><Ionicons name="md-add" size={24} color="white"/></PrimaryButton>       
        </View>
        </View>
        </Card>
        <View style={styles.listContainer}>
            <FlatList 
                data={guessRounds} 
                renderItem={(itemData)=>
                <GuessLogItem 
                roundNumber={itemData.index+1} 
                guess={itemData.item}
                />}
                keyExtractor={(item)=>item}
            />
        </View>
    </View>
    )
}

/*To Display Longer Lists: use FlatLists*/
/*{guessRounds.map(guessRound => <Text key={guessRound}> {guessRound} </Text>)}*/

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
    instructionText: {
        marginBottom: 20
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    num:{
        marginBottom: 10
    },
    mainContainer: {
        flex: 1,
        marginTop: 50
    },
    listContainer: {
        flex: 1, 
        marginTop: 50,
        width: "75%",
        marginLeft: "12%"
    }

})


export default GameScreen;