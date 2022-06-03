import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TicketDetailCenterRow = ({ distance, duration, ratePerMile, rowStyle }) => {
    return (
        <View style={rowStyle}>
            <View style={styles.textView}>
                <Text style={styles.columnHeaderText}>Distance</Text>
                <Text>{distance}</Text>
            </View>
            <View style={styles.textView}>
                <Text style={[styles.columnHeaderText, styles.centeredRowItem]}>Duration</Text>
                <Text style={styles.centeredRowItem}>{duration.replace("hours", "h").replace("mins", "m")}</Text>
            </View>
            <View style={styles.textView}>
                <Text style={styles.columnHeaderText}>Rate Per Mile</Text>
                <Text>{`$${ratePerMile}/mi`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    columnHeaderText: {
        color: "#c0c0c0"
    },
    centeredRowItem: {
        textAlign: 'center'
    },
    textView: {
        flex: 1,
    },
})

export default TicketDetailCenterRow