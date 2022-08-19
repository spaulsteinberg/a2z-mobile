import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from '../../styles/Colors';

const TileColumn = ({ element, header }) => {
    return (
        <View style={styles.colContainer}>
            <Text style={styles.text}>{header}</Text>
            <Text style={styles.text}>{element}</Text>
        </View>
    )
}

const HistoryDetailTile = ({ id, date, total, distance, color = Colors.secondary800 }) => {
    const { navigate } = useNavigation()
    const handlePress = () => {
        navigate("TicketDetail", { id })
    }
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Pressable onPress={handlePress} android_ripple={{ color: "#fff" }} style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}>
                <TileColumn element={date} header="Date" />
                <TileColumn element={`$${total}`} header="Total" />
                <TileColumn element={`${distance} mi`} header="Distance" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 4,
        height: 75,
        width: '100%',
        borderRadius: 8,
        marginBottom: 12,
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },
    colContainer: {
        flex: 1/3
    },
    pressable: {
        width: '100%',
        height: '100%',
        flex: 1,
        padding: 8,
        flexDirection: 'row'
    }
})

export default HistoryDetailTile