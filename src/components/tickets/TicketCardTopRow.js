import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Colors from '../../styles/Colors';

const TicketCardTopRow = ({ origin, destination }) => {
    return (
        <View style={styles.infoRow}>
            <View style={styles.textItem}>
                <Text>{origin}</Text>
            </View>
            <View style={styles.dashedConnectingLine}></View>
            <View style={styles.truckContainer}>
                <Feather name="truck" size={24} color={Colors.secondary} />
            </View>
            <View style={styles.dashedConnectingLine}></View>
            <View style={styles.textItem}>
                <Text style={styles.rightJustify}>{destination}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginVertical: 8,
        flex: 1
    },
    dashedConnectingLine: {
        flex: 1, 
        borderWidth: 0.3, 
        borderStyle: 'dashed', 
        borderRadius: 1, 
        borderColor: Colors.secondary, 
        marginTop: 12
    },
    textItem: {
        flex: 2,
        alignItems: 'center'
    },
    truckContainer: {
        flex: 1, 
        alignItems: 'center'
    },
    rightJustify: {
        textAlign: 'right'
    }
})

export default TicketCardTopRow