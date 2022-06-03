import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TicketDetailBottomRows = ({ total, date, description, rowStyle }) => {
    return (
        <>
            <View style={rowStyle}>
                <View style={[styles.textView, { flex: 2 }]}>
                    <Text style={styles.columnHeaderText}>Total Value</Text>
                    <Text>${total}</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.columnHeaderText}>Date Posted</Text>
                    <Text>{date}</Text>
                </View>
            </View>
            <View style={styles.flexCol}>
                <Text style={styles.columnHeaderText}>Description</Text>
                <Text>{description}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    flexCol: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    columnHeaderText: {
        color: "#c0c0c0"
    },
    textView: {
        flex: 1,
    },
})

export default TicketDetailBottomRows