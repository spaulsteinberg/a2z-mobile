import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { AZTile } from '../ui'

const HistoryCategoryTile = ({ title, number, color }) => {

    const { width } = useWindowDimensions()

    const wStyle = {
        width: width < 280 ? 50 : 90,
        height: width < 280 ? 50 : 90,
        borderRadius: width < 280 ? 25 : 45,
    }

    return (
        <AZTile color={color}>
            <View style={styles.container}>
                <View style={[styles.valueContainer, wStyle]}>
                    <Text style={styles.valueText}>{number}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{title}</Text>
                </View>
            </View>
        </AZTile>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    valueContainer: {
        flex: 3,
        borderWidth: 3,
        borderColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    valueText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        textAlign: 'center'
    },
    descriptionContainer: {
        flex: 1
    },
    descriptionText: {
        fontSize: 22,
        color: "#fff"
    }
})

export default HistoryCategoryTile