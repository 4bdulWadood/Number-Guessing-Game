import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function Title({children, style}){
 return (
    <Text style={[styles.title, style]}>{children}</Text>
 )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 25,
        width: '75%',
        marginLeft: 50
    }
})

export default Title;

