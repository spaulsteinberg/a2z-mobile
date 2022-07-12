import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import MapView from 'react-native-maps'

const MapTicketScreen = () => {
    const { width, height } = useWindowDimensions()
  return (
    <View style={styles.container}>
        <MapView style={{width, height}} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MapTicketScreen