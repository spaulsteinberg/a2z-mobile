import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TicketMapCallout = ({ title, address, markerColor = "black", titleColor = "black" }) => {
  return (
    <View style={styles.container}>
        <View style={styles.iconTextContainer}>
            <Text style={[styles.titleHeader, { color: titleColor }]}>{title}</Text>
            <MaterialCommunityIcons name="map-marker-radius-outline" size={24} color={markerColor} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.addressText}>
                { address }
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleHeader: {
        fontSize: 25
    },
    textContainer: {
        flexDirection: 'row',
        flexGrow: 1,
        backgroundColor: "#fff",
        padding: 12,
        maxWidth: 300,
        flexWrap: 'wrap',
        flex: 1
    },
    addressText: {
        flexGrow: 1,
        flexShrink: 1,
        alignItems: 'center',
    }
})

export default TicketMapCallout