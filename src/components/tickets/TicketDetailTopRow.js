import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../styles/Colors'
import { Feather } from '@expo/vector-icons';

const TicketDetailTopRow = ({ origin, destination, rowStyle }) => {
    return (
        <View style={[rowStyle, { alignItems: 'center' }]}>
            <View style={styles.textView}>
                <Text style={styles.columnHeaderText}>From</Text>
                <Text>{origin}</Text>
            </View>
            <View style={styles.icon}>
                <Feather name="truck" size={24} color={Colors.primary} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.columnHeaderText}>To</Text>
                <Text>{destination}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    columnHeaderText: {
        color: "#c0c0c0"
    },
    textView: {
        flex: 1,
    },
    icon: {
        flex: 1,
        alignItems: 'center'
    }
})

export default TicketDetailTopRow