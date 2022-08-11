import { StyleSheet, View } from 'react-native'

function Card({ children }){
    return (
        <View style={styles.card}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0, height: 2 
        },
        shadowRadius: 6,
        shadowOpacity: 20
    }
})

export default Card;