import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HistoryHeader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headerText}>
            <Text style={styles.text}>Dashboard</Text>
            <Text>Press a tile to view associated tickets.</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        flex: 1,
    }, 
    text: {
        fontWeight: '600',
        fontSize: 30
    },
})

export default HistoryHeader