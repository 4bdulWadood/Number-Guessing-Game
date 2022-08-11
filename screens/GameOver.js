import { Text, View, Image, StyleSheet } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'


function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }){
    return (
        <View style={styles.rootContainer}>
            <Title style={{marginLeft: "0%"}}>GAME OVER!!!</Title>
            <View style={styles.imageContainer}> 
                <Image
                    style={styles.image} 
                    source={require('../images/success.png')} 
                />
            </View>
            <View>
                <Text style={styles.summaryText}>Your Phone Needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            </View>
            <View style={styles.resetButton}> 
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50%"
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center'
    },
    highlight: {
        color: Colors.primary500
    },
    resetButton: {
        marginTop: "10%",
        width: 200,
        height: 200
    }
})

export default GameOverScreen;