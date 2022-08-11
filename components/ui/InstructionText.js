import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function InstructionText({ children, style }){
    return <Text style={[style, styles.instructionText]}> { children } </Text>
}

//if we want the default style to override the incoming style then we place the default style after the incoming style, else we place the default style first.

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 36
    }
})

export default InstructionText;