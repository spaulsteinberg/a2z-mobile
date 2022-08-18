import React from 'react'
import { ActivityIndicator, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { AZTile } from '../ui'

const HistoryCategoryTile = ({ onPress, loading, title, number, color, loadingColor = "white" }) => {

    const { width } = useWindowDimensions()

    const wStyle = {
        width: width < 280 ? 50 : 90,
        height: width < 280 ? 50 : 90,
        borderRadius: width < 280 ? 25 : 45,
    }

    return (
        <AZTile color={color} onPress={() => onPress(title)}>
            <View style={styles.container}>
                {
                    !loading ? (
                        <>
                            <View style={[styles.valueContainer, wStyle]}>
                                <Text style={styles.valueText}>{number}</Text>
                            </View>
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.descriptionText}>{title}</Text>
                            </View>
                        </>
                    ) : <ActivityIndicator size="large" color={loadingColor} />
                }
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