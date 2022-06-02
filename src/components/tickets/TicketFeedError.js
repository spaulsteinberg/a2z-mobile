import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors'

const TicketFeedError = ({ error }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100, 
        width: '100%',
        backgroundColor: Colors.error, 
        justifyContent: 'center', 
        padding: 12, 
        borderRadius: 8,
        marginVertical: 24,
    },
    text: {
        textAlign: 'center',
        color: "#fff"
    }
})

export default TicketFeedError